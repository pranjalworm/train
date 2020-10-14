import Head from 'next/head';
import { SEOData } from '../public/seo-data';

export default function Home() {

  const description = 'Pranjal Dubey is a programmer and part-time photographer based in Bangalore, India.';

  return (
    <div id="root-wrapper">
      <Head>
        <title>Pranjal Dubey</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={description} />
        <meta property="og:site_name" content="Pranjal Dubey" />
        <meta property="og:title" content="Pranjal Dubey" />
        <meta property="og:url" content="https://pranjaldubey.com" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://pranjaldubey.com/images/pranjal.jpg" />
        <meta property="og:image:alt" content="Pranjal Dubey's photograph" />
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SEOData.SchemaData) }} />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet" />
      </Head>

      {/* sidebar */}
      <div id="sidebar-wrapper">
        <div id="profile-pic-wrapper">
          <img src="/images/pranjal.jpg" alt="Pranjal Dubey's photograph" />
        </div>

        <div id="about-me-wrapper">
          <div>I am a programmer.</div>
          <div>I like reading almost anything interesting I can get my hands on.</div>
          <div>I am big time into photography.</div>
          <div>Pizza is life for me.</div>
          <div>Bangalore, India</div>
        </div>

        <div id="social-links-wrapper">
          <a className="social-link" target="_blank"
            href="https://www.goodreads.com/user/show/26285683-pranjal-dubey" rel="noopener">Goodreads</a>
          <a className="social-link" target="_blank" href="https://www.instagram.com/pranjalworm/" rel="noopener">Instagram</a>
          <a className="social-link" target="_blank" href="https://github.com/pranjalworm" rel="noopener">Github</a>
          <a className="social-link" target="_blank" href="https://www.linkedin.com/in/pranjal-dubey/" rel="noopener">LinkedIn</a>
        </div>

        <div id="contact-info-wrapper">
          <a href="mailto:hi@pranjaldubey.com">hi@pranjaldubey.com</a>
        </div>
      </div>

      {/* content */}
      <div id="content-wrapper">
        <h1 id="website-title">
          Pranjal Dubey
        </h1>

        <div className="sections-container">
          <div className="section-title">
            Projects
          </div>
          <div className="section-link">
            <a target="_blank" href="https://pranjaldubey.photography" rel="noopener">Pranjal Dubey Photography</a>

            <div className="section-description">
              A website to document my photography.<br />
              Check out the <a className="code-link" target="_blank" href="https://github.com/pranjalworm/click" rel="noopener">source code</a>.
            </div>
          </div>

          <div className="section-link">
            <a target="_blank" href="https://pranjalworm.github.io/css-filter-generator/" rel="noopener">
              CSS Filter Generator
            </a>

            <div className="section-description">
              Convert from black to target hex color.<br />
              Check out the <a href="https://github.com/pranjalworm/css-filter-generator" className="code-link" target="_blank" rel="noopener">source code</a>.
            </div>

          </div>
        </div>

        <div className="sections-container">
          <div className="section-title">
            Blogs
          </div>
          <div className="section-link">
            coming soon...
          </div>
        </div>

      </div>

    </div>
  )
}
