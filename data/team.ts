export type TeamMember = {
  name: string
  role: string
  image?: string
}

export const team: TeamMember[] = [
  { name: "Adwaitha V", role: "Lead Organizer", image: "/Adwaitha.png" },
  { name: "Keerthi Prabu P", role: "Co-Organizer", image: "/Keerthi.png" },
  { name: "Nikhil Nair", role: "Co-Organizer", image: "/Nikhil.jpg" }
  // { name: "Keerthi1", role: "Volunteer" },
  // { name: "Keerthi2", role: "Volunteer" },
  // { name: "Keerthi3", role: "Volunteer" },
]
