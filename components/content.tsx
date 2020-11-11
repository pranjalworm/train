import React from 'react';

export default function Content() {

  return (
    <div className="h-screen p-8 text-primary">

      <div className="mb-8">
        <div className="text-3xl font-title">Projects</div>

        <div className="my-4">
          <a className="font-title" target="_blank" href="https://pranjaldubey.photography" rel="noopener">Pranjal Dubey Photography</a>

          <div>
            A website to document my photography.<br />
            Check out the <a className="text-accent" target="_blank" href="https://github.com/pranjalworm/click" rel="noopener">source code</a>.
          </div>
        </div>

        <div className="my-4">
          <a className="font-title" target="_blank" href="https://pranjalworm.github.io/css-filter-generator/" rel="noopener">
            CSS Filter Generator
          </a>

          <div>
            Convert from black to target hex color.<br />
            Check out the <a href="https://github.com/pranjalworm/css-filter-generator" className="text-accent" target="_blank" rel="noopener">source code</a>.
          </div>

        </div>
      </div>

      <div className="mb-8">
        <div className="text-3xl font-title">
          Blogs
          </div>
        <div className="section-link">
          coming soon...
          </div>
      </div>

    </div>
  );
}