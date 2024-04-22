import * as React from 'react'
import { styled } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import { mainListItems, secondaryListItems } from './listItem'
import { NextPage } from 'next'
import { Collapse, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import IconifyIcon from 'src/components/Icon'
import ListVerticalLayout from './ListVerticalLayout'

const drawerWidth: number = 240

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      width: theme.spacing(12),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(12)
      }
    })
  }
}))
type TProps = {
  open: boolean
  toggleDrawer: () => void
}
const VerticalLayout: NextPage<TProps> = ({ open, toggleDrawer }) => {
  
  return (
    <Drawer variant='permanent' open={open}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1]
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <IconifyIcon icon={'mingcute:left-fill'} />
        </IconButton>
      </Toolbar>
      <Divider />
      <ListVerticalLayout open={open} />
    </Drawer>
  )
}
export default VerticalLayout
