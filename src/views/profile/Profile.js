import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
  CImage,
  CToaster,
  CToastBody,
  CToast,
  CFormInput,
  CForm,
  CTooltip,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilThumbUp } from '@coreui/icons'
import { teamMembers } from 'src/DummyData/Usersdata.js'
import { notificationsData } from 'src/DummyData/NotificationsData.js'

const Profile = () => {
  const currentUser = teamMembers[0] || {
    name: 'Username',
    avatar: 'https://via.placeholder.com/150',
  }

  const [notifications, setNotifications] = useState(notificationsData)
  const [toastEl, setToastEl] = useState(null)

  const toggleLike = (id) => {
    setNotifications((prev) =>
      prev.map((n) => {
        if (n.id === id) {
          const isLiking = !n.liked
          addToast(isLiking ? 'You liked a notification!' : 'You unliked it.', 'warning')
          return { ...n, liked: isLiking }
        }
        return n
      })
    )
  }

  const toggleReadStatus = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, read: !n.read } : n
      )
    )
  }

  const handleCommentChange = (id, value) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, tempComment: value } : n
      )
    )
  }

  const handleCommentSubmit = (e, id) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      setNotifications((prev) =>
        prev.map((n) => {
          if (n.id === id && n.tempComment.trim()) {
            return {
              ...n,
              comments: [...n.comments, n.tempComment.trim()],
              tempComment: '',
            }
          }
          return n
        })
      )
    }
  }

  const addToast = (message, color = 'success') => {
    setToastEl(
      <CToast autohide delay={2000} color={color} key={Date.now()} visible>
        <CToastBody>{message}</CToastBody>
      </CToast>
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((n) => ({ ...n, read: true }))
    )
    addToast('All notifications marked as read')
  }

  return (
    <div className="container mt-4">
      {/* Profile Header */}
      <div className="text-center mb-4">
        <CImage
          src={currentUser.avatar}
          width={150}
          height={150}
          className="border"
          style={{ borderRadius: '50%', objectFit: 'cover' }}
        />
        <h2 className="mt-3">Welcome Back, {currentUser.name}!</h2>
      </div>

      <CCard>
        <CCardHeader className="d-flex justify-content-between align-items-center">
          <span className="fw-semibold">Notifications</span>
          <CButton size="sm" color="success" onClick={markAllAsRead}>
            Mark all as read
          </CButton>
        </CCardHeader>

        {/* NO SCROLLING HERE */}
        <CCardBody>
          {notifications.map((note) => (
            <div
              key={note.id}
              className={`mb-3 p-3 rounded shadow-sm d-flex align-items-start ${
                note.read ? 'bg-white' : 'bg-light border-start border-4 border-primary'
              }`}
              style={{
                transition: 'all 0.3s ease-in-out',
                opacity: note.read ? 0.8 : 1,
                fontSize: '0.95rem',
              }}
            >
              {/* Read toggle bar */}
              <div
                onClick={() => toggleReadStatus(note.id)}
                title={note.read ? 'Mark as unread' : 'Mark as read'}
                style={{
                  width: '20px',
                  height: '100%',
                  cursor: 'pointer',
                  marginRight: '1rem',
                  backgroundColor: note.read ? '#dee2e6' : '#0d6efd',
                  borderRadius: '5px',
                }}
              ></div>

              {/* Notification content */}
              <div style={{ flex: 1 }}>
                <div className="fw-medium mb-2">{note.message}</div>

                {note.comments.length > 0 && (
                  <ul className="list-unstyled mb-2 ps-3 text-muted">
                    {note.comments.map((comment, index) => (
                      <li key={index}>• {comment}</li>
                    ))}
                  </ul>
                )}

                <div className="d-flex flex-column flex-md-row align-items-start gap-2">
                  <CTooltip
                    content={note.liked ? 'Click to unlike' : 'Click to like'}
                    placement="top"
                  >
                    <CButton
                      size="sm"
                      color={note.liked ? 'primary' : 'secondary'}
                      variant={note.liked ? 'solid' : 'outline'}
                      onClick={() => toggleLike(note.id)}
                      style={{
                        backgroundColor: note.liked ? '#0d6efd' : 'transparent',
                        color: note.liked ? '#fff' : undefined,
                        borderColor: note.liked ? '#0d6efd' : undefined,
                      }}
                    >
                      <CIcon icon={cilThumbUp} className="me-1" />
                      {note.liked ? 'Liked' : 'Like'}
                    </CButton>
                  </CTooltip>

                  <CForm className="flex-grow-1">
                    <CFormInput
                      placeholder="Type comment"
                      size="sm"
                      value={note.tempComment}
                      onChange={(e) =>
                        handleCommentChange(note.id, e.target.value)
                      }
                      onKeyDown={(e) =>
                        handleCommentSubmit(e, note.id)
                      }
                      style={{ minWidth: '200px' }}
                    />
                  </CForm>
                </div>
              </div>
            </div>
          ))}
        </CCardBody>
      </CCard>

      <CToaster push={toastEl} placement="bottom-end" className="mb-3 me-3" />
    </div>
  )
}

export default Profile
