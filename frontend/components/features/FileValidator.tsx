'use client'

import { useState } from 'react'
import { AlertCircle, CheckCircle } from 'lucide-react'
import { Card } from '../common/Card'
import { Button } from '../common/Button'
import { FileUpload } from '../common/FileUpload'
import { apiService } from '@/lib/api'

export const FileValidator = () => {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleValidate = async () => {
    if (!file) return
    
    setLoading(true)
    setError(null)
    
    try {
      const data = await apiService.validateFile(file)
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
          accept=".pdf,.docx,.csv"
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
          onClick={handleValidate}
          disabled={!file || loading}
          className="mt-6 w-full"
        >
          {loading ? 'Validating...' : 'Validate File'}
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
        <Card className={`mt-6 ${
          result.valid 
            ? 'border-green-200 bg-green-50' 
            : 'border-red-200 bg-red-50'
        }`}>
          <div className="flex items-center space-x-3 mb-4">
            {result.valid ? (
              <>
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-lg font-semibold text-green-900">
                  File is Valid
                </span>
              </>
            ) : (
              <>
                <AlertCircle className="w-6 h-6 text-red-600" />
                <span className="text-lg font-semibold text-red-900">
                  Validation Failed
                </span>
              </>
            )}
          </div>
          {!result.valid && result.errors && (
            <div className="space-y-2">
              <p className="text-sm font-medium text-red-900">Errors:</p>
              {result.errors.map((err, i) => (
                <div key={i} className="flex items-start space-x-2 text-red-700">
                  <span className="text-red-500 mt-0.5">•</span>
                  <span className="text-sm">{err}</span>
                </div>
              ))}
            </div>
          )}
        </Card>
      )}
    </>
  )
}
