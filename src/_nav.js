import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilChartPie,
  cilSpeedometer,
  cilGroup,
  cilSettings,
  cilUser,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavItem,
    name: 'Profile',
    to: '/profile', //Link to settings page when created
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },

  {
    component: CNavItem,
    name: 'Teams',
    to: '/teams', //Link to settings page when created
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Settings',
    to: '/settings', //Link to settings page when created
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  },
]

export default _nav
