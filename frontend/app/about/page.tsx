import Link from 'next/link'
import { FileText, Target, Zap, Users, Shield, Code } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

export const metadata = {
  title: 'About Us - DocUtility',
  description: 'Learn about DocUtility and our mission to simplify document processing for developers.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: 'Developer First',
      description: 'Built by developers, for developers. Clean APIs, clear docs, fast performance.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Production-grade infrastructure with 99.9% uptime guarantee on Pro plans.'
    },
    {
      icon: Code,
      title: 'Simplicity',
      description: 'Complex document processing made simple. No configuration, just works.'
    },
    {
      icon: Users,
      title: 'Support',
      description: 'Real humans who care. Fast, helpful responses from people who understand your needs.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900">DocUtility</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/docs" className="text-slate-600 hover:text-slate-900 transition-colors">
                Docs
              </Link>
              <Link href="/dashboard/metadata">
                <Button>Try Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            About DocUtility
          </h1>
          <p className="text-xl text-slate-600">
            We're building the simplest way for developers to process, validate, and standardize documents.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Target className="w-12 h-12 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-6">
            Our Mission
          </h2>
          <Card className="text-center">
            <p className="text-lg text-slate-700 leading-relaxed">
              Every developer has dealt with messy documents — corrupted PDFs, invalid CSVs, 
              inconsistent filenames, dirty text input. These problems waste time and introduce bugs.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mt-4">
              DocUtility solves these problems with simple, reliable APIs. No configuration, 
              no infrastructure to manage, just clean document processing that works.
            </p>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600">
                    {value.description}
                  </p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            Why We Built This
          </h2>
          <div className="prose prose-lg max-w-none">
            <Card>
              <p className="text-slate-700 mb-4">
                DocUtility started because we kept building the same document processing logic 
                over and over in different projects — HR systems, CMS platforms, cloud storage tools.
              </p>
              <p className="text-slate-700 mb-4">
                Every time, we had to handle:
              </p>
              <ul className="list-disc list-inside text-slate-700 mb-4 space-y-2">
                <li>Extracting metadata from PDFs and Word documents</li>
                <li>Validating files before saving them</li>
                <li>Cleaning messy user input</li>
                <li>Standardizing filenames for consistency</li>
              </ul>
              <p className="text-slate-700 mb-4">
                We realized this was a problem every developer faces. So we built a simple, 
                reliable API that solves it once and for all.
              </p>
              <p className="text-slate-700">
                No machine learning black boxes. No complex configuration. Just straightforward, 
                well-tested utilities that work the first time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Built for Scale
          </h2>
          <Card>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Low Latency
                </h3>
                <p className="text-slate-600">
                  Optimized for speed. Most requests complete in under 100ms.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Low Memory
                </h3>
                <p className="text-slate-600">
                  Efficient algorithms that won't crash your server or blow your budget.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Battle Tested
                </h3>
                <p className="text-slate-600">
                  Processing millions of documents for developers worldwide.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">
                  Always Improving
                </h3>
                <p className="text-slate-600">
                  Regular updates and new features based on developer feedback.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Thousands of Developers
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start processing documents the right way. Free to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard/metadata">
              <Button variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50">
                Try It Free
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-blue-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="w-6 h-6 text-blue-400" />
                <span className="text-white font-bold text-lg">DocUtility</span>
              </div>
              <p className="text-sm">
                Clean, validate & standardize documents automatically via API or UI.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/docs" className="hover:text-white transition-colors">API Docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms</Link></li>
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2024 DocUtility. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}