export type Session = {
  time: string
  name: string
  speaker: string
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
  //   sessions: [{name: "Mode", speaker: "Online", time: "15 Day Hackathon"}
  //   ]
  // },
  {
    title: "Day 1 — Inauguration & Speaker Sessions",
    date: "15 Nov, 2025",
    sessions: [
      { time: "8:30-9:00", name: "Registration", speaker: "" },
      { time: "9:00–9:30", name: "Inauguration Ceremony", speaker: "" },
      // { time: "11:30–11:45", name: "Tea Break", speaker: "TBA" },
      { time: "9:30–10:30", name: "Historical Overview and Current State of Quantum Computing", speaker: "Dr. Anupama Ray" },
      { time: "10:30–10:50", name: "Tea Break", speaker: "" },
      { time: "10:50–12:30", name: "TBA", speaker: "TBA" },
      { time: "12:30–13:20", name: "Lunch Break", speaker: "" },
      { time: "13:20–14:50", name: "Quantum entanglement, its realisations and use in quantum information", speaker: "Dr. Mrittunjoy Guha Majumdar" },
      { time: "14:50–15:10", name: "Tea Break", speaker: "" },
      { time: "15:10–16:00", name: "Installation & Prerequisites for Day 2", speaker: "TBA" }
      
    ],
  },
  {
    title: "Day 2 — Workshop - Qiskit 101",
    date: "16 Nov, 2025",
    sessions: [
      { time: "8:30–9:00", name: "Registration", speaker: "" },
      { time: "9:00–9:15", name: "Speaker Introduction & Session Overview", speaker: "" },
      { time: "9:15–10:30", name: "Practical Quantum Computing Workshop Session Part-1", speaker: "Dr. Kolla Bhanu Prakash" },
      { time: "10:30–10:45", name: "Tea Break", speaker: "" },
      { time: "10:45–11:45", name: "Practical Quantum Computing Workshop Session Part-2", speaker: "Dr. Kolla Bhanu Prakash" },
      { time: "11:45–12:15", name: "Hands-on Problem Statement Release and Team Formation", speaker: "" },
      { time: "12:15–13:15", name: "Lunch Break", speaker: "" },
      { time: "13:15–15:15", name: "Qiskit Quantum Sprint", speaker: "" },
      { time: "15:15–16:15", name: "Evaluation", speaker: "Dr. Kolla Bhanu Prakash" },
      { time: "16:15–16:30", name: "Winner Announcement & Closing Ceremony", speaker: "" },
    ],
  },
]
