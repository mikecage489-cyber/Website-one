import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import AdUnit from '../components/AdUnit'
import { toolCategories, tools } from '../config/tools'

function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Helpful Tools',
    description: 'Free online tools that work entirely in your browser',
    url: 'https://helpful-tools.example.com',
  }

  const featuredTools = tools.slice(0, 6)

  return (
    <>
      <SEO
        title="Free Online Tools"
        description="Access a comprehensive collection of free online tools including text tools, calculators, converters, SEO tools, and developer utilities. All tools work entirely in your browser."
        keywords="online tools, free tools, text tools, calculators, converters, SEO tools, developer tools"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free Online Tools for Everyone
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Fast, secure, and easy-to-use tools that work entirely in your browser
            </p>
            <Link
              to="/tools"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Browse All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Ad Unit - Top */}
      <div className="container mx-auto px-4 my-8">
        <AdUnit slot="1234567890" />
      </div>

      {/* Tool Categories */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Tool Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category) => (
            <Link
              key={category.id}
              to={`/tools/${category.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-200"
            >
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-600">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Unit - Middle */}
      <div className="container mx-auto px-4 my-8">
        <AdUnit slot="1234567891" />
      </div>

      {/* Featured Tools */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <Link
                key={tool.id}
                to={`/tool/${tool.id}`}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-200"
              >
                <div className="text-3xl mb-3">{tool.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/tools"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Tools?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              All tools run in your browser for instant results with no server delays
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-3">100% Private</h3>
            <p className="text-gray-600">
              Your data never leaves your device. Everything is processed locally
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl mb-4">🆓</div>
            <h3 className="text-xl font-semibold mb-3">Completely Free</h3>
            <p className="text-gray-600">
              All tools are free to use with no registration or hidden costs
            </p>
          </div>
        </div>
      </section>

      {/* Ad Unit - Bottom */}
      <div className="container mx-auto px-4 my-8">
        <AdUnit slot="1234567892" />
      </div>
    </>
  )
}

export default Home
