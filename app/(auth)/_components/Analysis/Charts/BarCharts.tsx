import React from 'react'
import ReactECharts from 'echarts-for-react'
import barChartData from './bar_chart_top_codes_with_references.json'

const colorPalette = ['#5470C6', '#91CC75', '#EE6666', '#FAC858'];

const BarChart: React.FC = () => {
  const options = {
    title: {
      text: 'Category',
      subtext: '2024',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow' 
      }
    },
    xAxis: {
      type: 'category',
      data: barChartData.map((item) => item.code),
      axisLabel: {
        formatter: '{value}'
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      }
    },
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: barChartData.map((item) => ({
          value: item.occurrences,
          itemStyle: {
            color: colorPalette[barChartData.indexOf(item) % colorPalette.length],
          },
        })),
      }
    ],
    legend: {
      data: ['Category'],
      bottom: 10
    }
  }

  return <ReactECharts option={options} style={{ height: 400 }} />
}

export default BarChart
