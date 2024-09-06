"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Twitter, ArrowUp, Menu } from "lucide-react";
import Link from "next/link";
import { SectionWrapper } from "./section-wrapper";
import profile from "@/data/profile.json";
import { SocialButtons } from "./social-buttons";
import { ThemeToggle } from "./theme-toggle";

export function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const currentYear = new Date().getFullYear();

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

  const NavItems = () => {
    const navClass = `transition-colors hover:text-foreground/80 ${
      activeSection === "home" ? "text-foreground" : "text-foreground/60"
    }`;
    return (
      <>
        <Link className={navClass} href="#home">
          Home
        </Link>
        <Link className={navClass} href="#about">
          About
        </Link>
        <Link className={navClass} href="#projects">
          Projects
        </Link>
        <Link className={navClass} href="#experience">
          Experience
        </Link>
        <Link className={navClass} href="#skills">
          Skills
        </Link>
        <Link className={navClass} href="#certifications">
          Certifications
        </Link>
        <Link className={navClass} href="#contact">
          Contact
        </Link>
      </>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900">
      <header className="sticky top-0 z-50 w-full px-4 md:px-6 lg:px-8 xl:px-10 border-b bg-background/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:supports-[backdrop-filter]:bg-gray-900/60">
        {" "}
        <div className="w-full flex h-14 justify-stretch items-center">
          <div className="w-full max-w-screen-lg mx-auto hidden lg:flex justify-between">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">
                {profile.name}
              </span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium mr-auto">
              <NavItems />
            </nav>
            <div className="flex gap-x-4">
              <SocialButtons />
              <ThemeToggle />
            </div>
          </div>
          <div className="flex w-full lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="mr-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px]">
                <div className="h-full flex flex-col">
                  <div className="flex flex-col space-y-4 mt-4">
                    <NavItems />
                  </div>
                  <div className="flex items-center justify-center mt-auto">
                    <SocialButtons />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            <div className="flex w-full justify-between">
              <Link className="flex items-center" href="/">
                <span className="font-bold">{profile.name}</span>
              </Link>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      <main className="flex-1 px-4">
        <SectionWrapper id="home">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none 2xl:text-7xl">
                {profile.name}
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl 2xl:max-w-[800px] 2xl:text-2xl dark:text-gray-400">
                {profile.headline}
              </p>
            </div>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl 2xl:max-w-[800px] 2xl:text-2xl dark:text-gray-400">
              {profile.subheading}
            </p>
            <div className="space-x-4">
              <Button className="dark:border-gray-700 dark:text-gray-900">
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button
                variant="outline"
                className="dark:border-gray-700 dark:text-gray-200"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </SectionWrapper>
        <SectionWrapper id="about" heading="About Me">
          <Card className="2xl:text-xl dark:bg-gray-800">
            <CardContent className="space-y-4 px-4 py-8">
              {profile.about.paragraphs.map((para, index) => (
                <p key={index}>{para}</p>
              ))}
            </CardContent>
          </Card>
        </SectionWrapper>
        <SectionWrapper
          id="projects"
          heading="Projects"
          className="bg-gray-100 dark:bg-gray-800"
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {profile.projects.map((project, index) => (
              <Card key={index} className="flex flex-col h-[400px]">
                <CardHeader>
                  <CardTitle>{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-gray-500 mb-4 2xl:text-xl dark:text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardContent className="flex-grow" />
                <CardFooter className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="dark:bg-gray-700 dark:text-gray-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </CardFooter>
              </Card>
            ))}
          </div>
        </SectionWrapper>
        <SectionWrapper id="experience" heading="Experience">
          <Card>
            <CardContent className="pt-6">
              {profile.experiences.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-lg 2xl:text-2xl font-semibold">
                    {exp.company}
                  </h3>
                  <p className="text-sm 2xl:text-xl text-gray-500 dark:text-gray-400">
                    {exp.role} | {exp.period}
                  </p>
                  <ul className="list-disc list-inside mt-2">
                    {exp.projects.map((project, pIndex) => (
                      <li key={pIndex} className="text-sm 2xl:text-xl">
                        {project}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionWrapper>
        <SectionWrapper
          id="skills"
          heading="Skills"
          className="bg-gray-100 dark:bg-gray-800"
        >
          <Card>
            <CardContent className="pt-6">
              {Object.entries(profile.skills).map(([category, skillList]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg 2xl:text-2xl font-semibold mb-2">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="2xl:text-lg"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionWrapper>
        <SectionWrapper id="certifications" heading="Certifications">
          <Card>
            <CardContent className="pt-6">
              {profile.certifications.map((cert, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg 2xl:text-xl font-semibold">
                    {cert.name}
                  </h3>
                  <p className="text-sm 2xl:text-lg text-gray-500 dark:text-gray-400">
                    {cert.issuer} | {cert.date}
                  </p>
                  <Link
                    href={cert.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm 2xl:text-lg text-blue-500 hover:underline"
                  >
                    View Certificate
                  </Link>
                </div>
              ))}
            </CardContent>
          </Card>
        </SectionWrapper>
        <SectionWrapper
          id="contact"
          heading="Contact Me"
          className="bg-gray-100 dark:bg-gray-800"
        >
          <Card>
            <CardHeader>
              <CardTitle>
                Get in touch for opportunities or collaborations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <Link
                  href={`mailto:${profile.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {profile.email}
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <Link
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {profile.linkedin.split("://")[1]}
                </Link>
              </div>
              {!!profile.twitter && (
                <div className="flex items-center space-x-2">
                  <Twitter className="h-5 w-5" />
                  <Link
                    href={profile.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {profile.twitter.split("://")[1]}
                  </Link>
                </div>
              )}
              {profile.whatsapp && (
                <Button>
                  <Link
                    href={profile.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp: Click to chat
                  </Link>
                </Button>
              )}
            </CardContent>
          </Card>
        </SectionWrapper>
      </main>
      <footer className="border-t dark:border-gray-800">
        <div className="container flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 lg:px-8 xl:px-10">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
            ©{`${currentYear} ${profile.name}`}. All rights reserved.
          </p>
          <SocialButtons />
        </div>
      </footer>
      {showScrollTop && (
        <Button
          className="fixed bottom-4 right-4 rounded-full p-2 dark:bg-gray-700 dark:text-gray-200"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
}
