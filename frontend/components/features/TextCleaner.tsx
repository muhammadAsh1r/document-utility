'use client'

import { useState } from 'react'
import { AlertCircle, Loader2, Copy, Check, RotateCcw } from 'lucide-react'
import { Card } from '../common/Card'
import { Button } from '../common/Button'
import { apiService } from '@/lib/api'

export const TextCleaner = () => {
  const [text, setText] = useState('')
  const [removeEmojis, setRemoveEmojis] = useState(true)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [copied, setCopied] = useState(false)

  const handleClean = async () => {
    if (!text.trim()) return
    
    setLoading(true)
    setError(null)
    
    try {
      const data = await apiService.cleanText(text, removeEmojis)
      setResult(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    setText('')
    setResult(null)
    setError(null)
    setCopied(false)
  }

  const copyToClipboard = () => {
    if (result?.cleaned_text) {
      navigator.clipboard.writeText(result.cleaned_text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <>
      <Card>
        <div className="mb-4">
          <p className="text-sm text-slate-600 leading-relaxed">
            This tool cleans and normalizes text by removing extra spaces, broken Unicode, HTML tags, and smart quotes.
          </p>
        </div>
        
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste your text here..."
          disabled={loading}
          className="w-full h-48 px-4 py-3 border-2 border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none disabled:opacity-50 disabled:cursor-not-allowed"
        />
        
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="removeEmojis"
              checked={removeEmojis}
              onChange={(e) => setRemoveEmojis(e.target.checked)}
              disabled={loading}
              className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 disabled:opacity-50"
            />
            <label htmlFor="removeEmojis" className="text-sm font-medium text-slate-700">
              Remove emojis
            </label>
          </div>
          
          {(text || result) && (
            <button
              onClick={handleReset}
              disabled={loading}
              className="flex items-center space-x-1 text-sm text-slate-600 hover:text-slate-900 transition-colors disabled:opacity-50"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset</span>
            </button>
          )}
        </div>
        
        <Button
          onClick={handleClean}
          disabled={!text.trim() || loading}
          className="mt-6 w-full flex items-center justify-center space-x-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <span>Clean Text</span>
          )}
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
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-slate-900">
              Cleaned Text
            </h3>
            <button
              onClick={copyToClipboard}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-green-600" />
                  <span className="text-green-600 font-medium">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          
          <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
            <p className="text-slate-800 whitespace-pre-wrap">
              {result.cleaned_text}
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-1">Characters Before</p>
              <p className="text-2xl font-bold text-slate-900">
                {result.length_before?.toLocaleString()}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-slate-500 mb-1">Characters After</p>
              <p className="text-2xl font-bold text-green-600">
                {result.length_after?.toLocaleString()}
              </p>
            </div>
          </div>
          
          {result.length_before !== result.length_after && (
            <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800 text-center">
                Removed <span className="font-semibold">
                  {(result.length_before - result.length_after).toLocaleString()}
                </span> characters
              </p>
            </div>
          )}
        </Card>
      )}
    </>
  )
}