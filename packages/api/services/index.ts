import { NewsService } from '@packages/api/services/news.service.js'

// Export singleton instances
export const newsService = NewsService.getInstance()

// Export types and interfaces
export type { NewsOptions } from '@packages/api/services/news.service.js'

