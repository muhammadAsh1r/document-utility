'use client'

import { useState } from 'react'
import { AlertCircle } from 'lucide-react'
import { Card } from '../common/Card'
import { Button } from '../common/Button'
import { FileUpload } from '../common/FileUpload'
import { apiService } from '@/lib/api'

export const MetadataExtractor = () => {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleExtract = async () => {
    if (!file) return
    
    setLoading(true)
    setError(null)
    
    try {
      const data = await apiService.extractMetadata(file)
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Card>
        <FileUpload
          onFileSelect={setFile}
          accept=".pdf,.docx"
          disabled={loading}
        />
        {file && (
          <div className="mt-4 p-3 bg-slate-50 rounded-lg flex items-center justify-between">
            <span className="text-sm text-slate-600">{file.name}</span>
            <Button onClick={() => setFile(null)} variant="secondary">
              Remove
            </Button>
          </div>
        )}
        <Button
          onClick={handleExtract}
          disabled={!file || loading}
          className="mt-6 w-full"
        >
          {loading ? 'Extracting...' : 'Extract Metadata'}
        </Button>
      </Card>

      {error && (
        <Card className="mt-6 border-red-200 bg-red-50">
          <div className="flex items-center space-x-2 text-red-600">
            <AlertCircle className="w-5 h-5" />
            <span className="font-medium">{error}</span>
          </div>
        </Card>
      )}

      {result && (
        <Card className="mt-6">
          <h3 className="text-xl font-semibold text-slate-900 mb-4">
            Metadata Results
          </h3>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-slate-500">File Type</p>
                <p className="font-medium text-slate-900">
                  {result.file_type?.toUpperCase()}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Title</p>
                <p className="font-medium text-slate-900">
                  {result.title || 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Author</p>
                <p className="font-medium text-slate-900">
                  {result.author || 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Pages</p>
                <p className="font-medium text-slate-900">
                  {result.page_count || 'N/A'}
                </p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Word Count</p>
                <p className="font-medium text-slate-900">
                  {result.word_count?.toLocaleString() || 'N/A'}
                </p>
              </div>
            </div>
            {result.headings && result.headings.length > 0 && (
              <div>
                <p className="text-sm text-slate-500 mb-2">Headings</p>
                <div className="space-y-1">
                  {result.headings.map((h, i) => (
                    <p 
                      key={i} 
                      className="text-sm text-slate-700 bg-slate-50 px-3 py-1 rounded"
                    >
                      {h}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {result.links && result.links.length > 0 && (
              <div>
                <p className="text-sm text-slate-500 mb-2">Links</p>
                <div className="space-y-1">
                  {result.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-blue-600 hover:underline block"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Card>
      )}
    </>
  )
}