export type Speaker = {
  name: string
  title: string
  affiliation?: string
  image?: string
}

export const speakers: Speaker[] = [
  { name: "To Be Announced", title: "Keynote Speaker", affiliation: "TBA" },
  { name: "Student Mentor", title: "Qiskit Advocate", affiliation: "TBA" },
  { name: "Industry Guest", title: "Quantum Researcher", affiliation: "TBA" },
]
