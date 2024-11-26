import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const skills = [
  "Technical Support",
  "IT Support",
  "Imaging & Deployment",
  "Microsoft Excel",
  "Web Server Administration",
  "Active Directory",
  "Advanced Linux",
  "Scripting",
  "Oracle Database Administration"
]

export default function Skills() {
  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-60 text-white">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center text-neon-pink">Skills</h1>
          <Card className="bg-black bg-opacity-70 text-white mb-8">
            <CardContent className="p-6">
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-neon-green mr-2">▶</span> {skill}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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


