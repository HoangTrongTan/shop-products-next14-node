import { NextPage } from 'next'
import { ReactNode } from 'react'
import LayoutNotApp from 'src/views/layouts/LayoutNotApp'
import MyprofilePage from 'src/views/pages/my-profile'

type TProps = {}
const Index: NextPage<TProps> = () => {
  return <MyprofilePage />
}

export default Index
Index.getLayout = (page: ReactNode) => <LayoutNotApp>{page}</LayoutNotApp>
