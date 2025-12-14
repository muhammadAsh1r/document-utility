import { MetadataExtractor } from '@/components/features/MetadataExtractor'

export const metadata = {
  title: 'Extract Metadata - DocUtility',
  description: 'Extract comprehensive metadata from PDF and DOCX files',
}

export default function MetadataPage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Extract Metadata</h2>
      <MetadataExtractor />
    </>
  )
}

