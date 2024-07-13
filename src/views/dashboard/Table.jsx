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
    dataplan: '2GB',
    time: '10:00',
    shop: 'Shop 1'
  },
  {
    dataplan: '5GB',
    time: '10:59',
    shop: 'Shop 2'
  },
  {
    dataplan: '12GB',
    time: '15:00',
    shop: 'Shop 3'
  },
  {
    dataplan: '25GB',
    time: '09:00',
    shop: 'Shop 4'
  },
  {
    dataplan: '23GB',
    time: '09:10',
    shop: 'Shop 5'
  }
]

const Table = () => {
  return (
    <Card>
      <Typography
        variant='h5'
        className='mbe-4 m-4'
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <span style={{ flex: 1, textAlign: 'center' }}>
          <strong>Last 0 Sales</strong>
        </span>
      </Typography>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Data Plan</th>
              <th>Time</th>
              <th>shop</th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map((row, index) => (
              <tr key={index}>
                <td className='!plb-1'>
                  <div className='flex items-center gap-3'>
                    <div className='flex flex-col'>
                      <Typography color='text.primary' className='font-medium'>
                        {row.dataplan}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.time}</Typography>
                </td>
                <td className='!plb-1'>
                  <div className='flex gap-2'>
                    <Typography color='text.primary'>{row.shop}</Typography>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default Table
