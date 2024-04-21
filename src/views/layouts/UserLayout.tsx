import { NextPage } from 'next'
import { ReactNode } from 'react'
type TProps = {
  children: ReactNode
}

import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'

import HorizontalLayout from './HorizontalLayout'
import VerticalLayout from './VerticalLayout'

// const drawerWidth: number = 240

// const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
//   '& .MuiDrawer-paper': {
//     position: 'relative',
//     whiteSpace: 'nowrap',
//     width: drawerWidth,
//     transition: theme.transitions.create('width', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen
//     }),
//     boxSizing: 'border-box',
//     ...(!open && {
//       overflowX: 'hidden',
//       transition: theme.transitions.create('width', {
//         easing: theme.transitions.easing.sharp,
//         duration: theme.transitions.duration.leavingScreen
//       }),
//       width: theme.spacing(7),
//       [theme.breakpoints.up('sm')]: {
//         width: theme.spacing(9)
//       }
//     })
//   }
// }))

const UserLayout: NextPage<TProps> = ({ children }) => {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <VerticalLayout toggleDrawer={toggleDrawer} open={open} />
      <HorizontalLayout toggleDrawer={toggleDrawer} open={open} />
      <Box
        component='main'
        sx={{
          backgroundColor: theme =>
            theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto'
        }}
      >
        <Toolbar />
        <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
          {children}
        </Container>
      </Box>
    </Box>
  )
}

export default UserLayout
