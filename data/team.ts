export type TeamMember = {
  name: string
  role: string
  image?: string
  linkedin: string
}

export const team: TeamMember[] = [
  { name: "Adwaitha V", role: "Lead Organizer", image: "/Adwaitha.png", linkedin: "https://www.linkedin.com/in/adwaitha-v-4b1452289/" },
  { name: "Keerthi Prabu P", role: "Co-Organizer", image: "/Keerthi.png", linkedin: "https://www.linkedin.com/in/keerthi-prabu-p/" },
  { name: "Nikhil Nair", role: "Co-Organizer", image: "/Nikhil.png", linkedin: "https://www.linkedin.com/in/nikhil-nair-b6a602282/"},
  // { name: "TBA", role: "Volunteer" },
  // { name: "TBA", role: "Volunteer" },
  // { name: "TBA", role: "Volunteer" }
]
