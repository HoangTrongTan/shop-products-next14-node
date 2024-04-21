import { Box, BoxProps, styled } from '@mui/material'
import { NextPage } from 'next'
import * as React from 'react'

type TProps = {
  children: React.ReactNode
}
const BlankLayoutWrapper = styled(Box)<BoxProps>(
  (
    {
      // theme
    }
  ) => ({
    height: '100vh'
  })
)

const BlankLayout: NextPage<TProps> = ({ children }) => {
  return (
    <BlankLayoutWrapper>
      <Box sx={{ overflow: 'hidden', minHeight: '100ch' }}>{children}</Box>
    </BlankLayoutWrapper>
  )
}

export default BlankLayout
