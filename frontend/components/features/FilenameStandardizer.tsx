'use client'

import { useState } from 'react'
import { AlertCircle, Copy, Check } from 'lucide-react'
import { Card } from '../common/Card'
import { Button } from '../common/Button'
import { Input } from '../common/Input'
import { apiService } from '@/lib/api'

export const FilenameStandardizer = () => {
  const [filename, setFilename] = useState('')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleStandardize = async () => {
    if (!filename.trim()) return
    
    setLoading(true)
    setError(null)
    
    try {
      const data = await apiService.standardizeFilename(filename)
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      <Card>
        <Input
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Enter filename (e.g., cv final new updated(2).docx)"
        />
        <Button
          onClick={handleStandardize}
          disabled={!filename.trim() || loading}
          className="mt-6 w-full"
        >
          {loading ? 'Standardizing...' : 'Standardize Filename'}
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
          <h3 className="text-xl font-semibold text-slate-900 mb-4">Results</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-slate-500 mb-2">Original</p>
              <div className="bg-slate-50 rounded-lg p-3">
                <p className="text-slate-700 font-mono text-sm">
                  {result.original}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-500 mb-2">Standardized</p>
              <div className="bg-green-50 rounded-lg p-3 flex items-center justify-between">
                <p className="text-green-900 font-mono text-sm font-medium">
                  {result.standardized}
                </p>
                <button
                  onClick={() => copyToClipboard(result.standardized)}
                  className="p-2 hover:bg-green-100 rounded-lg transition-colors"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <Copy className="w-5 h-5 text-green-600" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
