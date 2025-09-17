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
    title: "Hackathon",
    date: "1 Nov, 2025",
    sessions: [{name: "Mode", location: "Online", time: "15 Day Hackathon"}
    ]
  },
  {
    title: "Day 1 — Kickoff & Fundamentals",
    date: "15 Nov, 2025",
    sessions: [
      { time: "10:00–10:30", name: "TBA", location: "TBA" },
      { time: "10:30–12:00", name: "TBA", location: "TBA" },
      { time: "13:30–15:30", name: "TBA", location: "TBA" },
      { time: "16:00–17:00", name: "TBA", location: "TBA" },
    ],
  },
  {
    title: "Day 2 — Workshop - Qiskit 101",
    date: "16 Nov, 2025",
    sessions: [
      { time: "10:00–11:00", name: "TBA", location: "TBA" },
      { time: "11:30–13:00", name: "TBA", location: "TBA" },
      { time: "14:30–17:00", name: "TBA", location: "TBA" },
    ],
  },
]
