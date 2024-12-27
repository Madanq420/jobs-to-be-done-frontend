import ReactEcharts from 'echarts-for-react'
import React, { useState } from 'react'
import data from './sankey_chart.json'

const SankeyChart = ({ themes = [], categories = {} }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const [hoverPath, setHoverPath] = useState<any | string>('')

  const nodes: any = []
  const links: any = []

  // Create nodes and links from the data
  data.forEach((theme) => {
    nodes.push({ name: theme.name })

    theme.categories.forEach((category) => {
      nodes.push({ name: category.name })
      links.push({ source: theme.name, target: category.name, value: 10 })

      category.codes.forEach((code) => {
        nodes.push({ name: code })
        links.push({ source: category.name, target: code, value: 10 })
      })
    })
  })

  // Deduplicate nodes
  const uniqueNodes = Array.from(new Set(nodes.map((node: any) => node.name))).map((name) => ({
    name
  }))

  // Validate links
  const validLinks = links.filter(
    (link: any) =>
      uniqueNodes.some((node) => node.name === link.source) &&
      uniqueNodes.some((node) => node.name === link.target)
  )
  console.log('🚀 ~ SankeyChart ~ validLinks:', validLinks)

  const option = {
    series: {
      type: 'sankey',
      layout: 'none',
      emphasis: {
        focus: 'adjacency'
      },
      nodeGap: 10,
      data: uniqueNodes.map((node) => ({
        ...node,
        label: {
          formatter: (params: any) => params.name,
          fontSize: isFullScreen ? 11 : 8
        },
        emphasis: {
          focus: 'adjacency',
          label: {
            show: true,
            formatter: (params: any) => params.name
          }
        }
      })),
      links: validLinks,
      lineStyle: {
        color: 'source',
        curveness: 0.5
      },
      tooltip: {
        trigger: 'item',
        formatter: (params: any) => {
          const { data } = params
          return `${data.name || ''}${data.saliency ? `<br>Saliency: ${data.saliency}` : ''}`
        }
      }
    }
  }

  // const option = {
  //   series: [
  //     {
  //       type: 'sankey',
  //       layout: 'none',
  //       data: uniqueNodes,
  //       links: validLinks,
  //       lineStyle: {
  //         color: 'source',
  //         curveness: 0.5
  //       },
  //       tooltip: {
  //         trigger: 'item',
  //         formatter: (params: any) => {
  //           const { data } = params
  //           return `${data.name || ''}`
  //         }
  //       }
  //     }
  //   ]
  // }
  const handleNodeClick = (params: any) => {
    if (params?.data?.name) {
      const clickedNodeName = params.data.name
      const path: any = []
      links.forEach((link: any) => {
        if (link.target === clickedNodeName || path.includes(link.source)) {
          path.push(link.source, link.target)
        }
      })
      setHoverPath([...new Set(path)])
    }
  }

  return (
    <div className="p-4 w-full">
      <div className="w-full h-[70vh]">
        {nodes.length > 0 && links.length > 0 ? (
          <ReactEcharts
            option={option}
            style={{ height: '100%', width: '100%' }}
            onEvents={{ click: handleNodeClick }}
          />
        ) : (
          <p>No data available to display.</p>
        )}
      </div>
      {/* 
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
            Small Screen
          </IconButton>
          <ReactEcharts
            option={option}
            style={{ height: '100%', width: '100%' }}
            onEvents={{ click: handleNodeClick }}
          />
        </Box>
      </Modal> */}

      <div className="mt-4">
        <span className="font-semibold">How to interpret the Sankey Chart:</span> The Sankey Chart
        shows the hierarchical flow from themes to categories and then to codes. Nodes represent
        elements in the hierarchy, and the path width indicates the relative saliency of each
        element. Hover over a node to view its saliency.
      </div>
    </div>
  )
}

export default SankeyChart
