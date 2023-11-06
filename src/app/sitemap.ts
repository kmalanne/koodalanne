export default function sitemap() {
  const routes = ['', '/cv', '/contact'].map((route) => ({
    url: `https://koodalanne.com${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
