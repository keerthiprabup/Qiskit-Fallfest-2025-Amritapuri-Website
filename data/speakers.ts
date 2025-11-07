export type Speaker = {
  name: string
  title: string
  affiliation?: string
  image?: string
}

export const speakers: Speaker[] = [
  { name: "Dr. Anupama Ray", title: "Senior Research Scientist", affiliation: "IBM Quantum" , image: "/Anupama_Ray.jpg"},
  { name: "Dr. Kolla Bhanu Prakash", title: "Associate Dean [R&D], Professor", affiliation: "CSE Department, K.L. Deemed to be University", image: "/Kolla_Bhanu_Prakash.jpg" },
  { name: "Dr. Mrittunjoy Guha Majumdar", title: "Assistant Professor (Sr. Gr.), School of Artificial Intelligence, Amrita Vishwa Vidyapeetham, Faridabad", affiliation: "Adjunct Professor, National Institute of Advanced Studies (NIAS), Bengaluru", image: "/dmg.jpg" },
  { name: "To Be Announced", title: "TBA", affiliation: "TBA" }
]
