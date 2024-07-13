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
    package: '2GB',
    stock: '10:00',
    sold: 'Shop 1',
    incorrect: 'Shop 1',
    active: 'Shop 1'
  }
]

const Table1 = () => {
  return (
    <Card>
      <div className='overflow-x-auto'>
        <table className={tableStyles.table}>
          <thead>
            <tr>
              <th>Package</th>
              <th>Stock</th>
              <th>sold</th>
              <th>Incorrect</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {rowsData.map((row, index) => (
              <tr key={index}>
                <td className='!plb-1'>
                  <div className='flex items-center gap-3'>
                    <div className='flex flex-col'>
                      <Typography color='text.primary' className='font-medium'>
                        {row.package}
                      </Typography>
                    </div>
                  </div>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.stock}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.sold}</Typography>
                </td>
                <td className='!plb-1'>
                  <Typography>{row.incorrect}</Typography>
                </td>
                <td className='!plb-1'>
                  <div className='flex gap-2'>
                    <Typography color='text.primary'>{row.active}</Typography>
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

export default Table1
