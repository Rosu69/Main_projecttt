import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "Member IT Help Desk Co-op",
    company: "Cincinnati Sports Club",
    date: "Aug 2024 – Present",
    description: [
      "Provide technical support through software and hardware troubleshooting",
      "Assist in deploying new IT infrastructure and handling member inquiries"
    ]
  },
  {
    title: "Front Desk Receptionist",
    company: "Staybridge Suites",
    date: "May 2024 – Aug 2024",
    description: [
      "Delivered exceptional customer service by efficiently handling guest check-ins, reservations, and inquiries",
      "Managed front desk operations by coordinating with housekeeping, maintenance, and other departments"
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
    date: "Aug 2024 – Present",
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


