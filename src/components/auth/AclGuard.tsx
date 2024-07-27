/* eslint-disable @typescript-eslint/no-unused-vars */
// ** React Imports
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

// ** Types
import { buildAbilityFor, type ACLObj, type AppAbility } from 'src/configs/acl'
import { useAuth } from 'src/hooks/useAuth'
import NotAuthorized from 'src/pages/401'
import BlankLayout from 'src/views/layouts/BlankLayout'
import { AbilityContext } from '../acl/Can'
import { PERMISSIONS } from 'src/configs/permission'

interface AclGuardProps {
  children: ReactNode
  authGuard?: boolean
  guestGuard?: boolean
  aclAbilities: ACLObj
  permission?: string[]
}

const AclGuard = (props: AclGuardProps) => {
  // ** Props
  const { aclAbilities, children, guestGuard = false, authGuard = true, permission } = props
  const auth = useAuth()
  const router = useRouter()
  let ability: AppAbility
  const permisstionUser = auth.user?.role?.permissions
    ? auth.user?.role?.permissions?.includes(PERMISSIONS.BASIC)
      ? [PERMISSIONS.DASHBOARD]
      : auth.user?.role?.permissions
    : []
    
  if (auth.user && !ability) {
    ability = buildAbilityFor(permisstionUser, permission)
  }

  console.log('>>>[..OBJ..]', {
    guestGuard,
    authGuard,
    ability: ability?.can(aclAbilities.action, aclAbilities.subject),
    permisstionUser,
    user: auth.user,
    router: router.route,
  })

  if (guestGuard || router.route === '/500' || router.route === '/404' || !authGuard) {
    if (ability && auth.user) {
      return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>
    } else {
      return children
    }
  }
  if (ability && auth.user && ability.can(aclAbilities.action, aclAbilities.subject)) {
    return <AbilityContext.Provider value={ability}>{children}</AbilityContext.Provider>
  }

  return (
    <BlankLayout>
      <NotAuthorized />
    </BlankLayout>
  )
}

export default AclGuard
