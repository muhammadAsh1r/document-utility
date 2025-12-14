'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, Copy, Check, ChevronRight, Home, Menu, X } from 'lucide-react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'

export default function DocsPage() {
  const [copied, setCopied] = useState('')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const copyToClipboard = (text, id) => {
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

  const CodeBlock = ({ code, language = 'bash', id }) => (
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
          <aside className={`
            fixed lg:sticky top-20 h-[calc(100vh-5rem)] w-64 bg-white rounded-lg border border-slate-200 p-6 overflow-y-auto
            transition-transform duration-200 z-40
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
          `}>
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
            {/* Introduction */}
            <section id="introduction" className="mb-12">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">API Documentation</h1>
              <p className="text-lg text-slate-600 mb-6">
                Document Utility API is a lightweight API suite for validating, cleaning, extracting metadata, 
                and standardizing documents (PDF, DOCX, CSV).
              </p>
              <p className="text-slate-600">
                Designed for developers building HR systems, CMS platforms, and document workflows.
              </p>
            </section>

            {/* Base URL */}
            <section id="base-url" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Base URL</h2>
              <Card className="bg-blue-50 border-blue-200">
                <code className="text-blue-900 font-mono">http://127.0.0.1:8000/api/</code>
              </Card>
              <p className="text-sm text-slate-500 mt-2">
                Production URL will be: <code className="text-slate-700">https://api.docutility.com/v1/</code>
              </p>
            </section>

            {/* Authentication */}
            <section id="authentication" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Authentication</h2>
              <Card>
                <p className="text-slate-700 mb-2">
                  <strong>Currently:</strong> No authentication is required.
                </p>
                <p className="text-slate-600 text-sm">
                  API keys will be added in future versions for rate limiting and usage tracking.
                </p>
              </Card>
            </section>

            {/* Quick Start */}
            <section id="quick-start" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Quick Start</h2>
              <p className="text-slate-600 mb-4">
                Test the API in under 2 minutes with this simple example:
              </p>
              <CodeBlock
                id="quickstart"
                language="bash"
                code={`curl -X POST http://127.0.0.1:8000/api/extract-metadata \\
  -F "file=@sample.pdf"`}
              />
              <p className="text-sm text-slate-600 mt-4 mb-2">Response:</p>
              <CodeBlock
                id="quickstart-response"
                language="json"
                code={`{
  "file_type": "pdf",
  "title": "Annual Report",
  "author": "Ali Khan",
  "page_count": 12,
  "word_count": 3945,
  "headings": ["INTRODUCTION", "SUMMARY"],
  "links": ["https://example.com"]
}`}
              />
            </section>

            {/* Extract Metadata */}
            <section id="extract-metadata" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Extract Metadata</h2>
              <Card className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">POST</span>
                  <code className="text-slate-700 font-mono">/extract-metadata</code>
                </div>
                <p className="text-slate-600">
                  Extracts comprehensive metadata from PDF and DOCX files including title, author, page count, headings, and links.
                </p>
              </Card>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Request</h3>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li><strong>Content-Type:</strong> <code className="text-sm bg-slate-100 px-2 py-1 rounded">multipart/form-data</code></li>
                <li><strong>Field:</strong> <code className="text-sm bg-slate-100 px-2 py-1 rounded">file</code> (PDF or DOCX)</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Example</h3>
              <CodeBlock
                id="extract-metadata-curl"
                language="bash"
                code={`curl -X POST http://127.0.0.1:8000/api/extract-metadata \\
  -F "file=@report.pdf"`}
              />

              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Response</h3>
              <CodeBlock
                id="extract-metadata-response"
                language="json"
                code={`{
  "file_type": "pdf",
  "title": "Annual Report",
  "author": "Ali Khan",
  "page_count": 12,
  "word_count": 3945,
  "headings": ["INTRODUCTION", "SUMMARY"],
  "links": ["https://example.com"]
}`}
              />

              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Possible Errors</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Unsupported file type</li>
                <li>Corrupted file</li>
                <li>Scanned PDF (no readable text)</li>
              </ul>
            </section>

            {/* Validate File */}
            <section id="validate-file" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Validate File</h2>
              <Card className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">POST</span>
                  <code className="text-slate-700 font-mono">/validate-file</code>
                </div>
                <p className="text-slate-600">
                  Validates PDF, DOCX, and CSV files before storage or processing.
                </p>
              </Card>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Checks Performed</h3>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>File not empty</li>
                <li>File not corrupted</li>
                <li>Allowed extension</li>
                <li>PDF pages &gt; 0</li>
                <li>DOCX contains readable text</li>
                <li>CSV header exists</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Example Request</h3>
              <CodeBlock
                id="validate-file-curl"
                language="bash"
                code={`curl -X POST http://127.0.0.1:8000/api/validate-file \\
  -F "file=@document.csv"`}
              />

              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Response</h3>
              <CodeBlock
                id="validate-file-response"
                language="json"
                code={`{
  "valid": false,
  "errors": [
    "CSV missing header",
    "Unexpected number of columns at row 5"
  ]
}`}
              />
            </section>

            {/* Clean Text */}
            <section id="clean-text" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Clean Text</h2>
              <Card className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">POST</span>
                  <code className="text-slate-700 font-mono">/clean-text</code>
                </div>
                <p className="text-slate-600">
                  Cleans and normalizes user-provided text by removing extra spaces, HTML tags, and special characters.
                </p>
              </Card>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Transformations</h3>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>Remove double spaces</li>
                <li>Normalize Unicode</li>
                <li>Remove HTML tags</li>
                <li>Replace smart quotes</li>
                <li>Optional emoji removal</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Request</h3>
              <CodeBlock
                id="clean-text-request"
                language="json"
                code={`{
  "text": "Hello   world!!! 😃 <b>Test</b>",
  "remove_emojis": true
}`}
              />

              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Example</h3>
              <CodeBlock
                id="clean-text-curl"
                language="bash"
                code={`curl -X POST http://127.0.0.1:8000/api/clean-text \\
  -H "Content-Type: application/json" \\
  -d '{"text": "Hello   world!!! 😃 <b>Test</b>", "remove_emojis": true}'`}
              />

              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Response</h3>
              <CodeBlock
                id="clean-text-response"
                language="json"
                code={`{
  "cleaned_text": "Hello world!!! Test",
  "length_before": 28,
  "length_after": 21
}`}
              />
            </section>

            {/* Standardize Filename */}
            <section id="standardize-filename" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Standardize Filename</h2>
              <Card className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded">POST</span>
                  <code className="text-slate-700 font-mono">/standardize-filename</code>
                </div>
                <p className="text-slate-600">
                  Standardizes filenames for storage and consistency across systems.
                </p>
              </Card>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Use Cases</h3>
              <ul className="list-disc list-inside text-slate-600 mb-4 space-y-1">
                <li>HR systems</li>
                <li>CMS platforms</li>
                <li>Cloud storage</li>
                <li>Project management tools</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Request</h3>
              <CodeBlock
                id="standardize-filename-request"
                language="json"
                code={`{
  "filename": "cv final new updated(2).docx"
}`}
              />

              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Example</h3>
              <CodeBlock
                id="standardize-filename-curl"
                language="bash"
                code={`curl -X POST http://127.0.0.1:8000/api/standardize-filename \\
  -H "Content-Type: application/json" \\
  -d '{"filename": "cv final new updated(2).docx"}'`}
              />

              <h3 className="text-lg font-semibold text-slate-900 mt-4 mb-3">Response</h3>
              <CodeBlock
                id="standardize-filename-response"
                language="json"
                code={`{
  "original": "cv final new updated(2).docx",
  "standardized": "CV_FINAL_NEW_UPDATED_2025_V2.docx"
}`}
              />
            </section>

            {/* Error Handling */}
            <section id="error-handling" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Error Handling</h2>
              <p className="text-slate-600 mb-4">
                All errors return appropriate HTTP status codes and JSON error messages.
              </p>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">Common Error Responses</h3>
              <CodeBlock
                id="error-1"
                language="json"
                code={`{
  "error": "Unsupported file type"
}`}
              />

              <div className="mt-4">
                <CodeBlock
                  id="error-2"
                  language="json"
                  code={`{
  "filename": ["This field is required."]
}`}
                />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">HTTP Status Codes</h3>
              <Card>
                <ul className="space-y-2 text-sm">
                  <li><code className="bg-green-100 text-green-700 px-2 py-1 rounded">200</code> - Success</li>
                  <li><code className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded">400</code> - Bad Request (validation error)</li>
                  <li><code className="bg-red-100 text-red-700 px-2 py-1 rounded">500</code> - Internal Server Error</li>
                </ul>
              </Card>

              <h3 className="text-lg font-semibold text-slate-900 mt-6 mb-3">Common Mistakes</h3>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Missing trailing slash in endpoint URL</li>
                <li>Wrong Content-Type header for file uploads</li>
                <li>File field name mismatch (must be "file")</li>
              </ul>
            </section>

            {/* Limits & Notes */}
            <section id="limits" className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Limits & Notes</h2>
              <Card>
                <h3 className="font-semibold text-slate-900 mb-3">Current Limits</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• <strong>Max file size:</strong> 5MB</li>
                  <li>• <strong>Supported formats:</strong> PDF, DOCX, CSV</li>
                  <li>• <strong>OCR:</strong> Not supported for scanned PDFs</li>
                  <li>• <strong>Rate limiting:</strong> None (will be added with API keys)</li>
                </ul>
              </Card>

              <Card className="mt-4 bg-blue-50 border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-2">API Version</h3>
                <p className="text-blue-800 text-sm">
                  <strong>Current version:</strong> v1<br />
                  All endpoints are backward compatible within v1.
                </p>
              </Card>
            </section>

            {/* Footer CTA */}
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-blue-100 mb-4">
                Try the API with our interactive playground.
              </p>
              <Link href="/dashboard/metadata">
                <Button variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Try API Now
                </Button>
              </Link>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}