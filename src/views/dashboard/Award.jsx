// MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const Award = () => {
  return (
    <Card>
      <CardContent className='flex flex-col gap-2 relative items-start'>
        <div>
          <Typography variant='h5'>Active</Typography>
        </div>
        <div>
          <Typography variant='h4' color='primary'>
            28
          </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default Award
