import { NextPage } from 'next'
type TProps = {
  open: boolean
  toggleDrawer: () => void
  isHiddenMenu?: boolean // ? để thể hiện giá trị mặc định
}
import * as React from 'react'
import { styled, useTheme } from '@mui/material/styles'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import IconifyIcon from 'src/components/Icon'
import UserDropDown from 'src/components/user-dropdown'

const drawerWidth: number = 240

interface AppBarProps extends MuiAppBarProps {
  open?: boolean
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: theme.palette.customColors.bodyBg,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}))

const HorizontalLayout: NextPage<TProps> = ({ open, toggleDrawer, isHiddenMenu }) => {
  const theme = useTheme()

  return (
    <AppBar position='absolute' open={open}>
      <Toolbar
        sx={{
          pr: '30px', // keep right padding when drawer closed,
          margin: '0 20px'
        }}
      >
        {!isHiddenMenu && (
          <IconButton
            edge='start'
            color='inherit'
            aria-label='open drawer'
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' })
            }}
          >
            <IconifyIcon icon={'ic:round-menu'} />
          </IconButton>
        )}

        <Typography component='h1' variant='h6' color='inherit' noWrap sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <UserDropDown />
        {/* <IconButton color='inherit'>
          <Badge badgeContent={4} sx={{ color: theme.palette.error.main }}>
            <IconifyIcon icon={'ri:notification-4-fill'} />
          </Badge>
        </IconButton> */}
      </Toolbar>
    </AppBar>
  )
}

export default HorizontalLayout
