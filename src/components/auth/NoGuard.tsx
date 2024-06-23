/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { useRouter } from 'next/router'
import { ReactElement, ReactNode } from 'react'

// ** Types
import { buildAbilityFor, type ACLObj, type AppAbility } from 'src/configs/acl'
import { useAuth } from 'src/hooks/useAuth'
import NotAuthorized from 'src/pages/401'
import BlankLayout from 'src/views/layouts/BlankLayout'
import { AbilityContext } from '../acl/Can'

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
