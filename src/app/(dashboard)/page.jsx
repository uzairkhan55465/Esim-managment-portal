// MUI Imports
import Grid from '@mui/material/Grid'

// Components Imports
import Award from '@views/dashboard/Award'
import Transactions from '@views/dashboard/Transactions'
import WeeklyOverview from '@views/dashboard/WeeklyOverview'
import TotalEarning from '@views/dashboard/TotalEarning'
import LineChart from '@views/dashboard/LineChart'
import DistributedColumnChart from '@views/dashboard/DistributedColumnChart'
import DepositWithdraw from '@views/dashboard/DepositWithdraw'
import SalesByCountries from '@views/dashboard/SalesByCountries'
import CardStatVertical from '@components/card-statistics/Vertical'
import Table from '@views/dashboard/Table'
import Incorrect from '@/views/dashboard/Incorrect'
import GBActiceInfo from '@/views/dashboard/GBActiceInfo'
import TodaySales from '@/views/dashboard/TodaySales'
import ChartDataAnalysis from '@/views/dashboard/ChartDataAnalysis'
import Table1 from '@/views/dashboard/Table1'
import CircularCharts from '@/views/dashboard/CircularCharts'

const DashboardAnalytics = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={4}>
        <Award />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Transactions />
      </Grid>
      <Grid item xs={12} md={4} lg={4}>
        <Incorrect />
      </Grid>

      {/* <Grid item xs={12} md={12} lg={12}> */}
      <GBActiceInfo />
      {/* </Grid> */}

      <Grid item xs={12} md={6} lg={6}>
        <WeeklyOverview />
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <TodaySales />
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <ChartDataAnalysis />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <ChartDataAnalysis />
      </Grid>

      <Grid item xs={12}>
        <Table />
      </Grid>
      <Grid item xs={12}>
        <Table1 />
      </Grid>

      <Grid item xs={12}>
        <CircularCharts />
      </Grid>
    </Grid>
  )
}

export default DashboardAnalytics
