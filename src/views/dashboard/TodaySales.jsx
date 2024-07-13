// MUI Imports
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'

// Third-party Imports
import classnames from 'classnames'

// Components Imports
import CustomAvatar from '@core/components/mui/Avatar'

// Styles Imports
import tableStyles from '@core/styles/table.module.css'

// Vars
const rowsData = [
  {
    avatarSrc: '/images/avatars/1.png',
    name: 'Jordan Stevenson',
    username: '@amiccoo',
    email: 'Jacinthe_Blick@hotmail.com',
    iconClass: 'text-primary',
    roleIcon: 'ri-vip-crown-line',
    role: 'Admin',
    status: 'pending'
  }
]

const TodaySales = () => {
  return (
    <Card>
      {/* bold heading */}
      <Typography
        variant='h5'
        className='mbe-4 m-4'
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span style={{ flex: 1, textAlign: 'left' }}>
          <strong>Today Sales</strong>
        </span>

        <span style={{ flex: 1, textAlign: 'right' }}>
          <strong>0</strong>
        </span>
      </Typography>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Data Plan</th>
              <th>Total</th>
              <th>Growth</th>{' '}
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </Card>
  )
}

export default TodaySales
