/*
import { useState } from 'react';

function Hobbies() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="hobbies page-section section-line" id="hobbies" aria-labelledby="hobbies-title">
      <div className="section-content">
        <div className="hobbies-heading">
          <h2 id="hobbies-title">Things I<br /><em>make.</em></h2>
          <p>The creative interests I bring with me when I sit down to build something.</p>
        </div>
        <article className="hobby-feature">
          <div className="hobby-image">
            <img src="img/Background v1.png" alt="Puzzle pieces opening onto a bright ocean horizon" />
            <span className="hobby-mark">01</span>
          </div>
          <div className="hobby-video">
            <button className="hobby-video-trigger" type="button" onClick={() => setIsVideoOpen(true)}>
              Watch music video <span aria-hidden="true">↗</span>
            </button>
          </div>
          <div className="hobby-copy">
            <div><span className="project-label">Personal work</span><h3>A music video<br /><em>for class.</em></h3></div>
            <div><p>I turned a feeling into moving images, learning how pacing, mood, and visual choices can tell a story without explaining everything.</p><span className="project-tools">Storytelling · Editing · Visual direction</span></div>
          </div>
        </article>
      </div>
      {isVideoOpen && (
        <div className="video-modal" role="dialog" aria-modal="true" aria-labelledby="video-modal-title" onClick={() => setIsVideoOpen(false)}>
          <div className="video-modal-content" onClick={(event) => event.stopPropagation()}>
            <div className="video-modal-header">
              <h2 id="video-modal-title">A music video for class.</h2>
              <button className="video-modal-close" type="button" onClick={() => setIsVideoOpen(false)} aria-label="Close music video">×</button>
            </div>
            <div className="video-modal-frame">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/0RKk7c-sgw8?si=UpJH16gllTGlWQhy" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Hobbies;
*/
