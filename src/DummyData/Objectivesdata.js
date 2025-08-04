import { initiatives } from 'src/DummyData/initiativesdata.js'

const getInitiativesForObjective = (objectiveId) =>
  initiatives.filter((i) => i.objectiveId === objectiveId)


export const objectives = [
  {
    id: 1,
    title: 'Enhance User Experience',
    dueDate: '10-15-2025',
    isFavorite: true,
    get initiatives() {
      return getInitiativesForObjective(this.id)
    },
    get owner() {
      return this.initiatives[0]?.owner || null
    },
    get progress() {
      if (!this.initiatives.length) return 0
      const total = this.initiatives.reduce((sum, i) => sum + i.progress, 0)
      return Math.round(total / this.initiatives.length)
    },
  },
  {
    id: 2,
    title: 'Strengthen Internal Communication',
    dueDate: '11-01-2025',
    isFavorite: false,
    get initiatives() {
      return getInitiativesForObjective(this.id)
    },
    get owner() {
      return this.initiatives[0]?.owner || null
    },
    get progress() {
      if (!this.initiatives.length) return 0
      const total = this.initiatives.reduce((sum, i) => sum + i.progress, 0)
      return Math.round(total / this.initiatives.length)
    },
  },
]

export const completedObjectives = [
  {
    id: 3,
    title: 'Automate Reporting System',
    dueDate: '07-15-2025',
    isFavorite: false,
    get initiatives() {
      return getInitiativesForObjective(this.id)
    },
    get owner() {
      return this.initiatives[0]?.owner || null
    },
    get progress() {
      return 100
    },
  },
]
