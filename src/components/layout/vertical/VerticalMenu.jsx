// MUI Imports
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'

// Typography
import Typography from '@mui/material/Typography'

// Third-party Imports
import PerfectScrollbar from 'react-perfect-scrollbar'

// Component Imports
import { Menu, SubMenu, MenuItem, MenuSection } from '@menu/vertical-menu'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'

// Styled Component Imports
import StyledVerticalNavExpandIcon from '@menu/styles/vertical/StyledVerticalNavExpandIcon'

// Style Imports
import menuItemStyles from '@core/styles/vertical/menuItemStyles'
import menuSectionStyles from '@core/styles/vertical/menuSectionStyles'

const RenderExpandIcon = ({ open, transitionDuration }) => (
  <StyledVerticalNavExpandIcon open={open} transitionDuration={transitionDuration}>
    <i className='ri-arrow-right-s-line' />
  </StyledVerticalNavExpandIcon>
)

const VerticalMenu = ({ scrollMenu }) => {
  // Hooks
  const theme = useTheme()
  const { isBreakpointReached, transitionDuration } = useVerticalNav()
  const ScrollWrapper = isBreakpointReached ? 'div' : PerfectScrollbar

  return (
    // eslint-disable-next-line lines-around-comment
    /* Custom scrollbar instead of browser scroll, remove if you want browser scroll only */
    <ScrollWrapper
      {...(isBreakpointReached
        ? {
            className: 'bs-full overflow-y-auto overflow-x-hidden',
            onScroll: container => scrollMenu(container, false)
          }
        : {
            options: { wheelPropagation: false, suppressScrollX: true },
            onScrollY: container => scrollMenu(container, true)
          })}
    >
      {/* Incase you also want to scroll NavHeader to scroll with Vertical Menu, remove NavHeader from above and paste it below this comment */}
      {/* Vertical Menu */}
      <Menu
        menuItemStyles={menuItemStyles(theme)}
        renderExpandIcon={({ open }) => <RenderExpandIcon open={open} transitionDuration={transitionDuration} />}
        renderExpandedMenuItemIcon={{ icon: <i className='ri-circle-line' /> }}
        menuSectionStyles={menuSectionStyles(theme)}
      >
        {/* <SubMenu href='/'>Dashboard</SubMenu>
        <SubMenu href={`/`} suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}>
          eSIM Salesss
        </SubMenu> */}
        <Typography variant='h6' className='mbe-4 m-4'>
          <div className='text-primary'>Dashboard</div>
        </Typography>
        <Typography variant='h6' className='mbe-4 m-4'>
          <div className='text-primary'>eSIM Sales</div>
        </Typography>

        <SubMenu
          label='Institutional'
          icon={<i className='ri-home-smile-line' />}

          // suffix={<Chip label='5' size='small' color='error' />}
        >
          <MenuItem
            href={`/`}

            // suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
          >
            Company Info
          </MenuItem>

          <MenuItem
            href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/ecommerce`}
            // suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
            target='_blank'
          >
            Branches
          </MenuItem>

          <MenuItem
            href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/ecommerce`}
            // suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
            target='_blank'
          >
            Staff
          </MenuItem>
          <MenuItem
            href={`${process.env.NEXT_PUBLIC_PRO_URL}/dashboards/academy`}
            // suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
            target='_blank'
          >
            Add Staff
          </MenuItem>
        </SubMenu>
        <SubMenu
          label='Reports'
          icon={<i className='ri-file-copy-line' />}

          // suffix={<Chip label='Pro' size='small' color='primary' variant='tonal' />}
        >
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/landing-page`} target='_blank'>
            Sales Report
          </MenuItem>
          <MenuItem href={`${process.env.NEXT_PUBLIC_PRO_URL}/front-pages/pricing`} target='_blank'>
            Orders Report
          </MenuItem>
        </SubMenu>
      </Menu>
    </ScrollWrapper>
  )
}

export default VerticalMenu
