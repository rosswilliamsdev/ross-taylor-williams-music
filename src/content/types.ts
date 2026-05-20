export interface Show {
  date: string // ISO format: '2026-06-14'
  venue: string
  city: string
  ticketUrl?: string
}

export interface PressQuote {
  quote: string
  source: string
  url?: string
}
