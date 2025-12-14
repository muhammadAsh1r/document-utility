import { TextCleaner } from '@/components/features/TextCleaner'

export const metadata = {
  title: 'Clean Text - DocUtility',
  description: 'Clean and normalize text content',
}

export default function CleanTextPage() {
  return (
    <>
      <h2 className="text-3xl font-bold text-slate-900 mb-8">Clean Text</h2>
      <TextCleaner />
    </>
  )
}
