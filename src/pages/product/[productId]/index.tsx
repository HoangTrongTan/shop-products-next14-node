// ** Import Next
import { NextPage } from 'next'
import { ReactNode } from 'react'

// ** views
import LayoutNotApp from 'src/views/layouts/LayoutNotApp'
import DetailsProductPage from 'src/views/pages/product/DetailsProduct'

type TProps = {}

const Index: NextPage<TProps> = () => {
  return <DetailsProductPage />
}

export default Index

Index.guestGuard = false
Index.authGuard = false
Index.getLayout = (page: ReactNode) => <LayoutNotApp>{page}</LayoutNotApp>
