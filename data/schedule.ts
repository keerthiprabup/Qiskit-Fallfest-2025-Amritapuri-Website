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
  // {
  //   title: "Hackathon",
  //   date: "1 Nov, 2025",
  //   sessions: [{name: "Mode", location: "Online", time: "15 Day Hackathon"}
  //   ]
  // },
  {
    title: "Day 1 — Inauguration & Speaker Sessions",
    date: "15 Nov, 2025",
    sessions: [
      { time: "9:00–10:00", name: "Inauguration", location: "TBA" },
      { time: "10:00–11:30", name: "TBA", location: "TBA" },
      // { time: "11:30–11:45", name: "Tea Break", location: "TBA" },
      { time: "11:45–13:00", name: "TBA", location: "TBA" },
      { time: "13:00–13:40", name: "Lunch Break", location: "TBA" },
      { time: "13:40–16:00", name: "TBA", location: "TBA" }
    ],
  },
  {
    title: "Day 2 — Workshop - Qiskit 101",
    date: "16 Nov, 2025",
    sessions: [
      { time: "9:00–12:30", name: "Workshop", location: "TBA" },
      // { time: "11:30–11:45", name: "Tea Break", location: "TBA" },
      { time: "12:30–13:10", name: "Lunch Break", location: "TBA" },
      { time: "13:10–17:00", name: "Workshop Activity", location: "TBA" }
    ],
  },
]
