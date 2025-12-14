import Link from 'next/link'
import { FileText, Shield } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

export const metadata = {
  title: 'Privacy Policy - DocUtility',
  description: 'Learn how DocUtility collects, uses, and protects your data.',
}

export default function PrivacyPage() {
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
            <Link href="/dashboard/metadata">
              <Button>Try Free</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="w-12 h-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-slate-900 text-center mb-4">
            Privacy Policy
          </h1>
          <p className="text-center text-slate-600">
            Last updated: December 15, 2024
          </p>
        </div>

        <Card className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
            <p className="text-slate-700">
              DocUtility ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our document processing API and services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Account Information</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>Email address</li>
              <li>Name (optional)</li>
              <li>Payment information (processed by Stripe)</li>
              <li>API keys and usage data</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Usage Data</h3>
            <ul className="list-disc list-inside text-slate-700 space-y-2 mb-4">
              <li>API request logs (endpoints, timestamps, status codes)</li>
              <li>IP addresses</li>
              <li>Browser type and version</li>
              <li>Error logs and debugging information</li>
            </ul>

            <h3 className="text-xl font-semibold text-slate-900 mb-3">Document Data</h3>
            <p className="text-slate-700 mb-2">
              We process documents you upload through our API:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Temporary Processing:</strong> Files are processed in memory and deleted immediately after response</li>
              <li><strong>No Long-term Storage:</strong> We do not permanently store uploaded documents</li>
              <li><strong>Metadata Only:</strong> We may log file types and sizes for analytics</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
            <p className="text-slate-700 mb-2">We use collected information for:</p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Providing and maintaining our services</li>
              <li>Processing API requests</li>
              <li>Billing and account management</li>
              <li>Monitoring usage and preventing abuse</li>
              <li>Improving our services and developing new features</li>
              <li>Sending important service updates</li>
              <li>Responding to support requests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Storage and Security</h2>
            <p className="text-slate-700 mb-2">
              We implement industry-standard security measures:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>TLS/SSL encryption for all API communications</li>
              <li>Encrypted storage for account data</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Automatic document deletion after processing</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Third-Party Services</h2>
            <p className="text-slate-700 mb-2">
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Stripe:</strong> Payment processing (PCI DSS compliant)</li>
              <li><strong>Cloud Infrastructure:</strong> Hosting and data storage</li>
              <li><strong>Analytics:</strong> Service usage and performance monitoring</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights (GDPR)</h2>
            <p className="text-slate-700 mb-2">
              If you are in the European Union, you have the right to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Retention</h2>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li><strong>Uploaded Documents:</strong> Deleted immediately after processing (within seconds)</li>
              <li><strong>Account Data:</strong> Retained while your account is active</li>
              <li><strong>API Logs:</strong> Retained for 90 days for debugging and analytics</li>
              <li><strong>Billing Records:</strong> Retained for 7 years for legal compliance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
            <p className="text-slate-700">
              We use essential cookies for:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2">
              <li>Authentication and session management</li>
              <li>Security and fraud prevention</li>
              <li>Remembering your preferences</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
            <p className="text-slate-700">
              Our services are not intended for users under 18 years of age. We do not knowingly collect information from children.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
            <p className="text-slate-700 mb-2">
              If you have questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-none text-slate-700 space-y-2">
              <li>Email: <a href="mailto:privacy@docutility.com" className="text-blue-600 hover:text-blue-700">privacy@docutility.com</a></li>
              <li>Support: <Link href="/contact" className="text-blue-600 hover:text-blue-700">Contact Form</Link></li>
            </ul>
          </section>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/" className="text-blue-600 hover:text-blue-700 font-medium">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}