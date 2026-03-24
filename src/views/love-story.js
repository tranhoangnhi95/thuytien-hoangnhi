import React, { useEffect, useState  } from "react"
import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'
import Footer from '../components/footer'
import './love-story.css'
const TARGET_DATE = new Date("2026-04-12T09:00:00").getTime();
import FlipCountdown from "../components/FlipCountdown";
import LazyImage from "../components/LazyImage";

const LoveStory = (props) => {

  const { days, hours, minutes, seconds,isFinished } = useCountdown();

  function useCountdown() {
    const [timeLeft, setTimeLeft] = useState(
        {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
    );
    const [isFinished, setIsFinished] = useState(false);

    function getTimeRemaining() {
      const now = new Date().getTime();
      const distance = TARGET_DATE - now;

      if (distance <= 0) {
        setIsFinished(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
            (distance % (1000 * 60)) /
            1000
        ),
      };
    }

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(getTimeRemaining());
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return {...timeLeft, isFinished};
  }

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
          <div className="floating-hearts"></div>
          <picture className="hero-picture">
            {/* Màn hình dọc (mobile portrait) */}
            <source
                srcSet="/assets/NEN02.webp"
                media="(orientation: portrait)"
            />

            {/* Màn hình ngang */}
            <img
                src="/assets/NEN01.webp"
                alt="Wedding Hero"
                className="hero-image"
                loading="eager"
                fetchpriority="high"
                decoding="async"
            />
          </picture>

          <div className="hero-overlay-dark"></div>

          <div className="hero-content">
            <p className="hero-subtitle">
              SAVE THE DATE
            </p>
            <h1 className="hero-main-title">
              Hoàng Nhi <span>&</span> Thủy Tiên
            </h1>


            <div className="hero-divider">
            </div>
            <p className="hero-date">12 April, 2026</p>
            <FlipCountdown
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                isFinished={isFinished}/>

            <div className="hero-actions">
              <a href="#invitation" className="scroll-down-btn">
                <span className="arrow"></span>
              </a>
            </div>
          </div>

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
                  Chúng tôi vô cùng biết ơn vì đã có gia đình, bạn bè và những người thân yêu luôn đồng hành, yêu thương
                  và chúc phúc suốt hành trình vừa qua.
                </p>
                <p>
                  Trân trọng kính mời bạn đến chung vui trong <strong>Lễ Thành Hôn</strong> của chúng tôi, để cùng chia
                  sẻ khoảnh khắc đặc biệt khi chúng tôi bắt đầu một chương mới của cuộc đời.
                </p>
              </div>

              {/* RIGHT – IMAGE */}
              <div className="couple-section">
                <div className="couple-grid">

                  <div className="person-card">
                    <div className="person-image">
                      <LazyImage
                          src="/assets/T.webp"
                          alt="Cô dâu"
                      />
                    </div>
                    <h3>Thủy Tiên</h3>
                    <p>Xin chảo! Mình là cô dâu. Mình thích cá.</p>
                  </div>

                  <div className="person-card">
                    <div className="person-image">
                      <LazyImage
                          src="/assets/N.webp" alt="Chú rể"
                      />
                    </div>
                    <h3>Hoàng Nhi</h3>
                    <p>Xin chào! Mình là chú rể. Mình thích bơi trong nước.</p>
                  </div>

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
                    Cuối tiệc sau giải giao lưu cầu lông <strong>ITKV5 Open</strong>, giữa những phút giây vội vàng,
                    chúng mình có dịp được giới thiệu với nhau đôi lời giản dị. Một cuộc gặp gỡ ngắn ngủi, mộc mạc,
                    nhưng đủ để lưu lại ấn tượng đầu tiên — nhẹ nhàng mà khó quên.
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
                    Buổi hẹn đầu tiên bắt đầu với “Làm giàu với ma” và khép lại bằng một bàn dimsum nhiều đến mức cả hai
                    chỉ biết nhìn nhau cười.
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
                    Tại <strong>"Hide Away Bistro Ben Tre"</strong> vào một ngày thật ý nghĩa, chúng tôi đã cùng nhau
                    nói ra những điều chân thành nhất từ trái tim. Và khoảnh khắc nhận được cái gật đầu đồng ý ấy đã
                    biến ngày hôm đó trở thành một dấu mốc đặc biệt — khi cả hai chính thức nắm tay nhau trên hành trình
                    tìm đến bến bờ hạnh phúc.

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
                    Một lần nữa trở lại <strong>"Hide Away Bistro Ben Tre"</strong> — vẫn là nơi quen thuộc ấy, nhưng
                    lần này là một dịp đặc biệt hơn. Đó là ngày lời cầu hôn được cất lên và nhận được cái gật đầu đồng
                    ý. Giây phút ấy, mọi cảm xúc như vỡ òa, mở ra một chặng đường mới đầy yêu thương.
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
                We come to love not by finding a perfect person but by learning to see an imperfect person perfectly
              </p>
            </div>
            <div className="gallery-grid-3x2">
              <div className="gallery-item">
                <LazyImage
                    alt="album01"
                    src="/assets/AB01.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <LazyImage
                    alt="album01"
                    src="/assets/AB02.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <LazyImage
                    alt="album03"
                    src="/assets/AB03.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <LazyImage
                    alt="album04"
                    src="/assets/AB04.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <LazyImage
                    alt="album05"
                    src="/assets/AB05.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    className="gallery-image"
                />
                <div className="gallery-caption-overlay">
                  <p className="section-content"></p>
                </div>
              </div>
              <div className="gallery-item">
                <LazyImage
                    alt="album06"
                    src="/assets/AB06.webp?auto=compress&amp;cs=tinysrgb&amp;w=1500"
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
          <div className="wedding-info-wrapper">

            {/* HÀNG 1 */}
            <div className="wedding-info-row">

              <div className="info-content">
                <h3 className="info-title">Nhà Cô Dâu</h3>

                <p className="info-time">Thứ Bảy, 11/04/2026</p>
                <p className="info-time">24 tháng 02 năm Bính Ngọ</p>
                <p className="info-address">
                  Tư gia nhà gái, Mỏ Cày Nam, Bến Tre
                </p>

                <a
                    href="https://www.google.com/maps/place/10%C2%B002'49.7%22N+106%C2%B022'12.4%22E/@10.047139,106.370111,1110m/data=!3m1!1e3!4m4!3m3!8m2!3d10.0471389!4d106.3701111?hl=vi&entry=ttu&g_ep=EgoyMDI2MDMwMS4xIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noreferrer"
                    className="info-button"
                >
                  Chỉ Đường
                </a>
              </div>

              <div className="info-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1869.6813071755787!2d106.37011109999999!3d10.0471389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDAyJzQ5LjciTiAxMDbCsDIyJzEyLjQiRQ!5e1!3m2!1svi!2s!4v1771916910470!5m2!1svi!2s"
                    loading="lazy"
                    title="Map Bride"
                ></iframe>
              </div>

            </div>

            {/* HÀNG 2 */}
            <div className="wedding-info-row reverse">

              <div className="info-content">
                <h3 className="info-title">Nhà Chú Rể</h3>

                <p className="info-time">Chủ Nhật, 12/04/2026</p>
                <p className="info-time">25 tháng 02 năm Bính Ngọ</p>
                <p className="info-address">
                  Thị trấn Búng Tàu, Phụng Hiệp, Hậu Giang
                </p>

                <a
                    href="https://www.google.com/maps?ll=9.712528,105.778278&z=18&t=h&hl=vi&gl=US&mapclient=embed&q=9%C2%B042%2745.1%22N+105%C2%B046%2741.8%22E+9.712528,+105.778278@9.7125278,105.7782778"
                    target="_blank"
                    rel="noreferrer"
                    className="info-button"
                >
                  Chỉ Đường
                </a>
              </div>

              <div className="info-map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d935.7920007072033!2d105.7782778!3d9.712527799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwNDInNDUuMSJOIDEwNcKwNDYnNDEuOCJF!5e1!3m2!1svi!2s!4v1771916956778!5m2!1svi!2s"
                    loading="lazy"
                    title="Map Groom"
                ></iframe>
              </div>

            </div>

          </div>
        </section>
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
