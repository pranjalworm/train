import React from 'react';

export default function SideMenu() {

  return (
    <div className="w-1/5 min-w-sidemenu h-full p-8 bg-sidemenu text-white text-right">
      <h1 className="mb-8 text-3xl font-title">
        Pranjal Dubey
      </h1>

      <img src="/images/pranjal.jpg" alt="Pranjal Dubey's photograph" className="mb-8 w-full" />

      <div className="mb-2">I am a programmer.</div>
      <div className="mb-2">I like reading almost anything interesting I can get my hands on.</div>
      <div className="mb-2">I am big time into photography.</div>
      <div className="mb-2">Pizza is life for me.</div>
      <div className="mb-2">Based in Bangalore, India</div>

      <div className="flex flex-col mt-8">
        <a className="mb-2" target="_blank"
          href="https://www.goodreads.com/user/show/26285683-pranjal-dubey" rel="noopener">Goodreads</a>
        <a className="mb-2" target="_blank" href="https://www.instagram.com/pranjalworm/" rel="noopener">Instagram</a>
        <a className="mb-2" target="_blank" href="https://github.com/pranjalworm" rel="noopener">Github</a>
        <a className="mb-2" target="_blank" href="https://www.linkedin.com/in/pranjal-dubey/" rel="noopener">LinkedIn</a>
      </div>

      <div className="mt-8">
        <a href="mailto:hi@pranjaldubey.com">hi@pranjaldubey.com</a>
      </div>
    </div>
  );

}