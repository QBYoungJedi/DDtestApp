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
  CFormTextarea,
  CFormInput,
  CForm
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilThumbUp } from '@coreui/icons'
import defaultAvatar from 'src/assets/images/avatars/Donshay.jpg'

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Donshay',
    profilePicture: defaultAvatar,
  })

  const [notifications, setNotifications] = useState(
    Array.from({ length: 15 }).map((_, i) => ({
      id: i + 1,
      message: `Notification message #${i + 1}`,
      liked: false,
      comments: [],
      tempComment: '',
    }))
  );
  // Checkbox handler
const toggleRead = (id) => {
  setNotifications((prev) =>
    prev.map((n) => (n.id === id ? { ...n, read: !n.read } : n))
  );
};

  const [toastEl, setToastEl] = useState(null)

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const url = URL.createObjectURL(file)
      setUser({ ...user, profilePicture: url })
    }
  }

  const toggleLike = (id) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id ? { ...n, liked: !n.liked } : n
      )
    )

    const likedNotification = notifications.find((n) => n.id === id)
    if (likedNotification) {
      const isLiking = !likedNotification.liked
      addToast(isLiking ? 'You liked a notification!' : 'You unliked it.', 'warning')
    }
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

  return (
    <div className="container mt-4">
      <div className="text-center mb-4">
        <label className="position-relative d-inline-block">
          <CImage
            src={user.profilePicture}
            width={150}
            height={150}
            className="border"
            style={{ borderRadius: '200%', cursor: 'pointer' }}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicChange}
            style={{ display: 'none' }}
            id="profilePicInput"
          />
          <small
            className="position-absolute bottom-0 end-0 bg-white border rounded px-1"
            style={{ cursor: 'pointer' }}
            onClick={() =>
              document.getElementById('profilePicInput').click()
            }
          ></small>
        </label>
        <h2 className="mt-3">Welcome Back, {user.name}!</h2>
      </div>

      <CCard>
        <CCardHeader>Notifications</CCardHeader>
        <CCardBody style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {notifications.map((note) => (
            <div
              key={note.id}
              className="border-bottom py-3 px-2 rounded"
              style={{ marginBottom: '1rem' }}
            >
              <div className="fw-medium mb-4">{note.message}</div>

              {/* Display submitted comments */}
              {note.comments.length > 0 && (
                <ul className="list-unstyled mb-2 ps-3">
                  {note.comments.map((comment, index) => (
                    <li key={index} className="text-muted">
                      • {comment}
                    </li>
                  ))}
                </ul>
              )}

              {/* Like and comment */}
              <div className="d-flex flex-column flex-md-row gap-2 align-items-start">
                <CButton
                  size="m"
                  color="primary"
                  variant="outline"
                  onClick={() => toggleLike(note.id)}
                  title={note.liked ? 'Unlike' : 'Like'}
                >
                  <CIcon icon={cilThumbUp} className="me-1" />
                  {note.liked ? 'Liked' : 'Like'}
                </CButton>

                <CForm>
                  <CFormInput
                  placeholder="Type comment"
                  rows={1}
                  value={note.tempComment}
                  onChange={(e) => handleCommentChange(note.id, e.target.value)}
                  onKeyDown={(e) => handleCommentSubmit(e, note.id)}
                  style={{ width: '900px' }}
                />
                </CForm>
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
