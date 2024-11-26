"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSearchParams } from 'next/navigation'
import { Suspense } from "react"

function PfSenseFirewallDMZConfigurationContent() {
  const searchParams = useSearchParams()
  const returnTo = searchParams.get('returnTo') || ''

  return (
    <div className="min-h-screen bg-[url('/images/background.jpg')] bg-cover bg-center bg-fixed">
      <div className="min-h-screen bg-black bg-opacity-60 text-white p-8">
        <div className="max-w-3xl mx-auto bg-black bg-opacity-70 rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 text-neon-pink">PfSense Firewall DMZ Configuration</h1>
          <p className="text-neon-blue mb-4">
            In this project, I configured PfSense firewall rules to secure a DMZ, enabling controlled external access to an Apache Docker container while restricting unauthorized traffic.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-neon-green">Key Achievements</h2>
          <ul className="list-disc list-inside mb-6 text-neon-blue">
            <li>Configured PfSense firewall rules for DMZ security</li>
            <li>Deployed Apache web server in a Docker container</li>
            <li>Implemented port forwarding for secure external access</li>
            <li>Set up network address translation (NAT) for internal services</li>
            <li>Configured intrusion detection and prevention systems</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4 text-neon-green">Technologies Used</h2>
          <ul className="list-disc list-inside mb-6 text-neon-blue">
            <li>PfSense</li>
            <li>Docker</li>
            <li>Apache Web Server</li>
            <li>Network Security</li>
            <li>Firewall Configuration</li>
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

export default function PfSenseFirewallDMZConfiguration() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PfSenseFirewallDMZConfigurationContent />
    </Suspense>
  )
}

