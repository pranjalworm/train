import React from 'react';

export default function SideMenu() {

  return (
    <div id="sidebar-wrapper">
      <h1 id="website-title">
        Pranjal Dubey
      </h1>
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
  );

}