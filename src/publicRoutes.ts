import { articles } from './Blog'

const pageRoutes = [
  '/',
  '/contato',
  '/sobre',
  '/blog',
  '/seguranca',
  '/privacidade',
  '/white-label',
  '/escolas-privadas',
  '/redes-municipais',
  '/redes-estaduais',
  '/ensino-superior',
]

export const publicRoutes = [
  ...pageRoutes,
  ...articles.map(article => `/blog/${article.slug}`),
]
