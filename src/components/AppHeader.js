import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderNav,
  CHeaderToggler,
  useColorModes,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilContrast,
  cilMagnifyingGlass,
  cilMenu,
  cilMoon,
  cilSun,
} from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { initiatives } from 'src/DummyData/initiativesdata'
import { teamMembers } from 'src/DummyData/Usersdata'
import { comokr as okrs } from 'src/DummyData/companyobj'

const AppHeader = () => {
  const headerRef = useRef()
  const { colorMode, setColorMode } = useColorModes('coreui-free-react-admin-template-theme')
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  // Combine searchable items with type
  const dummyItems = [
    ...okrs.map((okr) => ({ type: 'OKR', title: okr.title })),
    ...initiatives.map((init) => ({ type: 'Initiative', title: init.title })),
    ...teamMembers.map((member) => ({ type: 'User', title: member.name })),
  ]

  useEffect(() => {
    const onScroll = () => {
      if (headerRef.current) {
        headerRef.current.classList.toggle('shadow-sm', document.documentElement.scrollTop > 0)
      }
    }
    document.addEventListener('scroll', onScroll)
    return () => document.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }
    const lower = query.toLowerCase()
    const filtered = dummyItems.filter((item) =>
      item.title.toLowerCase().includes(lower),
    )
    setResults(filtered)
  }, [query])

  return (
    <CHeader position="sticky" className="mb-4 p-0" ref={headerRef}>
      <CContainer className="border-bottom px-4" fluid>
        <CHeaderToggler
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
          style={{ marginInlineStart: '-14px' }}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>

        <CHeaderNav className="d-none d-md-flex flex-grow-1">
          <div className="position-relative d-flex ms-4">
            <input
              
              type="text"
              className="form-control form-control-sm me-2"
              placeholder="Search..."
              style={{ width: '700px' }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-sm btn-primary">
              <CIcon icon={cilMagnifyingGlass} size="lg" />
            </button>

            {query && results.length > 0 && (
              <div
                className="position-absolute bg-white border mt-1 rounded shadow-sm"
                style={{
                  zIndex: 1000,
                  maxHeight: '200px',
                  overflowY: 'auto',
                  width: '700px',
                  top: 'calc(100% + 0.25rem)',
                  left: 0,
                }}
              >
                {results.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2 border-bottom small"
                    style={{ cursor: 'default' }}
                  >
                    <strong>{item.type}:</strong> {item.title}
                  </div>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <div
                className="position-absolute bg-white border mt-1 rounded p-2 small text-muted"
                style={{
                  zIndex: 1000,
                  width: '700px',
                  top: 'calc(100% + 0.25rem)',
                  left: 0,
                }}
              >
                No results found.
              </div>
            )}
          </div>
        </CHeaderNav>

        {/* Light/Dark/Auto mode toggle unchanged */}
        <CHeaderNav>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
          <CDropdown variant="nav-item" placement="bottom-end">
            <CDropdownToggle caret={false}>
              {colorMode === 'dark' ? (
                <CIcon icon={cilMoon} size="lg" />
              ) : colorMode === 'auto' ? (
                <CIcon icon={cilContrast} size="lg" />
              ) : (
                <CIcon icon={cilSun} size="lg" />
              )}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem
                active={colorMode === 'light'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('light')}
              >
                <CIcon className="me-2" icon={cilSun} size="lg" /> Light
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'dark'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('dark')}
              >
                <CIcon className="me-2" icon={cilMoon} size="lg" /> Dark
              </CDropdownItem>
              <CDropdownItem
                active={colorMode === 'auto'}
                className="d-flex align-items-center"
                as="button"
                type="button"
                onClick={() => setColorMode('auto')}
              >
                <CIcon className="me-2" icon={cilContrast} size="lg" /> Auto
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <li className="nav-item py-1">
            <div className="vr h-100 mx-2 text-body text-opacity-75"></div>
          </li>
        </CHeaderNav>
      </CContainer>

      <CContainer className="px-4" fluid>
        <AppBreadcrumb />
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
