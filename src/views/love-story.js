import React, { useEffect } from "react"

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './love-story.css'

const LoveStory = (props) => {

  useEffect(() => {
    const button = document.querySelector(".love-story-container4");
    const rsvpSection = document.querySelector("#rsvp");

    if (!button || !rsvpSection) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            button.classList.add("hidden");
          } else {
            button.classList.remove("hidden");
          }
        },
        {
          threshold: 0.5, // khi RSVP hiện ~50%
        }
    );

    observer.observe(rsvpSection);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {

    // =============================
    // 2️⃣ Floating Hearts
    // =============================
    const container = document.querySelector(".floating-hearts");

    let interval;

    if (container) {
      const createHeart = () => {
        const heart = document.createElement("div");
        heart.classList.add("heart");

        const icons = ["♡", "♥"];
        const colors = [
          "#ffdbe6",
          "#ffe6ef",
          "#fbe4ff",
          "#fff0f5"
        ];

        heart.style.color =
            colors[Math.floor(Math.random() * colors.length)];

        heart.innerHTML =
            icons[Math.floor(Math.random() * icons.length)];

        heart.style.left = Math.random() * 100 + "vw";

        const size = 14 + Math.random() * 26;
        heart.style.fontSize = size + "px";

        const duration = 12 + Math.random() * 6;
        heart.style.animationDuration = duration + "s";

        container.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, duration * 1000);
      };

      interval = setInterval(createHeart, 900);
    }

    // =============================
    // Cleanup
    // =============================
    return () => {
      if (observer) observer.disconnect();
      if (interval) clearInterval(interval);
    };
  }, []);

  const phoneRegex = /^(0|\+84)(3|5|7|8|9)\d{8}$/;
  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    if (!form.checkValidity()) {
      form.classList.add("submitted");
      return;
    }

    const data = {
      name: form.name.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbxE67Z14NLjc2Sf-6A3wLJMdt5XdriD_wVRttc-mcB1eoqYSu6JHFpe5ydGQ5ZSqe0/exec", {
        method: "POST",
        body: JSON.stringify(data),
      });

      alert("Cảm ơn bạn đã gửi lời chúc 💖");
      form.reset();
    } catch (error) {
      alert("Có lỗi xảy ra, vui lòng thử lại.");
    }
  };



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
          <img
              src="/assets/AC.webp"
              alt="Wedding Hero"
              className="hero-image"
          />

          {/* Layer 2: Full overlay information panel */}
          <div className="hero-info-layer">
            <span className="section-subtitle">SAVE THE DAY</span>

            <h1 className="hero-title love-story-hero-title">
              Hoàng Nhi &amp; Thủy Tiên
            </h1>

            <p className="hero-subtitle">
              12 - 04 - 2026
            </p>
            <p className="hero-subtitle">
            The Beginning of Forever
            </p>

            <div className="hero-actions">
              <a href="#invitation" className="scroll-down-btn">
                <span className="arrow"></span>
              </a>
            </div>
          </div>
          <div className="floating-hearts"></div>
        </section>
        <section className="invitation-section" id="invitation">
          <div className="invitation-container">

            {/* HEADER – CENTER */}
            <div className="invitation-header">
              <h2 className="section-title">
                Trân Trọng Kính Mời
              </h2>
              <p className="section-subtitle">
                Hạnh phúc được vun đắp không chỉ bởi những khoảnh khắc riêng tư, mà còn bởi những lời chúc phúc chân
                thành và sự đồng hành ấm áp từ người thân và bạn bè
              </p>
            </div>

            {/* CONTENT */}
            <div className="invitation-body">

              {/* LEFT – TEXT */}
              <div className="invitation-text">
                <p>
                  Chúng tôi vô cùng biết ơn vì đã có gia đình, bạn bè và những người thân yêu luôn đồng hành, yêu thương và chúc phúc suốt hành trình vừa qua.
                </p>
                <p>
                  Trân trọng kính mời bạn đến chung vui trong <strong>Lễ Thành Hôn</strong> của chúng tôi, để cùng chia sẻ khoảnh khắc đặc biệt khi chúng tôi bắt đầu một chương mới của cuộc đời.
                </p>
              </div>

              {/* RIGHT – IMAGE */}
              <div className="invitation-image">
                <div className="easel-wrapper">

                  <div className="wedding-board">
                    <img
                        src="/assets/ANH_DAM_HOI_01.webp"
                        alt="Cô dâu và Chú rể"
                    />
                  </div>

                  <div className="leg leg-left"></div>
                  <div className="leg leg-right"></div>
                  <div className="leg leg-back"></div>

                </div>
              </div>

            </div>
          </div>
        </section>
        <section id="timeline" className="timeline-overview">
          <div className="timeline-container">
            <div className="timeline-header">
              <h2 className="section-title">Những Chương Đầu Của Chúng Mình</h2>
              <p className="section-subtitle">
                Những cột mốc đã đưa chúng mình đến với khoảnh khắc này
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
                    <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3.019 0L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </div>
                <div className="timeline-content-card">
                  <span className="timeline-date">10 - 08 - 2024</span>
                  <h3 className="section-subtitle">How We Met</h3>
                  <p className="section-content">
                    Cuối tiệc sau giải giao lưu cầu lông <strong>ITKV5 Open</strong>, giữa những phút giây vội vàng, chúng mình có dịp được giới thiệu với nhau đôi lời giản dị. Một cuộc gặp gỡ ngắn ngủi, mộc mạc, nhưng đủ để lưu lại ấn tượng đầu tiên — nhẹ nhàng mà khó quên.
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
                    Buổi hẹn đầu tiên bắt đầu với “Làm giàu với ma” và khép lại bằng một bàn dimsum nhiều đến mức cả hai chỉ biết nhìn nhau cười.
                    Chỉ vậy thôi, mà trở thành một kỷ niệm thật đáng nhớ trong hành trình yêu thương của chúng tôi.
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
                    Tại <strong>"Hide Away Bistro Ben Tre"</strong> vào một ngày thật ý nghĩa, chúng tôi đã cùng nhau nói ra những điều chân thành nhất từ trái tim. Và khoảnh khắc nhận được cái gật đầu đồng ý ấy đã biến ngày hôm đó trở thành một dấu mốc đặc biệt — khi cả hai chính thức nắm tay nhau trên hành trình tìm đến bến bờ hạnh phúc.

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
                    <path
                        d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676a.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3.019 0L5 15c-1.5-1.5-3-3.2-3-5.5"></path>
                  </svg>
                </div>
                <div className="timeline-content-card">
                  <span className="timeline-date">20 - 10 - 2025</span>
                  <h3 className="section-subtitle">The Proposal</h3>
                  <p className="section-content">
                    Một lần nữa trở lại <strong>"Hide Away Bistro Ben Tre"</strong> — vẫn là nơi quen thuộc ấy, nhưng lần này là một dịp đặc biệt hơn. Đó là ngày lời cầu hôn được cất lên và nhận được cái gật đầu đồng ý. Giây phút ấy, mọi cảm xúc như vỡ òa, mở ra một chặng đường mới đầy yêu thương.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="moments-gallery">
          <div className="gallery-full-wrapper">
            <div className="gallery-intro">
              <h2 className="section-title">Album Hình Cưới</h2>
              <p className="section-subtitle">
                Một vài khoảnh khắc chuẩn bị cho ngày trọng đại của chúng mình
              </p>
            </div>
            <div className="gallery-grid-3x2">
              <div className="gallery-item">
                <img
                    alt="1"
                    src="/assets/TULE8347.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                    alt="2"
                    src="/assets/TULE8457.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                    alt="3"
                    src="/assets/TULE8521.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                    alt="4"
                    src="/assets/TULE8557.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                    alt="5"
                    src="/assets/TULE8599.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <img
                    alt="6"
                    src="/assets/TULE8612.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="rsvp-section" id="rsvp">
          <div className="rsvp-container">

            {/* HEADER */}
            <div className="rsvp-header">
              <h2 className="section-title">R.S.V.P – Gửi Lời Chúc</h2>
              <p className="section-subtitle">
                Sự hiện diện và lời chúc của bạn là món quà ý nghĩa nhất dành cho chúng tôi 💖
              </p>
            </div>

            {/* FORM */}
            <form className="rsvp-form" onSubmit={handleSubmit} noValidate>
              {/* Họ tên */}
              <div className="form-group">
                <label>Họ và tên *</label>
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Nhập họ và tên"
                />
                <span className="error-text">Vui lòng nhập họ tên</span>
              </div>

              {/* Số điện thoại */}
              <div className="form-group">
                <label>Số điện thoại *</label>
                <input
                    type="text"
                    name="phone"
                    required
                    pattern="^(0)(3|5|7|8|9)[0-9]{8}$"
                    placeholder="VD: 0901234567"
                />
                <span className="error-text">
                  Số điện thoại không đúng định dạng
                </span>
              </div>

              {/* Lời chúc */}
              <div className="form-group">
                <label>Lời chúc *</label>
                <textarea
                    name="message"
                    required
                    placeholder="Gửi lời chúc đến cô dâu chú rể"
                ></textarea>
                <span className="error-text">Vui lòng nhập lời chúc</span>
              </div>

              <button type="submit" className="btn-submit">
                Gửi lời chúc
              </button>
            </form>

          </div>
        </section>
        <section id="wedding-info" className="wedding-info-section">
          {/* Header */}
          <div className="wedding-info-header">
            <h2 className="section-title">Thông Tin Tiệc</h2>
            <p className="section-subtitle">
              Chúng tôi rất mong chờ được đón tiếp quý vị
            </p>
          </div>

          {/* Content */}
          <div className="wedding-info-grid">
            {/* Nhà cô dâu */}
            <div className="wedding-info-card">
              <h3 className="info-title">Nhà Cô Dâu</h3>

              <div className="info-item">
                <span className="info-label">Thời gian</span>
                <span className="info-value">Thứ Bảy, 11/04/2026</span>
              </div>
              <div className="info-item">
                <span className="info-label">Nhằm ngày</span>
                <span className="info-value">24 tháng 02 năm Bính Ngọ</span>
              </div>

              <div className="info-item">
                <span className="info-label">Địa điểm</span>
                <span className="info-value">
          Tư gia nhà gái, Mỏ Cày Nam, Bến Tre
        </span>
              </div>


              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1869.6813071755787!2d106.37011109999999!3d10.0471389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAyJzQ5LjciTiAxMDbCsDIyJzEyLjQiRQ!5e1!3m2!1svi!2s!4v1771916910470!5m2!1svi!2s"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
              ></iframe>
            </div>

            {/* Nhà chú rể */}
            <div className="wedding-info-card">
              <h3 className="info-title">Nhà Chú Rể</h3>

              <div className="info-item">
                <span className="info-label">Thời gian</span>
                <span className="info-value">Chủ Nhật, 12/04/2026</span>
              </div>

              <div className="info-item">
                <span className="info-label">Nhằm ngày</span>
                <span className="info-value">25 tháng 02 năm Bính Ngọ</span>
              </div>

              <div className="info-item">
                <span className="info-label">Địa điểm</span>
                <span className="info-value">
            Tư gia nhà trai, Thị trấn Búng Tàu, Phụng Hiệp, Hậu Giang
        </span>
              </div>
              <iframe
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d935.7920007072033!2d105.7782778!3d9.712527799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNDInNDUuMSJOIDEwNcKwNDYnNDEuOCJF!5e1!3m2!1svi!2s!4v1771916956778!5m2!1svi!2s"
                  width="100%"
                  height="300"
                  style={{border: 0}}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
              ></iframe>
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
        <a href="#rsvp">
          <div
              aria-label="Gửi lời chúc mừng"
              className="love-story-container4"
          >
            <span className="love-story-text4">Gửi lời chúc mừng</span>
          </div>
        </a>
      </div>
  )
}

export default LoveStory
