import Link from 'next/link'
import { FileText, CheckCircle, Type, Upload, Code, Zap, Shield, ArrowRight, CheckCircle2, XCircle } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

export default function HomePage() {
  const problems = [
    {
      problem: 'Messy filenames uploaded by users',
      solution: 'Auto-standardize filenames',
      icon: XCircle,
      iconSolution: CheckCircle2
    },
    {
      problem: 'Corrupted or invalid files',
      solution: 'Validate before storage',
      icon: XCircle,
      iconSolution: CheckCircle2
    },
    {
      problem: 'Dirty text from user input',
      solution: 'Clean & normalize text',
      icon: XCircle,
      iconSolution: CheckCircle2
    },
    {
      problem: 'Missing document metadata',
      solution: 'Extract metadata reliably',
      icon: XCircle,
      iconSolution: CheckCircle2
    }
  ]

  const features = [
    {
      id: 'metadata',
      icon: FileText,
      title: 'Extract Metadata',
      description: 'Get title, author, pages, headings, links from PDFs and DOCX files',
      href: '/dashboard/metadata'
    },
    {
      id: 'validate',
      icon: CheckCircle,
      title: 'Validate Files',
      description: 'Detect corrupted, empty, or invalid files before processing',
      href: '/dashboard/validate'
    },
    {
      id: 'clean',
      icon: Type,
      title: 'Clean Text',
      description: 'Normalize text, remove emojis, HTML tags, and weird characters',
      href: '/dashboard/clean'
    },
    {
      id: 'standardize',
      icon: Upload,
      title: 'Standardize Filenames',
      description: 'Clean, readable, enterprise-ready filename conventions',
      href: '/dashboard/standardize'
    }
  ]

  const targetUsers = [
    'Developers',
    'HR Systems',
    'CMS Platforms',
    'Cloud Storage Tools',
    'SaaS Products',
    'Universities & Companies'
  ]

  const howItWorksSteps = [
    {
      step: '1',
      title: 'Upload file or send API request',
      description: 'Use our UI or integrate directly via API'
    },
    {
      step: '2',
      title: 'DocUtility processes it',
      description: 'Fast, reliable document processing'
    },
    {
      step: '3',
      title: 'Get clean, validated output',
      description: 'Structured JSON response ready to use'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-900">DocUtility</h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/docs">
                <Button variant="outline">View Docs</Button>
              </Link>
              <Link href="/dashboard/metadata">
                <Button>Try it Free</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>API-First Document Utilities</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Clean, validate & standardize<br />documents — instantly
          </h2>
          
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
            APIs & tools for PDFs, DOCX, CSV, and text. Built for developers, trusted by businesses.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard/metadata">
              <Button className="text-lg px-8 py-4">
                Try it Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" className="text-lg px-8 py-4">
                View API Docs
              </Button>
            </Link>
          </div>

          {/* Code Snippet Preview */}
          <div className="mt-12 max-w-2xl mx-auto">
            <Card className="text-left bg-slate-900 border-slate-700">
              <div className="flex items-center justify-between mb-3">
                <span className="text-slate-400 text-sm font-mono">API Example</span>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <pre className="text-green-400 font-mono text-sm overflow-x-auto">
{`curl -X POST http://api.docutility.com/extract-metadata \\
  -F "file=@document.pdf"`}
              </pre>
            </Card>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 px-4" id="problems">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Problems We Solve
            </h3>
            <p className="text-lg text-slate-600">
              Stop fighting with messy documents. Let us handle it.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <XCircle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700">{item.problem}</p>
                  </div>
                  <div className="flex items-start space-x-3 pl-4 border-l-2 border-green-500">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <p className="text-green-900 font-medium">{item.solution}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-20 px-4" id="features">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Powerful Features
            </h3>
            <p className="text-lg text-slate-600">
              Each feature maps to a simple API endpoint
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <Link key={feature.id} href={feature.href}>
                  <Card className="hover:shadow-lg transition-all hover:border-blue-300 cursor-pointer h-full">
                    <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              How It Works
            </h3>
            <p className="text-lg text-slate-600">
              Simple, fast, reliable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="bg-slate-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              Built For
            </h3>
            <p className="text-lg text-slate-600">
              Trusted by developers and businesses worldwide
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {targetUsers.map((user, index) => (
              <Card key={index} className="text-center hover:shadow-md transition-shadow cursor-default">
                <p className="font-medium text-slate-700">{user}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Start cleaning documents in seconds
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Try the API — no credit card required
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard/metadata">
              <Button variant="secondary" className="text-lg px-8 py-4 bg-white text-blue-600 hover:bg-blue-50">
                Try it Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/docs">
              <Button variant="outline" className="text-lg px-8 py-4 text-white border-white hover:bg-blue-600">
                View Documentation
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
