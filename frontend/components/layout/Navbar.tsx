import Link from 'next/link'
import { Button } from '../common/Button'

export const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-slate-900 cursor-pointer">
              DocUtility
            </h1>
          </Link>
          <Link href="/dashboard/metadata">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}
