export interface Tool {
  id: string
  name: string
  category: ToolCategory
  description: string
  longDescription: string
  icon: string
  keywords: string[]
  component: string
  examples: string[]
  faqs: FAQ[]
  relatedTools: string[]
}

export interface FAQ {
  question: string
  answer: string
}

export type ToolCategory = 'text' | 'calculator' | 'converter' | 'seo' | 'developer'

export interface ToolCategoryInfo {
  id: ToolCategory
  name: string
  description: string
  icon: string
}
