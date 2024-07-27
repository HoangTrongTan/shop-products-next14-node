/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { ReactElement, ReactNode } from 'react'

// ** Types
import { useAuth } from 'src/hooks/useAuth'

interface NoGuardProps {
  children: ReactNode
  fallback: ReactElement | null
}

const NoGuard = (props: NoGuardProps) => {
  // ** Props
  const { children, fallback} = props
  const auth = useAuth()
  if(auth.loading){
    return fallback
  }
  
  return <>{children}</>
}

export default NoGuard
