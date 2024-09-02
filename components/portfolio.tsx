"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Twitter, ArrowUp } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });

      setShowScrollTop(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.location.href = "#";
  };

  const skills = {
    Frontend: [
      "TypeScript",
      "React.js",
      "Next.js",
      "CSS",
      "SASS/SCSS",
      "HTML",
      "JavaScript",
      "Bootstrap",
      "Tailwind",
      "jQuery",
      "Material-UI",
    ],
    Backend: [
      "Node.js",
      "Express.js",
      "Prisma",
      "Python",
      "Django",
      "FastAPI",
      "MySQL",
      "PostgreSQL",
    ],
    API: ["REST", "GraphQL", "WebSocket"],
    "Version Control": ["Git", "GitHub", "GitLab"],
    Deployment: ["AWS", "Netlify", "Vercel"],
  };

  const experiences = [
    {
      company: "Freelance",
      role: "Full Stack Developer",
      period: "Mar 2024 - Present",
      projects: [
        "Developed an AI-powered newsletter application using TypeScript, Next.js, and TailwindCSS.",
        "Provided technical support for the Botgo chatbot application.",
      ],
    },
    {
      company: "Globtier Infotech Pvt. Ltd.",
      role: "Full Stack Developer",
      period: "Apr 2022 - Feb 2024",
      projects: [
        "Developed an AI-powered chatbot platform (Botgo) from scratch.",
        "Built a client dashboard for chatbot customization.",
        "Led a team of 4 junior frontend developers.",
      ],
    },
    {
      company: "Magnit",
      role: "React Developer",
      period: "Aug 2021 - Apr 2022",
      projects: [
        "Developed and maintained a web application for the automotive sector.",
        "Worked on a SaaS-based Hospital/Clinic Management Software.",
      ],
    },
  ];

  const projects = [
    {
      name: "Botgo (AI-powered Chatbot Platform)",
      description:
        "Developed a comprehensive AI-powered chatbot platform from scratch, enabling businesses to create and customize chatbots for various use cases.",
      technologies: ["TypeScript", "React", "Node.js", "Express", "MongoDB"],
    },
    {
      name: "Dashboard for Botgo",
      description:
        "Built an intuitive client dashboard for Botgo, allowing users to customize their chatbots, view analytics, and manage conversations.",
      technologies: ["React", "Redux", "Material-UI", "Chart.js"],
    },
    {
      name: "AI-powered Newsletter Application",
      description:
        "Developed a cutting-edge newsletter application that uses AI to curate and personalize content for subscribers.",
      technologies: ["TypeScript", "Next.js", "TailwindCSS", "OpenAI API"],
    },
  ];

  const certifications = [
    {
      name: "Professional Certificate in Computer Science for Web Programming",
      issuer: "EdX + Harvard University Online",
      date: "July 2024",
      url: "#",
    },
    {
      name: "CS50's Web Programming with Python and JavaScript",
      issuer: "Harvard University Online",
      date: "June 2024",
      url: "#",
    },
    {
      name: "CS50's Introduction to Computer Science",
      issuer: "Harvard University Online",
      date: "April 2024",
      url: "#",
    },
    {
      name: "The Complete 2021 Web Development Bootcamp",
      issuer: "Udemy",
      date: "September 2021",
      url: "#",
    },
    {
      name: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "August 2021",
      url: "#",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full px-4 md:px-6 lg:px-8 xl:px-10 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                Abhirup Basu
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === "home"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                href="#home"
              >
                Home
              </Link>
              <Link
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === "about"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                href="#about"
              >
                About
              </Link>
              <Link
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === "projects"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                href="#projects"
              >
                Projects
              </Link>
              <Link
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === "experience"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                href="#experience"
              >
                Experience
              </Link>
              <Link
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === "skills"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                href="#skills"
              >
                Skills
              </Link>
              <Link
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === "certifications"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                href="#certifications"
              >
                Certifications
              </Link>
              <Link
                className={`transition-colors hover:text-foreground/80 ${
                  activeSection === "contact"
                    ? "text-foreground"
                    : "text-foreground/60"
                }`}
                href="#contact"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <SectionWrapper id="home">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Abhirup Basu
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Full Stack Engineer | (React + Node + Next).js
              </p>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Self-taught software engineer with 3+ years of expertise in
              TypeScript, React.js, and Next.js, dedicated to crafting
              user-focused web applications.
            </p>
            <div className="space-x-4">
              <Button>
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button variant="outline">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper id="about">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            About Me
          </h2>
          <Card>
            <CardContent className="space-y-4 pt-6">
              <p>
                My journey into web development is unique, starting from a
                background in Applied Geology. During my M.Sc. thesis on
                GIS-based Satellite Image Processing, I discovered my passion
                for technology and programming.
              </p>
              <p>
                This spark led me to transition into web development, where
                I&apos;ve honed my skills in creating user-centric web
                experiences. My geological background gives me a unique
                perspective on problem-solving and data visualization in web
                applications.
              </p>
              <p>
                Currently, I work as a Freelance Full Stack Developer, focusing
                on AI-powered newsletter applications and mobile-responsive
                websites. My goal is to create intuitive, efficient, and
                scalable web solutions that make a real difference for users and
                businesses alike.
              </p>
            </CardContent>
          </Card>
        </SectionWrapper>
        <SectionWrapper id="skills" className="bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Skills
          </h2>
          <Card>
            <CardContent className="pt-6">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionWrapper>
        <SectionWrapper id="experience">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Experience
          </h2>
          <Card>
            <CardContent className="pt-6">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-500">
                    {exp.role} | {exp.period}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.projects.map((project, pIndex) => (
                      <li key={pIndex} className="text-sm">
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionWrapper>
        <SectionWrapper id="projects" className="bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper id="certifications">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Certifications
          </h2>
          <Card>
            <CardContent className="pt-6">
              {certifications.map((cert, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="text-sm text-gray-500">
                    {cert.issuer} | {cert.date}
                  </p>
                  <Link
                    href={cert.url}
                    className="text-sm text-blue-500 hover:underline"
                  >
                    View Certificate
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionWrapper>
        <SectionWrapper id="contact" className="bg-gray-100 dark:bg-gray-800">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
            Contact Me
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>
                Get in touch for opportunities or collaborations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>basu.abhirup27@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <Link
                  href="https://linkedin.com/in/basu-abhirup"
                  className="hover:underline"
                >
                  linkedin.com/in/basu-abhirup
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Github className="h-5 w-5" />
                <Link
                  href="https://github.com/basuabhirup"
                  className="hover:underline"
                >
                  github.com/basuabhirup
                </Link>
              </div>
              <Button className="w-full">
                <Link href="https://wa.me/yourphonenumber">
                  WhatsApp: Click to chat
                </Link>
              </Button>
            </CardContent>
          </Card>
        </SectionWrapper>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 lg:px-8 xl:px-10">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © 2024 Abhirup Basu. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Link href="https://linkedin.com/in/basu-abhirup">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://github.com/basuabhirup">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="#">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
      {showScrollTop && (
        <Button
          className="fixed bottom-4 right-4 rounded-full p-2"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
