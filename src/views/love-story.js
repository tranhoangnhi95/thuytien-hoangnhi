import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './love-story.css'

const LoveStory = (props) => {
  return (
    <div id="lovestory" className="love-story-container1">
      <Helmet>
        <title>Hoàng Nhi & Thủy Tiên - Wedding Invitation</title>
        <meta
          property="og:title"
          content="Hoàng Nhi & Thủy Tiên - Wedding Invitation"
        />
        <link
          rel="canonical"
          href="https://haongnhithuytien.vercel.app/"
        />
      </Helmet>
      <section className="love-story-hero">
        <div className="hero-media-wrapper">
          {/*<video*/}
          {/*  src="https://videos.pexels.com/video-files/11698586/11698586-hd_1280_720_25fps.mp4"*/}
          {/*  loop="true"*/}
          {/*  muted="true"*/}
          {/*  poster="https://images.pexels.com/videos/11698586/pictures/preview-0.jpeg"*/}
          {/*  autoPlay="true"*/}
          {/*  playsInline="true"*/}
          {/*  className="hero-video"*/}
          {/*></video>*/}
          <img
              src="/assets/AC.JPG"
              alt="Wedding Hero"
              className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content-outer">
          <div className="hero-foreground-block">
            <span className="section-subtitle">Save The Day</span>
            <h1 className="hero-title love-story-hero-title">
              Hoàng Nhi &amp; Thủy Tiên
            </h1>
            <p className="hero-subtitle">
              12 - 04 - 2026 • The Beginning of Forever
            </p>
            <div className="hero-actions">
              <a href="#timeline">
                <div className="btn-primary btn-lg btn">
                  <span>Explore Our Story</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="timeline" className="timeline-overview">
        <div className="timeline-container">
          <div className="timeline-header">
            <h2 className="section-title">The Chapters of Us</h2>
            <p className="section-subtitle">
              A timeline of the moments that led us here
            </p>
          </div>
          <div className="timeline-vertical-path">
            <div className="timeline-entry">
              <div className="timeline-marker">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3.019 0L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </div>
              <div className="timeline-content-card">
                <span className="timeline-date">10 - 08 - 2024</span>
                <h3 className="section-subtitle">How We Met</h3>
                <p className="section-content">
                  Đôi lời giới thiệu ở cuối tiệc sau giải giao lưu cầu lông ITKV5 Open tuy vội vàng, mộc mạc nhưng cũng đủ để lại ấn tượng ban đầu cho nhau
                </p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="timeline-marker">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    r="1"
                    cx="12.1"
                    cy="12.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
              </div>
              <div className="timeline-content-card">
                <span className="timeline-date">14 - 09 - 2024</span>
                <h3 className="section-subtitle">The First Date</h3>
                <p className="section-content">
                  Một buổi First Date mà cung bậc cảm xúc thay đổi liên tục với "Làm giàu với ma" rồi sau đó là một combo dimsum mà hai đứa chỉ biết nhìn nhau cười. Những điều đơn giản vậy thôi cũng trở thành kỷ niệm khó phai
                </p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="timeline-marker">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle
                    r="1"
                    cx="12.1"
                    cy="12.1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </svg>
              </div>
              <div className="timeline-content-card">
                <span className="timeline-date">20 - 10 - 2024</span>
                <h3 className="section-subtitle">The Big Move</h3>
                <p className="section-content">
                  Tại "Hide Away Bistro Ben Tre" vào một ngày thật ý nghĩa để nói ra những lời chân thành, và càng ý nghĩa hơn khi nhận được sự đồng ý từ em để cùng nhau đi trên con đường tìm đến bến bờ hạnh phúc

                </p>
              </div>
            </div>
            <div className="timeline-entry">
              <div className="timeline-marker">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3.019 0L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </div>
              <div className="timeline-content-card">
                <span className="timeline-date">20 - 10 - 2025</span>
                <h3 className="section-subtitle">The Proposal</h3>
                <p className="section-content">
                  Một lần nữa trở lại với "Hide Away Bistro Ben Tre" vẫn là nơi quen thuộc. Nhưng lần này là một dịp quan trọng hơn - ngày mà anh chính thức cầu hôn và được em đồng ý. Giây phút ấy cảm xúc như vỡ òa
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="moments-gallery">
        <div className="gallery-full-wrapper">
          <div className="gallery-intro">
            <h2 className="section-title">Captured Moments</h2>
            <p className="section-subtitle">
              Visual whispers of our favorite days
            </p>
          </div>
          <div className="gallery-grid-3x2">
            <div className="gallery-item">
              <img
                alt="Elegance in the ballroom"
                src="https://images.pexels.com/photos/34793913/pexels-photo-34793913.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-image"
              />
              <div className="gallery-caption-overlay">
                <p className="section-content">The Ballroom Dance</p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="A tender shared moment"
                src="https://images.pexels.com/photos/32147265/pexels-photo-32147265.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-image"
              />
              <div className="gallery-caption-overlay">
                <p className="section-content">Whispered Promises</p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Soft ivory roses"
                src="https://images.pexels.com/photos/32316798/pexels-photo-32316798.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-image"
              />
              <div className="gallery-caption-overlay">
                <p className="section-content">Floral Details</p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Wedding rings close up"
                src="https://images.pexels.com/photos/32147294/pexels-photo-32147294.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-image"
              />
              <div className="gallery-caption-overlay">
                <p className="section-content">Symbols of Love</p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Hand in hand in the forest"
                src="https://images.pexels.com/photos/29517102/pexels-photo-29517102.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-image"
              />
              <div className="gallery-caption-overlay">
                <p className="section-content">Autumn Walks</p>
              </div>
            </div>
            <div className="gallery-item">
              <img
                alt="Romantic South Asian wedding scene"
                src="https://images.pexels.com/photos/11749510/pexels-photo-11749510.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="gallery-image"
              />
              <div className="gallery-caption-overlay">
                <p className="section-content">Cultural Harmony</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="milestone-stories">
        <div className="milestone-container">
          <div className="milestone-header">
            <h2 className="section-title">Milestone Stories</h2>
            <p className="section-subtitle">
              The pivotal moments that defined us
            </p>
          </div>
          <div className="milestone-vertical-list">
            <article className="alternate-left milestone-block">
              <div className="milestone-icon-wrapper">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3.019 0L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                </svg>
              </div>
              <div className="milestone-text">
                <h3 className="section-subtitle">The Proposal</h3>
                <p className="section-content">
                  It wasn&apos;t a grand gesture on a mountain top, but a quiet
                  evening at home surrounded by our favorite things. Julian
                  remembered the exact passage of poetry Evelyn read on their
                  first day, and used it to ask the most important question of
                  his life.
                </p>
              </div>
            </article>
            <article className="alternate-right milestone-block">
              <div className="milestone-icon-wrapper">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </g>
                </svg>
              </div>
              <div className="milestone-text">
                <h3 className="section-subtitle">Our First Trip</h3>
                <p className="section-content">
                  Traveling through the countryside of Tuscany, we learned that
                  we could navigate any challenge together—even a broken-down
                  rental car and a map in a language we barely spoke. It was the
                  trip that proved we were truly a team.
                </p>
              </div>
            </article>
            <article className="alternate-left milestone-block">
              <div className="milestone-icon-wrapper">
                <svg
                  fill="none"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 14h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"></path>
                    <path d="m14.45 13.39l5.05-4.694C20.196 8 21 6.85 21 5.75a2.75 2.75 0 0 0-4.797-1.837a.276.276 0 0 1-.406 0A2.75 2.75 0 0 0 11 5.75c0 1.2.802 2.248 1.5 2.946L16 11.95M2 15l6 6"></path>
                    <path d="m7 20l1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a1 1 0 0 0-2.75-2.91"></path>
                  </g>
                </svg>
              </div>
              <div className="milestone-text">
                <h3 className="section-subtitle">Meeting the Families</h3>
                <p className="section-content">
                  The moment our separate worlds became one. Seeing the love and
                  acceptance from both sides solidified what we already
                  knew—that we weren&apos;t just joining two people, but two
                  families who value love above all else.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <section className="loved-ones-notes">
        <div className="notes-container">
          <div className="notes-header">
            <h2 className="section-title">Loved Ones&apos; Notes</h2>
            <p className="section-subtitle">
              Sweet words from our family and friends
            </p>
          </div>
          <div className="notes-grid">
            <div className="note-card">
              <div className="quote-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
                  <path d="M12 11h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;Seeing you two together is like watching a masterclass in
                patience and kindness. You complement each other in the most
                beautiful ways.&quot;
              </p>
              <span className="note-author">— Sarah, Maid of Honor</span>
            </div>
            <div className="note-card">
              <div className="quote-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
                  <path d="M12 11h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;I&apos;ve known Julian since we were kids, and I&apos;ve
                never seen him as happy or as grounded as he is when he&apos;s
                with Evelyn. Truly meant to be.&quot;
              </p>
              <span className="note-author">— Mark, Best Man</span>
            </div>
            <div className="note-card">
              <div className="quote-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
                  <path d="M12 11h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;To my daughter and her soulmate: may your life together be
                as radiant as the love in your eyes today. We love you both
                dearly.&quot;
              </p>
              <span className="note-author">— The Thompson Family</span>
            </div>
            <div className="note-card">
              <div className="quote-icon">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z"></path>
                  <path d="M12 11h-4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2z"></path>
                </svg>
              </div>
              <p className="section-content">
                &quot;Your love story is one of my favorites to tell. From that
                rainy day at the bookstore to this beautiful celebration. Cheers
                to forever!&quot;
              </p>
              <span className="note-author">— Aunt Martha</span>
            </div>
          </div>
        </div>
      </section>
      <section className="looking-ahead">
        <div className="looking-ahead-container">
          <div className="looking-ahead-card">
            <div className="looking-ahead-content">
              <h2 className="section-title">Looking Ahead</h2>
              <p className="section-content">
                Our journey doesn&apos;t end here; it only deepens. We look
                forward to a future filled with shared adventures, quiet
                evenings, and a home built on the foundation of the love we
                celebrate today. We can&apos;t wait to share this next chapter
                with all of you.
              </p>
              <div className="looking-ahead-actions">
                <a href="#">
                  <div className="btn-primary btn-lg btn">
                    <span>RSVP to Our Day</span>
                  </div>
                </a>
                <a href="#">
                  <div className="btn-outline btn-lg btn">
                    <span>Wedding Details</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="looking-ahead-decoration">
              <svg
                fill="none"
                width="120"
                xmlns="http://www.w3.org/2000/svg"
                height="120"
                stroke="var(--color-primary)"
                opacity="0.1"
                viewBox="0 0 24 24"
                strokeWidth="0.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3.019 0L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <div className="love-story-container2">
        <div className="love-story-container3">
          <Script
            html={`<script defer data-name="love-story-interactions">
(function(){
  // Intersection Observer for reveal animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealOnScroll.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply to timeline entries and milestone blocks
  document.querySelectorAll('.timeline-entry, .milestone-block, .note-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'all 0.6s ease-out';
    revealOnScroll.observe(el);
  });

  // Simple Lightbox Logic (Mockup for Gallery)
  document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const caption = item.querySelector('.gallery-caption-overlay p').textContent;
      
      // In a real production environment, we would use <dialog> here
      // For this stunning visual presentation, we focus on the CSS/HTML structure
      console.log(\`Opening lightbox for: \${caption}\`);
    });
  });

  // Parallax effect for Hero Video
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
      heroVideo.style.transform = \`translateY(\${scrolled * 0.3}px)\`;
    }
  });
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div
          aria-label="Sign up to TeleportHQ"
          className="love-story-container4"
        >
          <span className="love-story-text4">Gửi lời chúc mừng</span>
        </div>
      </a>
    </div>
  )
}

export default LoveStory
