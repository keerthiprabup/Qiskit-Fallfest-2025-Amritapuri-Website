export type Session = {
  time: string
  name: string
  location: string
}

export type Day = {
  title: string
  date: string
  sessions: Session[]
}

export const schedule: Day[] = [
  {
    title: "Day 1 — Kickoff & Fundamentals",
    date: "Nov, 2025",
    sessions: [
      { time: "10:00–10:30", name: "Opening & Orientation", location: "Auditorium" },
      { time: "10:30–12:00", name: "Intro to Quantum Computing", location: "Auditorium" },
      { time: "13:30–15:30", name: "Qiskit 101 Workshop", location: "Lab 1" },
      { time: "16:00–17:00", name: "Community Meet & Greet", location: "Courtyard" },
    ],
  },
  {
    title: "Day 2 — Applications & Building",
    date: "Nov, 2025",
    sessions: [
      { time: "10:00–11:00", name: "Talk: Quantum Use Cases", location: "Auditorium" },
      { time: "11:30–13:00", name: "Qiskit Algorithms Deep Dive", location: "Seminar Hall" },
      { time: "14:30–17:00", name: "Project Sprint & Mentoring", location: "Lab 2" },
    ],
  },
]
