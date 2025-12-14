import './globals.css'

export const metadata = {
  title: 'DocUtility - Document Processing Made Simple',
  description: 'Professional API-first document utilities for developers and businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}