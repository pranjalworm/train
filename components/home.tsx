import SideMenu from "./side-menu"

export default function Home() {

  return (
    <div id="root-wrapper">

      <SideMenu />

      {/* content */}
      <div id="content-wrapper">

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
