import { Link, useParams } from 'react-router-dom'
import SEO from '../components/SEO'
import AdUnit from '../components/AdUnit'
import { tools, toolCategories } from '../config/tools'

function ToolsList() {
  const { category } = useParams<{ category?: string }>()
  
  const filteredTools = category
    ? tools.filter(tool => tool.category === category)
    : tools

  const categoryInfo = category
    ? toolCategories.find(cat => cat.id === category)
    : null

  const title = categoryInfo 
    ? `${categoryInfo.name} - Free Online Tools`
    : 'All Tools - Free Online Tools'
  
  const description = categoryInfo
    ? `Explore our collection of ${categoryInfo.name.toLowerCase()}. ${categoryInfo.description}`
    : 'Browse our complete collection of free online tools including text tools, calculators, converters, SEO tools, and developer utilities.'

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={`${categoryInfo?.name || 'tools'}, online tools, free tools`}
      />

      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12 text-center">
            {categoryInfo && (
              <div className="text-7xl mb-6 inline-block">{categoryInfo.icon}</div>
            )}
            <h1 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {categoryInfo ? categoryInfo.name : 'All Tools'}
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              {categoryInfo 
                ? categoryInfo.description 
                : 'Browse our complete collection of free online tools'}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/tools"
              className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
                !category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-110'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:scale-105'
              }`}
            >
              All Tools
            </Link>
            {toolCategories.map((cat) => (
              <Link
                key={cat.id}
                to={`/tools/${cat.id}`}
                className={`px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center gap-2 ${
                  category === cat.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-110'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:scale-105'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                {cat.name}
              </Link>
            ))}
          </div>

          {/* Ad Unit */}
          <div className="mb-12">
            <AdUnit slot="1234567893" />
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <Link
                key={tool.id}
                to={`/tool/${tool.id}`}
                className="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-blue-500 transform hover:-translate-y-2"
              >
                <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300">
                  {tool.icon}
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </h2>
                <p className="text-gray-600 text-base mb-6 leading-relaxed">
                  {tool.description}
                </p>
                <div className="flex items-center text-blue-600 font-bold group-hover:translate-x-2 transition-transform">
                  Use Tool <span className="ml-2 text-2xl">→</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredTools.length === 0 && (
            <div className="text-center py-20">
              <div className="text-8xl mb-6">🔍</div>
              <p className="text-3xl text-gray-600 font-bold">No tools found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ToolsList
