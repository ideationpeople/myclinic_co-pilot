export default function Faq() {
  return (
    // <!-- ======= F.A.Q Section ======= -->
    <section id="faq" className="faq">
      <div className="container">

        <div className="section-title" data-aos="zoom-out">
          <h2>F.A.Q</h2>
          <p>Frequently Asked Questions</p>
        </div>

        <ul className="faq-list">

          <li>
            <div data-bs-toggle="collapse" className="collapsed question" href="#faq1">What is MyClinicCoPilot? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq1" className="collapse" data-bs-parent=".faq-list">
              <p>
              MyClinicCoPilot is a comprehensive digital marketing service provider for health practices, leveraging advanced AI technology and first-party data to enhance online presence and patient engagement.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq2" className="collapsed question">What services does MyClinicCoPilot offer? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq2" className="collapse" data-bs-parent=".faq-list">
              <p>
              We offer AI-powered SEO, social media marketing, targeted email campaigns, data-driven patient acquisition strategies, and comprehensive inbound lead management (to be launched soon).
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq3" className="collapsed question">How does AI-powered SEO work? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq3" className="collapse" data-bs-parent=".faq-list">
              <p>
              Our AI tools generate tailored blog posts and high-quality content that resonates with your target audience, optimizing your website for search engines to drive organic traffic and improve rankings.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq4" className="collapsed question">What is included in your social media management services? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq4" className="collapse" data-bs-parent=".faq-list">
              <p>
              Our social media management services include AI-driven content creation, community management, strategic planning and execution, and performance analytics to ensure consistent growth and increased engagement.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq5" className="collapsed question">How do your PPC campaigns utilize first-party data? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq5" className="collapse" data-bs-parent=".faq-list">
              <p>
              We use your first-party data to manage pay-per-click (PPC) campaigns, increasing website traffic and generating valuable leads while maximizing your marketing return on investment (ROI).
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq6" className="collapsed question">What are Look-Alike Audiences (LAL) and how do they benefit my practice? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq6" className="collapse" data-bs-parent=".faq-list">
              <p>
              Look-Alike Audiences (LAL) target campaigns to individuals similar to your existing customers using basic customer data, expanding your reach to a broader, yet relevant audience on platforms like Google
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq7" className="collapsed question">How can AI chatbots improve patient interaction? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq7" className="collapse" data-bs-parent=".faq-list">
              <p>
              AI chatbots provide instant responses to queries, schedule appointments, and offer personalized recommendations 24/7, improving patient satisfaction and reducing the workload on clinic staff.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq8" className="collapsed question">What is your approach to content creation using AI? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq8" className="collapse" data-bs-parent=".faq-list">
              <p>
              We use AI-powered tools to generate high-quality, SEO-friendly content that resonates with patients, including blog posts, social media updates, and email newsletters, tailored to their preferences.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq9" className="collapsed question">What will your comprehensive inbound lead management services include? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq9" className="collapse" data-bs-parent=".faq-list">
              <p>
              Our upcoming inbound lead management services will handle all patient calls during weekends, after hours, and receptionist downtime, manage emergency calls, schedule appointments, and provide patient care and support.
              </p>
            </div>
          </li>

          <li>
            <div data-bs-toggle="collapse" href="#faq10" className="collapsed question">How can I get started with MyClinicCoPilot? <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i></div>
            <div id="faq10" className="collapse" data-bs-parent=".faq-list">
              <p>
              To get started with our services, simply contact us through our website or customer service. We&apos;ll work with you to understand your practice&apos;s needs and tailor our digital marketing solutions accordingly.
              </p>
            </div>
          </li>

        </ul>

      </div>
      {/* <!-- End F.A.Q Section --> */}
    </section>

  )
}