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
              Hey, I'm Ania — a software engineer with a curious mind and a love for building things that make life better.
            </p>
            <div className="code-block">
              <div className="code-text">
                <span className="highlight">const</span> skills = &#123;
                <br />
                <div style={{ marginBottom: "1rem" }}>
                  &nbsp;&nbsp;frontend: [
                  <span className="accent-text">'Next.js'</span>,{" "}
                  <span className="accent-text">'React'</span>,{" "}
                  <span className="accent-text">'Three.js (React Three Fiber)'</span>,{" "}
                  <span className="accent-text">'TypeScript'</span>,{" "}
                  <span className="accent-text">'JavaScript'</span>,{" "}
                  <span className="accent-text">'React Native'</span>,{" "}
                  <span className="accent-text">'HTML'</span>,{" "}
                  <span className="accent-text">'CSS'</span>,{" "}
                  <span className="accent-text">'TailwindCSS'</span>,{" "}
                  <span className="accent-text">'Java Swing'</span>,{" "}
                  <span className="accent-text">'SceneBuilder'</span>],
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  &nbsp;&nbsp;backend: [
                  <span className="accent-text">'Node.js'</span>,{" "}
                  <span className="accent-text">'Java'</span>,{" "}
                  <span className="accent-text">'Python'</span>,{" "}
                  <span className="accent-text">'SQL'</span>,{" "}
                  <span className="accent-text">'Bash Script'</span>,{" "}
                  <span className="accent-text">'MATLAB'</span>,{" "}
                  <span className="accent-text">'Arduino'</span>],
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  &nbsp;&nbsp;ai: [
                  <span className="accent-text">'LLM Integration'</span>,{" "}
                  <span className="accent-text">'API Development'</span>,{" "}
                  <span className="accent-text">'Machine Learning'</span>,{" "}
                  <span className="accent-text">'AI Prototyping'</span>],
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  &nbsp;&nbsp;design: [
                  <span className="accent-text">'UI/UX'</span>,{" "}
                  <span className="accent-text">'3D Animation'</span>,{" "}
                  <span className="accent-text">'Figma'</span>,{" "}
                  <span className="accent-text">'Prototype'</span>],
                </div>
                <div style={{ marginBottom: "1rem" }}>
                  &nbsp;&nbsp;devops: [
                  <span className="accent-text">'AWS'</span>,{" "}
                  <span className="accent-text">'Azure'</span>,{" "}
                  <span className="accent-text">'Git'</span>,{" "}
                  <span className="accent-text">'AutoSys'</span>],
                </div>
                &#125;;
              </div>
            </div>

            <div className="skill-tags">
              <div className="skill-tag">Next.js</div>
              <div className="skill-tag">React</div>
              <div className="skill-tag">React Native</div>
              <div className="skill-tag">Java</div>
              <div className="skill-tag">Node.js</div>
              <div className="skill-tag">Python</div>
              <div className="skill-tag">TypeScript</div>
              <div className="skill-tag">CSS</div>
              <div className="skill-tag">DevOps</div>
              <div className="skill-tag">MySQL</div>
              <div className="skill-tag">Scripting</div>
              <div className="skill-tag">APIs</div>
              <div className="skill-tag">3D Animation</div>
            </div>

            <div className="experience-block">
              <h3 className="section-heading" style={{ fontSize: "1.8rem" }}>
                Work Experience
              </h3>

              <div className="experience-item">
                <div className="experience-date">05.2024 - 08.2024</div>
                <div className="experience-role">Full Stack Software Engineer</div>
                <div className="experience-company">Manulife Financial Corporation</div>
                <div className="experience-desc">
                Led the development of the Soft Registration page for the member portal with a strong focus on accessibility and WCAG compliance. Resolved critical application errors, authored cross-platform developer setup guides, and created an accessibility compliance manual to streamline validation processes.
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-date">07.2023 - 10.2023</div>
                <div className="experience-role">HAIIvVE Intern</div>
                <div className="experience-company">Risk and Insurance Studies Centre</div>
                <div className="experience-desc">
                During my internship at the Risk and Insurance Studies Centre, we partnered with CIBC to address ESG-related challenges in venture capital. I conducted in-depth research on sustainability risks and trends, and developed a web-based demo to showcase insights and potential solutions. 
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-date">01.2023 – 08.2023</div>
                <div className="experience-role">Production Application Support Analyst</div>
                <div className="experience-company">Canadian Imperial Bank of Commerce</div>
                <div className="experience-desc">
                Recognized twice as an Exceptional Student for providing production support for business-critical applications. Used tools like Azure Pipelines and AutoSys to manage deployments, automated recurring tasks, and collaborated across teams to reduce incident resolution time and improve reliability.
                </div>
              </div>

              <div className="experience-item">
                <div className="experience-date">09.2022 – 12.2022</div>
                <div className="experience-role">Associate Software Developer</div>
                <div className="experience-company">Sun Life Financial</div>
                <div className="experience-desc">
                Built web-based prototypes and solutions for internal teams using React, AWS, and other tools. Developed a pharmacy locator tool, contributed to proof-of-concept projects, and practiced Agile development as a Scrum Master during sprint planning, reviews, and retrospectives.
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