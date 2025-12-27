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
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white py-24 md:py-32 overflow-hidden animate-gradient">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 inline-block animate-bounce">
              <span className="text-6xl md:text-8xl">🚀</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              Free Online Tools for{' '}
              <span className="text-yellow-300">Everyone</span>
            </h1>
            <p className="text-xl md:text-3xl mb-10 text-blue-100 font-light">
              Fast, secure, and easy-to-use tools that work entirely in your browser
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/tools"
                className="inline-block bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-yellow-300 hover:text-gray-900 transform hover:scale-110 transition-all duration-300 shadow-2xl"
              >
                🎯 Browse All Tools
              </Link>
              <Link
                to="/about"
                className="inline-block bg-transparent border-3 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transform hover:scale-110 transition-all duration-300"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ad Unit - Top */}
      <div className="container mx-auto px-4 my-8">
        <AdUnit slot="1234567890" />
      </div>

      {/* Tool Categories */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tool Categories
          </h2>
          <p className="text-xl text-gray-600">Choose from our wide range of categories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {toolCategories.map((category) => (
            <Link
              key={category.id}
              to={`/tools/${category.id}`}
              className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-2"
            >
              <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors">
                {category.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                {category.description}
              </p>
              <div className="mt-4 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform">
                Explore <span className="ml-2">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Ad Unit - Middle */}
      <div className="container mx-auto px-4 my-8">
        <AdUnit slot="1234567891" />
      </div>

      {/* Featured Tools */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Featured Tools
            </h2>
            <p className="text-xl text-gray-600">Most popular tools used by our community</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTools.map((tool) => (
              <Link
                key={tool.id}
                to={`/tool/${tool.id}`}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-300 transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-purple-600 transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Try it now <span className="ml-2">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/tools"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Why Choose Our Tools?
          </h2>
          <p className="text-xl text-gray-600">Built with care for the best user experience</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span className="text-5xl">⚡</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Lightning Fast</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              All tools run in your browser for instant results with no server delays
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-green-400 to-blue-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span className="text-5xl">🔒</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">100% Private</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              Your data never leaves your device. Everything is processed locally
            </p>
          </div>
          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-400 to-pink-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
              <span className="text-5xl">🆓</span>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Completely Free</h3>
            <p className="text-gray-600 text-base leading-relaxed">
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
