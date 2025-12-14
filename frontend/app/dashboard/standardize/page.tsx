import { FilenameStandardizer } from '@/components/features/FilenameStandardizer'

export const metadata = {
  title: 'Standardize Filename - DocUtility',
  description: 'Standardize filenames with best practices',
}

export default function StandardizeFilenamePage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Standardize Filename</h2>
      <FilenameStandardizer />
    </>
  )
}