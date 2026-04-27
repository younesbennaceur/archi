import { useEffect } from 'react'

// Gère <title>, meta description, canonical, Open Graph, Twitter, JSON-LD.
// Côté SPA : Googlebot exécute le JS, mais pour une indexation optimale,
// voir les recommandations SEO (pré-rendering build-time).

const SITE = {
  name: 'Prépa MonArchi',
  url: 'https://www.prepa-monarchi.fr',
  defaultImage: '/og-cover.jpg',
  twitter: '@prepamonarchi',
}

function upsertMeta({ name, property, content }) {
  if (!content) return
  const selector = name ? `meta[name="${name}"]` : `meta[property="${property}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('meta')
    if (name) el.setAttribute('name', name)
    if (property) el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id, data) {
  let el = document.head.querySelector(`script[data-seo="${id}"]`)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.setAttribute('data-seo', id)
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export default function SEO({
  title,
  description,
  path = '',
  image,
  type = 'website',
  keywords = [],
  article,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title}` : SITE.name
    const url = `${SITE.url}${path}`
    const img = image || `${SITE.url}${SITE.defaultImage}`

    document.title = fullTitle
    upsertMeta({ name: 'description', content: description })
    if (keywords.length) upsertMeta({ name: 'keywords', content: keywords.join(', ') })
    upsertLink('canonical', url)

    upsertMeta({ property: 'og:title', content: fullTitle })
    upsertMeta({ property: 'og:description', content: description })
    upsertMeta({ property: 'og:type', content: type })
    upsertMeta({ property: 'og:url', content: url })
    upsertMeta({ property: 'og:image', content: img })
    upsertMeta({ property: 'og:site_name', content: SITE.name })
    upsertMeta({ property: 'og:locale', content: 'fr_FR' })

    upsertMeta({ name: 'twitter:card', content: 'summary_large_image' })
    upsertMeta({ name: 'twitter:site', content: SITE.twitter })
    upsertMeta({ name: 'twitter:title', content: fullTitle })
    upsertMeta({ name: 'twitter:description', content: description })
    upsertMeta({ name: 'twitter:image', content: img })

    if (article) {
      upsertJsonLd('article', {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description,
        image: img,
        datePublished: article.date,
        dateModified: article.date,
        author: {
          '@type': 'Person',
          name: article.author?.name,
        },
        publisher: {
          '@type': 'Organization',
          name: SITE.name,
          logo: { '@type': 'ImageObject', url: `${SITE.url}/favicon.svg` },
        },
        mainEntityOfPage: url,
      })
    } else {
      upsertJsonLd('organization', {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: SITE.name,
        url: SITE.url,
        logo: `${SITE.url}/favicon.svg`,
        sameAs: [
          'https://www.instagram.com/prepamonarchi',
          'https://www.linkedin.com/company/prepa-monarchi',
        ],
        address: {
          '@type': 'PostalAddress',
          streetAddress: '75 rue de la République',
          postalCode: '75011',
          addressLocality: 'Paris',
          addressCountry: 'FR',
        },
      })
    }
  }, [title, description, path, image, type, keywords.join('|'), article])

  return null
}
