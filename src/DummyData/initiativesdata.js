import { teamMembers } from 'src/DummyData/Usersdata.js'

export const initiatives = [
  {
    id: 1,
    title: 'Fix Mobile Responsiveness',
    dueDate: '09-15-2025',
    progress: 25,
    isFavorite: false,
    owner: teamMembers[0],
  },
  {
    id: 2,
    title: 'Update OKR Dashboard',
    dueDate: '10-01-2025',
    progress: 60,
    isFavorite: true,
    owner: teamMembers[0],
  },
  {
    id: 3,
    title: 'Launch Internal Newsletter',
    dueDate: '08-20-2026',
    progress: 80,
    isFavorite: false,
    owner: teamMembers[2], // 3rd user
  },
  {
    id: 4,
    title: 'Improve Onboarding Flow',
    dueDate: '09-30-2025',
    progress: 45,
    isFavorite: true,
    owner: teamMembers[3],
  },
  {
    id: 5,
    title: 'Upgrade Security Protocols',
    dueDate: '10-10-2025',
    progress: 10,
    isFavorite: false,
    owner: teamMembers[4],
  },
  {
    id: 6,
    title: 'Automate Quarterly Reporting',
    dueDate: '11-01-2025',
    progress: 70,
    isFavorite: true,
    owner: teamMembers[5],
  },
]
