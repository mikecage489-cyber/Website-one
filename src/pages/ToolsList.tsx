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

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            {categoryInfo ? categoryInfo.name : 'All Tools'}
          </h1>
          <p className="text-xl text-gray-600">
            {categoryInfo 
              ? categoryInfo.description 
              : 'Browse our complete collection of free online tools'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <Link
            to="/tools"
            className={`px-4 py-2 rounded-lg transition ${
              !category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </Link>
          {toolCategories.map((cat) => (
            <Link
              key={cat.id}
              to={`/tools/${cat.id}`}
              className={`px-4 py-2 rounded-lg transition ${
                category === cat.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        {/* Ad Unit */}
        <div className="mb-8">
          <AdUnit slot="1234567893" />
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              to={`/tool/${tool.id}`}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition border border-gray-200"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h2 className="text-xl font-semibold mb-2">{tool.name}</h2>
              <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
              <span className="text-blue-600 text-sm font-medium">
                Use Tool →
              </span>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No tools found in this category.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default ToolsList
