import SEO from '../components/SEO'

function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Read our privacy policy to understand how Helpful Tools protects your privacy and handles data."
        keywords="privacy policy, privacy, data protection"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

        <p className="text-sm text-gray-600 mb-8">
          Last Updated: December 27, 2025
        </p>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At Helpful Tools, we take your privacy seriously. This Privacy Policy explains 
              how we collect, use, and protect your information when you use our website and tools.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-2">Tool Usage Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              All tools on our website run entirely in your browser. This means that any data 
              you input into our tools (text, numbers, files, etc.) is processed locally on 
              your device and is never sent to our servers or any third party.
            </p>
            
            <h3 className="text-xl font-semibold mb-2">Analytics Data</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may collect anonymous usage data through analytics services to understand 
              how visitors use our website. This may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Pages visited</li>
              <li>Time spent on pages</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Geographic location (country/city level only)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-2">Cookies</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use cookies for essential website functionality and analytics. You can 
              control cookie settings through your browser preferences.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Google AdSense</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use Google AdSense to display advertisements on our website. Google AdSense 
              may use cookies and other tracking technologies to serve ads based on your 
              interests. You can learn more about how Google uses data when you use our site 
              by visiting Google's Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              You can opt out of personalized advertising by visiting 
              <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer"> Google Ads Settings</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Improve our website and tools</li>
              <li>Understand user behavior and preferences</li>
              <li>Display relevant advertisements</li>
              <li>Maintain website security</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate security measures to protect against unauthorized 
              access to or unauthorized alteration, disclosure, or destruction of data. 
              However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites. We are not responsible 
              for the privacy practices of these external sites. We encourage you to read 
              their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website is not directed to children under 13 years of age. We do not 
              knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may update this Privacy Policy from time to time. We will notify you of 
              any changes by posting the new Privacy Policy on this page and updating the 
              "Last Updated" date.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us through 
              our <a href="/contact" className="text-blue-600 hover:underline">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
