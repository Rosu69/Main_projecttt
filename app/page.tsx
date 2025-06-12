"use client"

import React, { Suspense } from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

function HomeContent() {
  const searchParams = useSearchParams()
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const section = searchParams.get('section')
    if (section) {
      setActiveSection(section)
    }
  }, [searchParams, setActiveSection])

  const skills = [
    "Technical Support",
    "Hardware and Software Installation & Troubleshooting",
    "Imaging & Deployment",
    "Jira",
    "Microsoft 365 Admin",
    "Active Directory",
    "Advanced Linux",
    "Scripting",
    "FortiEDR (Endpoint Protection)",
    "Microsoft Authenticator (MFA)",
    "Fortimail Cloud, Acronis Perception Point (Email Security)",
    "VoIP (Hosted UC)"
  ]

  const projects = [
    {
      title: "Active Directory Replication",
      description: "Configured highly available Active Directory environment using Windows Server 2022",
      link: "/projects/active-directory-replication"
    },
    {
      title: "PfSense Firewall DMZ Configuration",
      description: "Configured PfSense firewall rules to secure DMZ environment",
      link: "/projects/pfsense-firewall-dmz-configuration"
    },
    {
      title: "Ubuntu Server Troubleshooting",
      description: "Diagnosed and resolved boot failure and internet connectivity issues on an Ubuntu 22.04 server",
      link: "/projects/ubuntu-server-troubleshooting"
    }
  ]

  const experiences = [
    {
      title: "IT Help Desk Technician",
    company: "Ohio Valley Goodwill Industries",
    date: "March 2025 – Present",
    description: [
      "Administer IT systems including Active Directory, Microsoft Azure, and Microsoft 365."
      "Provide remote user support and troubleshoot hardware/software issues remotely using tools like TeamViewer and NinjaOne as well as in-person."
      "Manage workstation setup and maintenance to ensure optimal performance."
      "Implement and maintain security solutions with Fortinet, including EDR, and FortiMail Cloud."
      "Serve as the primary point of contact for all support tickets, and oversee VoIP systems, support Office 2019 applications, and handle server backups and domain controllers.""
      ]
    },
    {
      title: "Member IT Help Desk Co-op",
      company: "Cincinnati Sports Club",
      date: "Aug 2024 – Dec 2024",
      description: [
        "Provide technical support through software and hardware troubleshooting",
        "Assist in deploying new IT infrastructure and handling member inquiries"
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

  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-60 text-white">
        <main className="max-w-4xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-neon-pink animate-pulse">Roshan Tamang</h1>
            <p className="text-xl mb-8">Computer Information Technology Specialist</p>
            <Image 
              src="/images/profile.jpg" 
              alt="Roshan Tamang" 
              width={300} 
              height={300} 
              className="rounded-full mx-auto border-4 border-neon-blue"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <Button 
              onClick={() => setActiveSection("about")}
              className={`bg-neon-pink hover:bg-pink-700 text-white ${activeSection === "about" ? "ring-2 ring-white" : ""}`}
            >
              About & Education
            </Button>
            <Button 
              onClick={() => setActiveSection("projects")}
              className={`bg-neon-blue hover:bg-blue-700 text-white ${activeSection === "projects" ? "ring-2 ring-white" : ""}`}
            >
              Projects
            </Button>
            <Button 
              onClick={() => setActiveSection("skills")}
              className={`bg-neon-green hover:bg-green-700 text-white ${activeSection === "skills" ? "ring-2 ring-white" : ""}`}
            >
              Skills
            </Button>
            <Button 
              onClick={() => setActiveSection("experience")}
              className={`bg-neon-purple hover:bg-purple-700 text-white ${activeSection === "experience" ? "ring-2 ring-white" : ""}`}
            >
              Experience
            </Button>
          </div>

          {activeSection === "about" && (
            <>
              <Card className="bg-black bg-opacity-70 text-white mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-neon-green">About Me</h2>
                  <p>
                    In my current role, I manage IT systems, provide remote support, oversee workstation setup, implement security solutions, and handle server backups. I am the primary point of contact for support tickets, resolving 95% of issues.
                    I am passionate about mastering new technologies and solving IT challenges. I am eager to grow into the role of a systems analyst or administrator, where I can further develop my skills and contribute to impactful projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-black bg-opacity-70 text-white mb-8">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4 text-neon-green">Education</h2>
                  <h3 className="text-xl font-semibold">Northern Kentucky University</h3>
                  <p>Bachelor of Science in Computer Information Technology (Cloud and System Admin)</p>
                  <p>Minor in Computer Science</p>
                  <p>GPA: 3.92 (summa cum laude)</p>
                </CardContent>
              </Card>
            </>
          )}

          {activeSection === "projects" && (
            <div className="grid gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="bg-black bg-opacity-70 text-white">
                  <CardContent className="p-6">
                    <h2 className="text-xl font-semibold mb-2 text-neon-green">{project.title}</h2>
                    <p className="mb-4">{project.description}</p>
                    <Link href={`${project.link}?returnTo=projects`} passHref>
                      <Button className="bg-neon-blue hover:bg-blue-700 text-white relative group">
                        <span className="absolute -inset-0.5 bg-neon-blue opacity-75 group-hover:opacity-100 rounded-lg blur transition duration-300 group-hover:duration-200 animate-tilt"></span>
                        <span className="relative">View Details</span>
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {activeSection === "skills" && (
            <Card className="bg-black bg-opacity-70 text-white">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4 text-neon-green">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="relative group">
                      <div className="absolute -inset-0.5 bg-neon-blue opacity-75 group-hover:opacity-100 rounded-lg blur transition duration-300 group-hover:duration-200 animate-tilt"></div>
                      <div className="relative px-3 py-2 bg-black rounded-lg leading-none flex items-center justify-center">
                        <span className="text-neon-blue group-hover:text-white transition duration-300">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {activeSection === "experience" && (
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-black bg-opacity-70 text-white">
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
            </div>
          )}
        </main>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-black text-white">Loading...</div>}>
      <HomeContent />
    </Suspense>
  )
}
