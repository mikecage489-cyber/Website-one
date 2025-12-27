import { useState } from 'react'

function MetaTagGenerator() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [keywords, setKeywords] = useState('')
  const [author, setAuthor] = useState('')
  const [ogImage, setOgImage] = useState('')
  const [siteUrl, setSiteUrl] = useState('')
  const [generated, setGenerated] = useState('')

  const generateMetaTags = () => {
    let tags = `<!-- Basic Meta Tags -->\n`
    tags += `<title>${title}</title>\n`
    tags += `<meta name="description" content="${description}">\n`
    if (keywords) tags += `<meta name="keywords" content="${keywords}">\n`
    if (author) tags += `<meta name="author" content="${author}">\n`
    tags += `<meta name="viewport" content="width=device-width, initial-scale=1.0">\n\n`
    
    tags += `<!-- Open Graph Meta Tags -->\n`
    tags += `<meta property="og:title" content="${title}">\n`
    tags += `<meta property="og:description" content="${description}">\n`
    tags += `<meta property="og:type" content="website">\n`
    if (siteUrl) tags += `<meta property="og:url" content="${siteUrl}">\n`
    if (ogImage) tags += `<meta property="og:image" content="${ogImage}">\n\n`
    
    tags += `<!-- Twitter Card Meta Tags -->\n`
    tags += `<meta name="twitter:card" content="summary_large_image">\n`
    tags += `<meta name="twitter:title" content="${title}">\n`
    tags += `<meta name="twitter:description" content="${description}">\n`
    if (ogImage) tags += `<meta name="twitter:image" content="${ogImage}">\n`

    setGenerated(tags)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generated)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">
            Page Title *
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your Page Title (50-60 characters)"
            maxLength={60}
          />
          <p className="text-sm text-gray-500 mt-1">{title.length}/60 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Meta Description *
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Your page description (150-160 characters)"
            rows={3}
            maxLength={160}
          />
          <p className="text-sm text-gray-500 mt-1">{description.length}/160 characters</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Keywords (comma-separated)
          </label>
          <input
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="keyword1, keyword2, keyword3"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Author
          </label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Author name"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Site URL
          </label>
          <input
            type="url"
            value={siteUrl}
            onChange={(e) => setSiteUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Open Graph Image URL
          </label>
          <input
            type="url"
            value={ogImage}
            onChange={(e) => setOgImage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="https://example.com/image.jpg"
          />
        </div>
      </div>

      <button
        onClick={generateMetaTags}
        disabled={!title || !description}
        className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        Generate Meta Tags
      </button>

      {generated && (
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="block text-lg font-semibold">
              Generated Meta Tags:
            </label>
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition text-sm"
            >
              Copy to Clipboard
            </button>
          </div>
          <textarea
            value={generated}
            readOnly
            className="w-full h-64 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-vertical font-mono text-sm"
          />
        </div>
      )}
    </div>
  )
}

export default MetaTagGenerator
