'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Copy, Check, ChevronRight, Home, Menu, X } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

type CodeBlockProps = {
  code: string
  language?: string
  id: string
}

export default function DocsPage() {
  const [copied, setCopied] = useState<string>('')
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

  const copyToClipboard = (text: string, id: string): void => {
    navigator.clipboard.writeText(text)
    setCopied(id)
    setTimeout(() => setCopied(''), 2000)
  }

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'base-url', label: 'Base URL' },
    { id: 'authentication', label: 'Authentication' },
    { id: 'quick-start', label: 'Quick Start' },
    { id: 'extract-metadata', label: 'Extract Metadata' },
    { id: 'validate-file', label: 'Validate File' },
    { id: 'clean-text', label: 'Clean Text' },
    { id: 'standardize-filename', label: 'Standardize Filename' },
    { id: 'error-handling', label: 'Error Handling' },
    { id: 'limits', label: 'Limits & Notes' },
  ]

  const CodeBlock = ({ code, language = 'bash', id }: CodeBlockProps) => (
    <div className="relative">
      <div className="bg-slate-900 rounded-lg overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
          <span className="text-xs text-slate-400 font-mono">{language}</span>
          <button
            onClick={() => copyToClipboard(code, id)}
            className="flex items-center space-x-1 text-xs text-slate-400 hover:text-white transition-colors"
          >
            {copied === id ? (
              <>
                <Check className="w-4 h-4 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
        <pre className="p-4 overflow-x-auto">
          <code className="text-sm text-green-400 font-mono">{code}</code>
        </pre>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">DocUtility</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/" className="hidden md:flex items-center text-slate-600 hover:text-slate-900 transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <Link href="/dashboard/metadata">
                <Button>Try API</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden fixed bottom-4 right-4 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg"
          >
            {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Sidebar */}
          <aside
            className={`
              fixed lg:sticky top-20 h-[calc(100vh-5rem)] w-64 bg-white rounded-lg border border-slate-200 p-6 overflow-y-auto
              transition-transform duration-200 z-40
              ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
            `}
          >
            <h3 className="text-sm font-semibold text-slate-900 mb-4 uppercase tracking-wide">
              Documentation
            </h3>
            <nav className="space-y-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={() => setSidebarOpen(false)}
                  className="flex items-center text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg transition-colors"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-3xl">
            {/* The rest of your JSX content stays exactly the same */}
          </main>
        </div>
      </div>
    </div>
  )
}
