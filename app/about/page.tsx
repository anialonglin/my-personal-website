import '../../styles/about.css';
import Navbar from "../../components/Navbar";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="about-section" id="about">
        <div className="bg-accents">
          <div className="accent-circle accent-1"></div>
          <div className="accent-circle accent-2"></div>
          <div className="glitch-effect"></div>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h2 className="section-heading">About Me</h2>
            <p>
              Hello, I'm a full-stack developer passionate about creating
              futuristic, immersive web experiences that push the boundaries of
              what's possible on the web.
            </p>
            <p>
              With expertise in modern JavaScript frameworks like Next.js and
              Three.js, I build applications that are not only functional but
              also visually stunning and interactive.
            </p>
            <p>
              My journey in tech started with a fascination for how digital
              experiences could transport users to different realities. Now, I
              blend cutting-edge technologies like 3D rendering and AI to
              create memorable user experiences.
            </p>

            <div className="code-block">
              <div className="code-text">
                <span className="highlight">const</span> skills = &#123;
                <br />
                &nbsp;&nbsp;frontend: [
                <span className="accent-text">'Next.js'</span>,{" "}
                <span className="accent-text">'React'</span>,{" "}
                <span className="accent-text">'Three.js (React Three Fiber)'</span>,{" "}
                <span className="accent-text">'TailwindCSS'</span>],<br />
                &nbsp;&nbsp;backend: [
                <span className="accent-text">'Node.js'</span>,{" "}
                <span className="accent-text">'Java'</span>,{" "}
                <span className="accent-text">'Python'</span>],<br />
                &nbsp;&nbsp;ai: [
                <span className="accent-text">'LLM Integration'</span>,{" "}
                <span className="accent-text">'API Development'</span>],<br />
                &nbsp;&nbsp;design: [
                <span className="accent-text">'UI/UX'</span>,{" "}
                <span className="accent-text">'3D Animation'</span>,{" "}
                <span className="accent-text">'Prototype'</span>]<br />
                &#125;;
              </div>
            </div>

            <div className="skill-tags">
              <div className="skill-tag">Next.js</div>
              <div className="skill-tag">React</div>
              <div className="skill-tag">Java</div>
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">Python</div>
              <div className="skill-tag">Scripting</div>
              <div className="skill-tag">APIs</div>
              <div className="skill-tag">3D Animation</div>
            </div>

            <div className="experience-block">
              <h3 className="section-heading" style={{ fontSize: "1.8rem" }}>
                Experience
              </h3>

              <div className="experience-item">
                <div className="experience-date">05.2024 - 08.2024</div>
                <div className="experience-role">Full Stack Enginner</div>
                <div className="experience-company">Manulife</div>
                <div className="experience-desc">
                  Leading development of immersive web applications with 3D
                  elements and AI integration.
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-date">2020 - 2023</div>
                <div className="experience-role">Frontend Developer</div>
                <div className="experience-company">Digital Horizons</div>
                <div className="experience-desc">
                  Built responsive, interactive user interfaces for enterprise
                  clients using React and Three.js.
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-date">2018 - 2020</div>
                <div className="experience-role">Web Developer</div>
                <div className="experience-company">CreativeTech Solutions</div>
                <div className="experience-desc">
                  Developed frontend solutions for e-commerce and media
                  platforms.
                </div>
              </div>
            </div>
          </div>

          <div className="about-photo">
            <div className="profile-frame">
              <img
                src="/images/AniaPic.jpg"
                alt="Developer Profile"
                className="profile-img"
              />
              <div className="profile-overlay"></div>
              <div className="profile-scan"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}