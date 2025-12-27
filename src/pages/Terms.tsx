import SEO from '../components/SEO'

function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Read the terms and conditions for using Helpful Tools website and services."
        keywords="terms, conditions, terms of service, legal"
      />

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>

        <p className="text-sm text-gray-600 mb-8">
          Last Updated: December 27, 2025
        </p>

        <div className="prose max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By accessing and using Helpful Tools, you accept and agree to be bound by 
              these Terms & Conditions. If you disagree with any part of these terms, 
              you may not access the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Use License</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily use the tools on Helpful Tools for 
              personal, non-commercial purposes. This is the grant of a license, not a 
              transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software on the website</li>
              <li>Remove any copyright or proprietary notations from the materials</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The tools and materials on Helpful Tools are provided on an 'as is' basis. 
              Helpful Tools makes no warranties, expressed or implied, and hereby disclaims 
              and negates all other warranties including, without limitation, implied 
              warranties or conditions of merchantability, fitness for a particular purpose, 
              or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Furthermore, Helpful Tools does not warrant or make any representations 
              concerning the accuracy, likely results, or reliability of the use of the 
              tools or otherwise relating to such tools or on any resources linked to 
              this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Limitations</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall Helpful Tools or its suppliers be liable for any damages 
              (including, without limitation, damages for loss of data or profit, or due 
              to business interruption) arising out of the use or inability to use the 
              tools on Helpful Tools, even if Helpful Tools or an authorized representative 
              has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Accuracy of Tools</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              While we strive to provide accurate and reliable tools, we cannot guarantee 
              the accuracy of results. Users are responsible for verifying the accuracy of 
              any results before relying on them for important decisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">User Conduct</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You agree not to use the website or tools:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any viruses, malware, or harmful code</li>
              <li>To attempt to gain unauthorized access to any systems or networks</li>
              <li>To interfere with or disrupt the website or servers</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The website and its original content, features, and functionality are owned 
              by Helpful Tools and are protected by international copyright, trademark, 
              patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Links to Other Websites</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our website may contain links to third-party websites that are not owned or 
              controlled by Helpful Tools. We have no control over and assume no 
              responsibility for the content, privacy policies, or practices of any 
              third-party websites.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Modifications to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We reserve the right to revise these terms at any time. By continuing to 
              access or use our website after revisions become effective, you agree to be 
              bound by the revised terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              These terms shall be governed and construed in accordance with applicable 
              laws, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us 
              through our <a href="/contact" className="text-blue-600 hover:underline">contact page</a>.
            </p>
          </section>
        </div>
      </div>
    </>
  )
}

export default Terms
