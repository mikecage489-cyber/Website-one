import SEO from '../components/SEO'

function About() {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Helpful Tools - your go-to destination for free, fast, and secure online tools that work entirely in your browser."
        keywords="about, helpful tools, online tools, free tools"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Helpful Tools</h1>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Helpful Tools, we believe that everyone should have access to powerful, 
              easy-to-use online tools without the need for complex software installations 
              or expensive subscriptions. Our mission is to provide a comprehensive collection 
              of free online tools that work entirely in your browser, ensuring fast performance 
              and complete privacy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our platform offers a wide range of tools across multiple categories:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Text Tools for writers, editors, and content creators</li>
              <li>Calculator Tools for everyday calculations</li>
              <li>Converter Tools for unit conversions and more</li>
              <li>SEO Tools to optimize your website's search presence</li>
              <li>Developer Tools for programmers and web developers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">100% Free</h3>
                <p className="text-gray-700">
                  All our tools are completely free to use with no hidden costs or premium features.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Privacy First</h3>
                <p className="text-gray-700">
                  Your data never leaves your device. All processing happens locally in your browser.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">No Registration Required</h3>
                <p className="text-gray-700">
                  Start using our tools immediately without creating an account or providing personal information.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Fast & Reliable</h3>
                <p className="text-gray-700">
                  Built with modern web technologies for optimal performance and reliability.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Helpful Tools is built using cutting-edge web technologies including React, 
              TypeScript, and Tailwind CSS. We leverage modern browser capabilities to 
              provide fast, responsive tools that work seamlessly across all devices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              Have questions, suggestions, or feedback? We'd love to hear from you! 
              Visit our <a href="/contact" className="text-blue-600 hover:underline">contact page</a> to get in touch.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default About
