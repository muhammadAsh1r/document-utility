import { FileValidator } from '@/components/features/FileValidator'

export const metadata = {
  title: 'Validate File - DocUtility',
  description: 'Validate file structure and content integrity',
}

export default function ValidatePage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Validate File</h2>
      <FileValidator />
    </>
  )
}