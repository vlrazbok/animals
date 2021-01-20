import React from 'react'

import {AdminPage} from './pages/AdminPage'
import { ClientPage } from './pages/ClientPage'


export const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return(<AdminPage />)
  }
  return (
    <ClientPage />
  )
}
