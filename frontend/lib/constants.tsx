export const FILE_TYPES = {
  METADATA: '.pdf,.docx',
  VALIDATE: '.pdf,.docx,.csv',
}

export const NAV_ITEMS = [
  { 
    id: 'metadata', 
    label: 'Extract Metadata', 
    description: 'Extract comprehensive metadata from PDF and DOCX files',
    href: '/dashboard/metadata'
  },
  { 
    id: 'validate', 
    label: 'Validate File', 
    description: 'Validate file structure and content integrity',
    href: '/dashboard/validate'
  },
  { 
    id: 'clean', 
    label: 'Clean Text', 
    description: 'Clean and normalize text content',
    href: '/dashboard/clean'
  },
  { 
    id: 'standardize', 
    label: 'Standardize Filename', 
    description: 'Standardize filenames with best practices',
    href: '/dashboard/standardize'
  },
]
