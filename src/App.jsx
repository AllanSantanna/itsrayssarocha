import Header, { Logo } from "./components/Header.jsx";
import ContactButton from "./components/ContactButton.jsx";
import Icon from "./components/Icon.jsx";
import Methodology from "./components/Methodology.jsx";
import NewZealandBackdrop from "./components/NewZealandBackdrop.jsx";
import Faq from "./components/Faq.jsx";
import { bonuses, testimonials, tools } from "./data.js";
import portrait from "../assets/img/f3bcd880-e318-41a5-a403-41a42e34a1f6.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="availability">
            <span />
            AULAS PARTICULARES ONLINE
          </span>
          <h1>
            Seu inglês.
            <br />
            Seu ritmo.
            <br />
            <em>Seu mundo.</em>
            <span className="heading-spark" aria-hidden="true">
              ✳
            </span>
          </h1>
          <p>
            Aprender inglês pode ser mais leve.
            <br className="desktop-break" /> Aulas com conexão, conversa e
            espaço para ser você.
          </p>
          <div className="hero-actions">
            <ContactButton whatsappIcon>Quero aprender inglês</ContactButton>
            <a className="text-link" href="#methodology">
              Conheça as aulas <Icon name="arrow" size={18} />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-line" />
            <span>
              Para jovens e adultos.
              <br />
              <strong>Do seu jeito, desde o começo.</strong>
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <span className="hello-note">
            hello, you!
            <svg viewBox="0 0 110 45" fill="none" aria-hidden="true">
              <path
                d="M3 3c20 40 56 37 96 12m-24-1 27-1-13 23"
                stroke="currentColor"
                strokeWidth="1.6"
              />
            </svg>
          </span>
          <div className="portrait-frame">
            <img
              src={portrait}
              alt="Rayssa Rocha, sua professora de inglês, sorrindo"
              width="1080"
              height="1020"
              fetchPriority="high"
            />
          </div>
          <span className="visual-spark" aria-hidden="true">
            ✳
          </span>
          <div className="teacher-tag">
            <span className="tag-icon">
              <Icon name="chat" size={26} />
            </span>
            <span>
              <strong>Rayssa Rocha</strong>
              <small>Your English teacher ♡</small>
            </span>
          </div>
          <span className="visual-caption">
            A LITTLE ENGLISH. A LOT OF POSSIBILITIES.
          </span>
        </div>
      </div>
      <div className="hero-bottom container">
        <span>MAIS CONEXÃO. MENOS COMPLICAÇÃO.</span>
        <a href="#about" aria-label="Conheça a teacher Rayssa">
          <span>Comece por aqui</span>
          <span className="down-arrow">↓</span>
        </a>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="section about">
      <NewZealandBackdrop />
      <div className="container about-grid">
        <div className="about-scene" aria-hidden="true" />
        <div className="about-copy">
          <span className="eyebrow">NICE TO MEET YOU</span>
          <h2>
            Oi, eu sou
            <br />a <em>Rayssa.</em>
          </h2>
          <p className="lead">
            Atuo como professora de inglês desde 2018, com experiência em aulas
            online para jovens e adultos. Sou formada em Hotelaria pela UFPE,
            pós-graduada em Ensino de Língua Inglesa pela Estácio e atualmente
            curso Letras – Inglês.
          </p>
          <p>
            Também morei por seis meses na Nova Zelândia, onde pude ampliar
            minha vivência com a língua inglesa e conhecer diferentes aspectos
            da cultura local.
          </p>
          <p>
            Acredito que aprender inglês deve ser uma experiência leve e
            significativa. Por isso, procuro adaptar minhas aulas às
            necessidades e ao ritmo de cada aluno, valorizando cada etapa do
            aprendizado.
          </p>
          <div className="about-facts">
            <span>
              <Icon name="globe" size={19} />
              Vivência na Nova Zelândia
            </span>
            <span>
              <Icon name="book" size={19} />
              Ensinando desde 2018
            </span>
          </div>
          <a className="text-link" href="#contact">
            Vamos nos conhecer? <Icon name="arrow" size={19} />
          </a>
        </div>
      </div>
    </section>
  );
}

function Tools() {
  return (
    <section id="tools" className="section tools-section">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <span className="eyebrow">A LITTLE HELP ALONG THE WAY</span>
            <h2>
              As ferramentas mudam.
              <br />A conexão <em>fica.</em>
            </h2>
          </div>
          <p>
            Da música ao jogo, cada recurso tem um propósito: trazer o inglês
            para perto de você.
          </p>
        </div>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <article className="tool" key={tool.title}>
              <div className="tool-top">
                <span className="tool-icon">
                  <Icon name={tool.icon} size={28} />
                </span>
                <span className="tool-number">0{index + 1}</span>
              </div>
              <h3>{tool.title}</h3>
              <p>{tool.text}</p>
              <span className="tool-names">{tool.names}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Bonuses() {
  return (
    <section id="bonus" className="bonus-section">
      <div className="container bonus-grid">
        <div className="bonus-intro">
          <span className="eyebrow">AND THERE’S MORE</span>
          <h2>
            O aprendizado
            <br />
            continua <em>com você.</em>
          </h2>
          <p>
            Além dos nossos encontros, você tem recursos para seguir praticando.
          </p>
          <span className="bonus-doodle" aria-hidden="true">
            ✳
          </span>
        </div>
        <div className="bonus-list">
          {bonuses.map((bonus) => (
            <article className="bonus-item" key={bonus.title}>
              <span className="bonus-icon">
                <Icon name={bonus.icon} size={24} />
              </span>
              <div>
                <h3>{bonus.title}</h3>
                <p>{bonus.text}</p>
              </div>
              <Icon name="check" size={18} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">WORDS THAT MAKE MY DAY</span>
          <h2>
            Quem aprende tem
            <br />
            muito para <em>contar.</em>
          </h2>
          <p>Um pouquinho do carinho de quem já dividiu essa jornada comigo.</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((item) => (
            <figure className="testimonial" key={item.name}>
              <span className="quote-mark" aria-hidden="true">
                “
              </span>
              <blockquote>{item.text}</blockquote>
              <figcaption>
                <img
                  src={item.image}
                  alt=""
                  width="44"
                  height="44"
                  loading="lazy"
                />
                <span>
                  <strong>{item.name}</strong>
                  <small>Aluno(a) da teacher Rayssa</small>
                </span>
                <span className="testimonial-heart" aria-hidden="true">
                  <Icon name="heart" size={18} />
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner">
        <span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
        <h2>
          Seu próximo “hello”
          <br />
          pode ser <em>o começo.</em>
        </h2>
        <p>
          Vamos conversar sobre seus objetivos e encontrar
          <br className="desktop-break" /> um caminho de aprendizado que faça
          sentido para você?
        </p>
        <ContactButton className="whatsapp-button contact-cta" whatsappIcon>
          Vamos conversar no WhatsApp
        </ContactButton>
        <a className="phone-link" href="tel:+5581988366734">
          (81) 98836-6734
        </a>
        <span className="contact-spark" aria-hidden="true">
          ✳
        </span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <Logo />
          <p>Inglês com leveza. Conexões de verdade.</p>
        </div>
        <div className="footer-socials">
          <a
            className="social-link social-instagram"
            href="https://www.instagram.com/itsrayssarocha/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">
              <Icon name="instagram" size={21} />
            </span>
            <span>Instagram</span>
            <Icon className="social-external" name="diagonal" size={15} />
          </a>
          <a
            className="social-link social-tiktok"
            href="https://www.tiktok.com/@itsrayssarocha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="social-icon">
              <Icon name="tiktok" size={21} />
            </span>
            <span>TikTok</span>
            <Icon className="social-external" name="diagonal" size={15} />
          </a>
        </div>
        <a className="back-to-top" href="#home" aria-label="Voltar ao início">
          ↑
        </a>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ItsRayssa Rocha</span>
        <span>Feito para conectar mundos. ♡</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Methodology />
        <Tools />
        <Bonuses />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
