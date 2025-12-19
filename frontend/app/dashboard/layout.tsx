'use client'

import { useState, type ReactNode } from 'react'
import { Menu, X } from 'lucide-react'
import { Sidebar } from '@/components/layout/Sidebar'

export default function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-slate-50">
      {/* ...rest unchanged */}
      {children}
    </div>
  )
}
