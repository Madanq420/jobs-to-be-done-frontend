import FullscreenIcon from '@mui/icons-material/Fullscreen'
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit'
import { Box, IconButton, Modal, Typography } from '@mui/material'
import ReactEcharts from 'echarts-for-react'
import React, { useState } from 'react'

const SankeyChart = ({ themes = [], categories = {} }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [hoverPath, setHoverPath] = useState('')

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }

  const generateSankeyData = () => {
    const nodes = []
    const links = []
    const nodeSet = new Set() // To track unique node names

    if (!themes || themes.length === 0) {
      console.error('Themes data is missing or invalid.')
      return { nodes, links } // Return empty structures if themes are invalid
    }

    themes.forEach((theme) => {
      // Add theme node
      const themeNode = `${theme.name} (Theme)` // Append type for uniqueness
      if (!nodeSet.has(themeNode)) {
        nodes.push({ name: themeNode, saliency: theme.saliency })
        nodeSet.add(themeNode)
      }

      if (theme.categories_included && theme.categories_included.length > 0) {
        theme.categories_included.forEach((category) => {
          const categoryData = categories[category]
          if (categoryData) {
            const categoryNode = `${category} (Category)` // Append type for uniqueness
            if (!nodeSet.has(categoryNode)) {
              nodes.push({ name: categoryNode, saliency: categoryData.saliency })
              nodeSet.add(categoryNode)
            }

            // Link theme to category
            links.push({
              source: themeNode,
              target: categoryNode,
              value: categoryData.saliency
            })

            // Add codes and link categories to codes
            if (categoryData.codes_included && categoryData.codes_included.length > 0) {
              categoryData.codes_included.forEach((code) => {
                const codeNode = `${code} (Code)` // Append type for uniqueness
                if (!nodeSet.has(codeNode)) {
                  nodes.push({ name: codeNode })
                  nodeSet.add(codeNode)
                }

                links.push({
                  source: categoryNode,
                  target: codeNode,
                  value: 1 // Each code has equal saliency for visualization purposes
                })
              })
            } else {
              console.warn(`Category "${category}" has no codes included.`)
            }
          } else {
            console.warn(`Category "${category}" not found in categories.`)
          }
        })
      } else {
        console.warn(`No categories included in theme "${theme.name}".`)
      }
    })

    return { nodes, links }
  }

  const { nodes, links } = generateSankeyData()

  const option = {
    series: {
      type: 'sankey',
      layout: 'none',
      data: nodes.map((node) => ({
        ...node,
        label: {
          formatter: (params) => params.name,
          fontSize: isFullScreen ? 11 : 8
        },
        emphasis: {
          focus: 'adjacency',
          label: {
            show: true,
            formatter: (params) => params.name
          }
        }
      })),
      links: links,
      lineStyle: {
        color: 'source',
        curveness: 0.5
      },
      tooltip: {
        trigger: 'item',
        formatter: (params) => {
          const { data } = params
          return `${data.name || ''}${data.saliency ? `<br>Saliency: ${data.saliency}` : ''}`
        }
      }
    }
  }

  const handleNodeClick = (params) => {
    if (params?.data?.name) {
      const clickedNodeName = params.data.name
      const path = []
      links.forEach((link) => {
        if (link.target === clickedNodeName || path.includes(link.source)) {
          path.push(link.source, link.target)
        }
      })
      setHoverPath([...new Set(path)])
    }
  }

  return (
    <Box>
      <Box position="relative" width="100%" height={500}>
        <IconButton
          style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}
          onClick={toggleFullScreen}
        >
          <FullscreenIcon />
        </IconButton>
        {nodes.length > 0 && links.length > 0 ? (
          <ReactEcharts
            option={option}
            style={{ height: '100%', width: '100%' }}
            onEvents={{ click: handleNodeClick }}
          />
        ) : (
          <Typography variant="body2" color="error" mt={2}>
            No data available to display.
          </Typography>
        )}
      </Box>

      <Modal
        open={isFullScreen}
        onClose={toggleFullScreen}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Box bgcolor="white" p={2} width="90%" height="90%" position="relative">
          <Typography variant="h6" gutterBottom>
            Full-Screen Sankey Chart
          </Typography>
          <IconButton
            style={{ position: 'absolute', top: 20, right: 20 }}
            onClick={toggleFullScreen}
          >
            <FullscreenExitIcon />
          </IconButton>
          <ReactEcharts
            option={option}
            style={{ height: '100%', width: '100%' }}
            onEvents={{ click: handleNodeClick }}
          />
        </Box>
      </Modal>

      <Typography variant="body2" mt={2}>
        <strong>How to interpret the Sankey Chart:</strong> The Sankey Chart shows the hierarchical
        flow from themes to categories and then to codes. Nodes represent elements in the hierarchy,
        and the path width indicates the relative saliency of each element. Hover over a node to
        view its saliency.
      </Typography>
    </Box>
  )
}

export default SankeyChart
