import Image from "next/image";
import Navbar from "../../components/Navbar";

const AboutPage = () => {
  return (
    <div className="bg-background text-text min-h-screen flex flex-col">
      {/* Reused Navbar */}
      <Navbar />

      {/* About Section */}
      <section id="about" className="relative flex flex-col items-center pt-32 px-8">
        {/* Background Accents */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute w-[500px] h-[500px] bg-primary rounded-full blur-[80px] opacity-15 -top-24 -left-24"></div>
          <div className="absolute w-[400px] h-[400px] bg-accent rounded-full blur-[80px] opacity-15 -bottom-24 -right-24"></div>
        </div>

        <div className="relative z-10 max-w-6xl flex flex-wrap gap-12">
          {/* About Text */}
          <div className="flex-1 min-w-[300px]">
            <h2 className="text-4xl font-bold mb-6 relative inline-block">
              About Me
              <span className="absolute bottom-[-10px] left-0 w-1/2 h-[4px] bg-gradient-to-r from-primary to-accent"></span>
            </h2>
            <p className="mb-4 text-lg opacity-90">
              Hello, I'm a full-stack developer passionate about creating futuristic, immersive web experiences that push the boundaries of what's possible on the web.
            </p>
            <p className="mb-4 text-lg opacity-90">
              With expertise in modern JavaScript frameworks like Next.js and Three.js, I build applications that are not only functional but also visually stunning and interactive.
            </p>
            <p className="mb-6 text-lg opacity-90">
              My journey in tech started with a fascination for how digital experiences could transport users to different realities. Now, I blend cutting-edge technologies like 3D rendering and AI to create memorable user experiences.
            </p>

            {/* Code Block */}
            <div className="bg-secondary/50 border-l-4 border-primary rounded-md p-6 mb-6">
              <p className="text-primary opacity-70 mb-4">// SKILLS & EXPERIENCE</p>
              <pre className="text-sm font-mono text-text opacity-80">
                {`const skills = {
  frontend: ['Next.js', 'React', 'Three.js', 'TailwindCSS'],
  backend: ['Node.js', 'Express', 'MongoDB'],
  ai: ['LLM Integration', 'API Development'],
  design: ['UI/UX', '3D Modeling', 'Animation']
};

function createDigitalExperience() {
  return skills.frontend.map(tech => tech + skills.backend + skills.ai);
}`}
              </pre>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-4">
              {[
                "Next.js",
                "Three.js",
                "React",
                "Node.js",
                "TailwindCSS",
                "Express",
                "LLM APIs",
                "3D Design",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 border border-primary rounded text-primary text-sm font-medium hover:bg-primary hover:text-background transition-all"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience */}
            <div className="mt-12 pt-8 border-t border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Experience</h3>
              {[
                {
                  date: "2023 - PRESENT",
                  role: "Senior Full Stack Developer",
                  company: "TechFuture Labs",
                  desc: "Leading development of immersive web applications with 3D elements and AI integration.",
                },
                {
                  date: "2020 - 2023",
                  role: "Frontend Developer",
                  company: "Digital Horizons",
                  desc: "Built responsive, interactive user interfaces for enterprise clients using React and Three.js.",
                },
                {
                  date: "2018 - 2020",
                  role: "Web Developer",
                  company: "CreativeTech Solutions",
                  desc: "Developed frontend solutions for e-commerce and media platforms.",
                },
              ].map((exp, index) => (
                <div key={index} className="mb-8">
                  <p className="text-primary text-sm font-semibold mb-1">{exp.date}</p>
                  <p className="text-lg font-semibold mb-1">{exp.role}</p>
                  <p className="text-sm opacity-80 mb-1">{exp.company}</p>
                  <p className="text-sm opacity-70">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About Photo */}
          <div className="flex-1 min-w-[300px] flex justify-center items-center relative">
            <div className="relative w-[350px] h-[450px] border-2 border-primary overflow-hidden flex justify-center items-center">
              <Image
                src="/api/placeholder/400/500"
                alt="Developer Profile"
                width={350}
                height={450}
                className="object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 mix-blend-overlay"></div>
              <div className="absolute inset-0 border-2 border-primary/50 pointer-events-none"></div>
              <div className="absolute w-full h-[4px] bg-gradient-to-r from-transparent via-primary to-transparent animate-[profile-scan_3s_infinite_linear]"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;