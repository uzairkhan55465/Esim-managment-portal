'use client'

// Next Imports
import { useEffect, useState } from 'react'

import dynamic from 'next/dynamic'

// MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CircularProgress from '@mui/material/CircularProgress'

// Styled Component Imports
const AppReactApexCharts = dynamic(() => import('@/libs/styles/AppReactApexCharts'), { ssr: false })

const CircularCharts = () => {
  // Hooks
  const theme = useTheme()
  const [isClient, setIsClient] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  // Ensure client-side rendering
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient) {
      // Simulate a delay to ensure the charts have time to render
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 1000) // Adjust the delay as needed

      return () => clearTimeout(timer)
    }
  }, [isClient])

  // Vars
  const disabled = 'var(--mui-palette-text-disabled)'

  const donutChartOptions = (percentage, color) => ({
    chart: {
      type: 'donut'
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '16px',
              color: color,
              offsetY: -10
            },
            value: {
              show: true,
              fontSize: '20px',
              color: color,
              offsetY: 10,
              formatter: () => `${percentage}%`
            },
            total: {
              show: true,
              label: 'Available',
              color: color,
              formatter: () => `${percentage}%`
            }
          }
        }
      }
    },
    stroke: {
      colors: [theme.palette.background.paper]
    },
    labels: ['Available', 'Used'],
    colors: [color, disabled],
    legend: {
      show: false
    }
  })

  const chartData = [
    { percentage: 75, color: theme.palette.primary.main },
    { percentage: 50, color: theme.palette.secondary.main },
    { percentage: 85, color: theme.palette.success.main },
    { percentage: 60, color: theme.palette.warning.main },
    { percentage: 90, color: theme.palette.error.main }
  ]

  if (!isClient || isLoading) {
    return (
      <Grid container spacing={2} justifyContent='center' alignItems='center'>
        <CircularProgress />
      </Grid>
    )
  }

  return (
    <Grid container spacing={2}>
      {chartData.map((data, index) => (
        <Grid item xs={12} sm={6} md={2.4} key={index}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <AppReactApexCharts
                type='donut'
                height={200}
                series={[data.percentage, 100 - data.percentage]}
                options={donutChartOptions(data.percentage, data.color)}
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default CircularCharts
