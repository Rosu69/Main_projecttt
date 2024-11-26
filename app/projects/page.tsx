import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Active Directory Replication",
    description: "Configured highly available Active Directory environment using Windows Server 2022",
    link: "/projects/active-directory-replication"
  },
  {
    title: "PfSense Firewall DMZ Configuration",
    description: "Configured PfSense firewall rules to secure DMZ environment",
    link: "/projects/pfsense-firewall-dmz"
  },
  {
    title: "Ubuntu Server Troubleshooting",
    description: "Diagnosed and resolved boot failure and internet connectivity issues on an Ubuntu 22.04 server",
    link: "/projects/ubuntu-server-troubleshooting"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-60 text-white">
        <main className="max-w-6xl mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold mb-8 text-center text-neon-pink">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-black bg-opacity-70 text-white">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-2 text-neon-green">{project.title}</h2>
                  <p className="mb-4">{project.description}</p>
                  <Button asChild className="bg-neon-blue hover:bg-blue-700 text-white">
                    <Link href={project.link}>View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild className="bg-neon-pink hover:bg-pink-700 text-white">
              <Link href="/">Back to Home</Link>
            </Button>
          </div>
        </main>
      </div>
    </div>
  )
}

