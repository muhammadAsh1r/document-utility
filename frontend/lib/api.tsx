const API_BASE_URL = 'http://127.0.0.1:8000'

export const apiService = {
  extractMetadata: async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(
      `${API_BASE_URL}/api/extract-metadata/`, // ✅ slash
      {
        method: 'POST',
        body: formData,
      }
    )

    if (!response.ok) throw new Error('Failed to extract metadata')
    return response.json()
  },

  validateFile: async (file) => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch(
      `${API_BASE_URL}/api/validate-file/`, // ✅ slash
      {
        method: 'POST',
        body: formData,
      }
    )

    if (!response.ok) throw new Error('Failed to validate file')
    return response.json()
  },

  cleanText: async (text, removeEmojis) => {
    const response = await fetch(
      `${API_BASE_URL}/api/clean-text/`, // ✅ slash
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text,
          remove_emojis: removeEmojis,
        }),
      }
    )

    if (!response.ok) throw new Error('Failed to clean text')
    return response.json()
  },

  standardizeFilename: async (filename) => {
    const response = await fetch(
      `${API_BASE_URL}/api/standardize-filename/`, // ✅ slash
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename }),
      }
    )

    if (!response.ok) throw new Error('Failed to standardize filename')
    return response.json()
  },
}
