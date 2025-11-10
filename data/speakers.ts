export type Speaker = {
  name: string
  title: string
  affiliation?: string
  image?: string
}

export const speakers: Speaker[] = [
  { name: "Dr. Anupama Ray", title: "Senior Research Scientist", affiliation: "IBM Quantum" , image: "/Anupama_Ray.jpg"},
  { name: "Dr. Vinayak Jagadish", title: "Assistant Professor", affiliation: "Amrita Vishwa Vidyapeetham, Amritapuri", image: "/vj.jpg" },
  { name: "Dr. Mrittunjoy Guha Majumdar", title: "Assistant Professor", affiliation: "Amrita Vishwa Vidyapeetham, Faridabad", image: "/dmg.jpg" },
  { name: "Dr. Kolla Bhanu Prakash", title: "Associate Dean [R&D], Professor", affiliation: "CSE Department, K.L. Deemed to be University", image: "/Kolla_Bhanu_Prakash.jpg" }
]
