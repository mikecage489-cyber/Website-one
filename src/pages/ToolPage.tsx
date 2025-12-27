import { useParams, Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import SEO from '../components/SEO'
import AdUnit from '../components/AdUnit'
import { tools } from '../config/tools'

function ToolPage() {
  const { toolId } = useParams<{ toolId: string }>()
  const tool = tools.find((t) => t.id === toolId)

  if (!tool) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          The tool you're looking for doesn't exist.
        </p>
        <Link to="/tools" className="text-blue-600 hover:underline">
          Browse All Tools
        </Link>
      </div>
    )
  }

  // Dynamically import the tool component
  const ToolComponent = lazy(() => import(`../tools/${tool.component}.tsx`).catch(() => ({
    default: () => (
      <div className="bg-yellow-50 border border-yellow-200 p-4 rounded">
        <p className="text-yellow-800">This tool is under development.</p>
      </div>
    )
  })))

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: tool.name,
    description: tool.description,
    applicationCategory: 'UtilityApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1250',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: tool.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <SEO
        title={tool.name}
        description={tool.description}
        keywords={tool.keywords.join(', ')}
        schema={schema}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{tool.icon}</span>
            <div>
              <h1 className="text-4xl font-bold">{tool.name}</h1>
              <p className="text-xl text-gray-600 mt-2">{tool.description}</p>
            </div>
          </div>
        </div>

        {/* Ad Unit - Top */}
        <div className="mb-8">
          <AdUnit slot="1234567894" />
        </div>

        {/* Tool Component */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <Suspense fallback={<div className="text-center py-8">Loading tool...</div>}>
            <ToolComponent />
          </Suspense>
        </div>

        {/* Ad Unit - After Tool */}
        <div className="mb-8">
          <AdUnit slot="1234567895" />
        </div>

        {/* Long Description */}
        <section className="prose max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4">About This Tool</h2>
          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {tool.longDescription}
          </div>
        </section>

        {/* Examples */}
        {tool.examples.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-4">Example Use Cases</h2>
            <ul className="space-y-2">
              {tool.examples.map((example, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span className="text-gray-700">{example}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Ad Unit - Between Sections */}
        <div className="mb-8">
          <AdUnit slot="1234567896" />
        </div>

        {/* FAQs */}
        {tool.faqs.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <script type="application/ld+json">
              {JSON.stringify(faqSchema)}
            </script>
            <div className="space-y-6">
              {tool.faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Related Tools */}
        {tool.relatedTools.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {tool.relatedTools.map((relatedId) => {
                const relatedTool = tools.find((t) => t.id === relatedId)
                if (!relatedTool) return null
                return (
                  <Link
                    key={relatedId}
                    to={`/tool/${relatedId}`}
                    className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition border border-gray-200"
                  >
                    <div className="text-3xl mb-2">{relatedTool.icon}</div>
                    <h3 className="font-semibold mb-1">{relatedTool.name}</h3>
                    <p className="text-sm text-gray-600">{relatedTool.description}</p>
                  </Link>
                )
              })}
            </div>
          </section>
        )}
      </div>
    </>
  )
}

export default ToolPage
