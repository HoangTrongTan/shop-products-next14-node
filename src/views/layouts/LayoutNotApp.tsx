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
import { useTheme } from '@mui/material'

const LayoutNotApp: NextPage<TProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()

  return (
    <Box sx={{ display: 'flex' }}>
      <HorizontalLayout
        toggleDrawer={() => {
          setOpen
        }}
        open={open}
        isHiddenMenu={true}
      />
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
        <Container
          maxWidth='lg'
          sx={{
            m: 4,
            maxWidth: 'unset !important',
            width: 'calc(100vw - 32px)',
            overflow: 'auto',
            maxHeight: `calc(100vh - ${theme.mixins.toolbar.minHeight}) - 32px`,
          }}
        >
          {children}
        </Container>
      </Box>
    </Box>
  )
}

export default LayoutNotApp
