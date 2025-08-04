import React from 'react'
import {
  CModal,
  CModalHeader,
  CModalBody,
  CModalFooter,
  CModalTitle,
  CButton,
} from '@coreui/react'

const AddInitiativeModal = ({
  visible,
  onClose,
  onSubmit,
  newInitiativeTitle,
  setNewInitiativeTitle,
  selectedObjective,
  setSelectedObjective,
  selectedOwner,
  setSelectedOwner,
  dueDate,
  setDueDate,
  metricName,
  setMetricName,
  metricValue,
  setMetricValue,
  metricType,
  setMetricType,
  teamObjectives,
  teamMembers,
}) => {
  return (
    <CModal visible={visible} onClose={onClose}>
      <CModalHeader closeButton>
        <CModalTitle>Add New Initiative</CModalTitle>
      </CModalHeader>
      <form onSubmit={onSubmit}>
        <CModalBody>
          {/* Initiative Title */}
          <div className="mb-3">
            <label htmlFor="titleInput" className="form-label">Initiative Title</label>
            <input
              id="titleInput"
              type="text"
              className="form-control"
              placeholder="Enter initiative title"
              value={newInitiativeTitle}
              onChange={(e) => setNewInitiativeTitle(e.target.value)}
              required
            />
          </div>

          {/* Team Objective */}
          <div className="mb-3">
            <label htmlFor="objectiveSelect" className="form-label">Link to Team Objective</label>
            <select
              id="objectiveSelect"
              className="form-select"
              value={selectedObjective}
              onChange={(e) => setSelectedObjective(e.target.value)}
              required
            >
              <option value="">Select your team’s objective</option>
              {teamObjectives.map((obj) => (
                <option key={obj.id} value={obj.id}>{obj.title}</option>
              ))}
            </select>
          </div>

          {/* Owner and Due Date */}
          <div className="mb-3 d-flex gap-3">
            <div className="flex-grow-1">
              <label className="form-label">Owner</label>
              <select
                className="form-select"
                value={selectedOwner}
                onChange={(e) => setSelectedOwner(e.target.value)}
                required
              >
                <option value="">Select owner</option>
                {teamMembers.map((member) => (
                  <option key={member.id} value={member.name}>
                    {member.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="form-label">Due Date</label>
              <input
                type="date"
                className="form-control"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Metric */}
          <div className="mb-3">
            <label className="form-label">Metric</label>
            <div className="d-flex gap-2">
              <input
                type="text"
                className="form-control"
                placeholder="Metric name"
                value={metricName}
                onChange={(e) => setMetricName(e.target.value)}
                required
              />
              <input
                type="number"
                className="form-control"
                style={{ width: '120px' }}
                placeholder="Value"
                value={metricValue}
                onChange={(e) => setMetricValue(e.target.value)}
                required
              />
              <select
                className="form-select"
                style={{ width: '150px' }}
                value={metricType}
                onChange={(e) => setMetricType(e.target.value)}
                required
              >
                <option value="">Type</option>
                <option value="number">Number</option>
                <option value="percentage">Percentage</option>
                <option value="yesno">Yes/No</option>
              </select>
            </div>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" type="button" onClick={onClose}>
            Cancel
          </CButton>
          <CButton color="primary" type="submit">
            Add
          </CButton>
        </CModalFooter>
      </form>
    </CModal>
  )
}

export default AddInitiativeModal