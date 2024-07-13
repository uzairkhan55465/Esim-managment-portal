//MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

// Components Imports
import OptionMenu from '@core/components/option-menu'
import CustomAvatar from '@core/components/mui/Avatar'

const GBActiceInfo = () => {
  return (
    <>
      {/* 3 GB */}
      <Grid item xs={12} md={2.4} lg={2.4}>
        <Card>
          <CardContent className='flex flex-col gap-2 relative items-start'>
            <div>
              <Typography variant='h5'>3 GB Active</Typography>
            </div>
            <div>
              <Typography variant='h4' color='primary'>
                4
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* 5 GB */}
      <Grid item xs={12} md={2.4} lg={2.4}>
        <Card>
          <CardContent className='flex flex-col gap-2 relative items-start'>
            <div>
              <Typography variant='h5'>5 GB Active</Typography>
            </div>
            <div>
              <Typography variant='h4' color='primary'>
                5
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* 10 GB */}
      <Grid item xs={12} md={2.4} lg={2.4}>
        <Card>
          <CardContent className='flex flex-col gap-2 relative items-start'>
            <div>
              <Typography variant='h5'>10 GB Active</Typography>
            </div>
            <div>
              <Typography variant='h4' color='primary'>
                4
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* 15 GB */}
      <Grid item xs={12} md={2.4} lg={2.4}>
        <Card>
          <CardContent className='flex flex-col gap-2 relative items-start'>
            <div>
              <Typography variant='h5'>15 GB Active</Typography>
            </div>
            <div>
              <Typography variant='h4' color='primary'>
                11th
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* 20 GB */}
      <Grid item xs={12} md={2.4} lg={2.4}>
        <Card>
          <CardContent className='flex flex-col gap-2 relative items-start'>
            <div>
              <Typography variant='h5'>20 GB Active</Typography>
            </div>
            <div>
              <Typography variant='h4' color='primary'>
                5
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  )
}

export default GBActiceInfo
