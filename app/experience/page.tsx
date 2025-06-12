import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "IT Help Desk Technician",
    company: "Ohio Valley Goodwill Industries",
    date: "March 2025 – Present",
    description: [
      "Administer IT systems including Active Directory, Microsoft Azure, and Microsoft 365.",
      "Provide remote user support and troubleshoot hardware/software issues remotely using tools like TeamViewer and NinjaOne as well as in-person.",
      "Manage workstation setup and maintenance to ensure optimal performance.",
      "Implement and maintain security solutions with Fortinet, including EDR, and FortiMail Cloud.",
      "Serve as the primary point of contact for all support tickets, and oversee VoIP systems, support Office 2019 applications, and handle server backups and domain controllers."
    ]
  },
  {
    title: "Member IT Help Desk Co-op",
    company: "Cincinnati Sports Club",
    date: "Aug 2024 – Dec2024",
    description: [
      "Provide technical support through software and hardware troubleshooting",
      "Assist in deploying new IT infrastructure and handling member inquiries"
    ]
  },
  {
    title: "Research Assistant",
    company: "Northern Kentucky University",
    date: "May 2024 – Aug 2024",
    description: [
      "Implemented AWS services like WAF and ALB for optimized traffic distribution",
      "Conducted experiments and analyzed data for cloud performance improvement"
    ]
  },
  {
    title: "Research Assistant (Course Development)",
    company: "Northern Kentucky University",
    date: "Aug 2024 – May2025",
    description: [
      "Utilize OpenStack and Docker to design and manage scalable solutions",
      "Develop and document remote desktop gateway solutions",
      "Testing new virtual machine software for NKU"
    ]
  }
]

export default function Experience() {
  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-60 text-white">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center text-neon-pink">Experience</h1>
          {experiences.map((exp, index) => (
            <Card key={index} className="bg-black bg-opacity-70 text-white mb-8">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-neon-green">{exp.title}</h2>
                <h3 className="text-xl mb-2 text-neon-blue">{exp.company}</h3>
                <p className="mb-4 text-neon-pink">{exp.date}</p>
                <ul className="list-disc list-inside">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
          <div className="text-center">
            <Button asChild className="bg-neon-pink hover:bg-pink-700 text-white">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}


