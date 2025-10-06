import { NewsService } from '../services/news.service.js'

// Export singleton instances
export const newsService = NewsService.getInstance()

// Export types and interfaces
export type { NewsOptions } from '../services/news.service.js'

