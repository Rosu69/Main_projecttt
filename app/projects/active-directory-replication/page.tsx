"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react"

function ActiveDirectoryReplicationContent() {
  const searchParams = useSearchParams()
  const returnTo = searchParams.get('returnTo') || ''

  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-60 text-white p-8">
        <div className="max-w-3xl mx-auto bg-black bg-opacity-70 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-neon-pink">Active Directory Replication</h1>
          <p className="text-neon-blue mb-4">
            In this project, I configured a highly available Active Directory (AD) environment using two Windows Server 2022 domain controllers, ensuring replication and failover capabilities.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-neon-green">Key Achievements</h2>
          <ul className="list-disc list-inside mb-6 text-neon-blue">
            <li>Configured Windows Server 2022 domain controllers for high availability</li>
            <li>Added an Ubuntu server to the AD domain, enabling cross-platform integration</li>
            <li>Implemented DHCP failover to support continuity during a server outage</li>
            <li>Ensured proper DNS configuration for seamless name resolution</li>
            <li>Configured Group Policies for centralized management</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-neon-green">Technologies Used</h2>
          <ul className="list-disc list-inside mb-6 text-neon-blue">
            <li>Windows Server 2022</li>
            <li>Active Directory</li>
            <li>Ubuntu Server</li>
            <li>DHCP</li>
            <li>DNS</li>
            <li>Group Policy</li>
          </ul>
          <Link href={`/?section=${returnTo}`} passHref>
            <Button className="bg-neon-pink hover:bg-pink-700 text-white relative group">
              <span className="absolute -inset-0.5 bg-neon-pink opacity-75 group-hover:opacity-100 rounded-lg blur transition duration-300 group-hover:duration-200 animate-tilt"></span>
              <span className="relative">Back to Portfolio</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ActiveDirectoryReplication() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ActiveDirectoryReplicationContent />
    </Suspense>
  )
}

