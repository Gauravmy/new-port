'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Users, Award, BookOpen, Target, MessageSquare, Sun, Moon } from 'lucide-react';

// Import custom components
import AITechBackground from '@/components/AITechBackground';
import SimpleHeroSection from '@/components/SimpleHeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import DSAAchievementsSection from '@/components/DSAAchievementsSection';
import HackathonsEventsSection from '@/components/HackathonsEventsSection';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDark, setIsDark] = useState(true);

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'dsa-achievements', 'hackathons-events', 'opensource', 'leadership', 'certifications', 'skills', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const projects = [
    {
      title: 'Grace – AI Healthcare Assistant',
      description: 'Python-based assistant using OpenCV for gesture control and voice commands for healthcare automation.',
      tech: ['Python', 'OpenCV', 'AI/ML', 'Healthcare'],
      github: 'https://github.com/Gauravmy'
    },
    {
      title: 'AgriMarket',
      description: 'Platform connecting farmers and buyers with real-time pricing and secure transactions.',
      tech: ['Web Development', 'Real-time', 'E-commerce'],
      github: 'https://github.com/Gauravmy'
    },
    {
      title: 'AI Demand Forecasting',
      description: 'Machine learning models for forecasting demand in logistics and supply chain sectors.',
      tech: ['Machine Learning', 'Python', 'TensorFlow', 'Logistics'],
      github: 'https://github.com/Gauravmy'
    },
    {
      title: 'BioPay System',
      description: 'Facial-recognition based contactless biometric payment system using Firebase and TypeScript.',
      tech: ['TypeScript', 'Firebase', 'Computer Vision', 'Fintech'],
      github: 'https://github.com/Gauravmy'
    },
    {
      title: 'Portfolio Website',
      description: 'Developed and deployed personal portfolio using HTML, CSS, JavaScript.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      github: 'https://github.com/Gauravmy'
    }
  ];

  const openSourceContributions = [
    {
      name: 'Hyperswitch',
      description: 'Enterprise-grade open-source payment processing system',
      link: 'https://github.com/juspay/hyperswitch'
    },
    {
      name: 'llm-app',
      description: 'RAG pipeline and LLM application framework',
      link: 'https://github.com/pathwaycom/llm-app'
    },
    {
      name: 'pathway',
      description: 'Stream processing and real-time data analytics',
      link: 'https://github.com/pathwaycom/pathway'
    },
    {
      name: 'Walmart Sparkathon',
      description: 'Contributed to Walmart Sparkathon projects and idea banks',
      link: 'https://github.com/Gauravmy'
    }
  ];

  const leadershipExperience = [
    {
      role: 'Cofounder',
      organization: 'AI Digitals',
      description: 'Led the creation of a student-focused tech hub promoting AI, DSA, and innovation. Mentored 300+ students, hosted 15+ events/workshops.',
      period: '2023 - Present'
    },
    {
      role: 'Community Leader',
      organization: 'Unstoppable Coders',
      description: 'Fostering collaborative learning through live sessions, mentorship programs, and national hackathon prep.',
      period: '2023 - Present'
    },
    {
      role: 'Vice Secretary',
      organization: 'Technical Club, Sanskriti University',
      description: 'Organized intercollege tech events, managed speaker sessions, and promoted coding culture in the university.',
      period: '2023 - Present'
    }
  ];

  const certifications = [
    {
      name: 'Machine Learning',
      issuer: 'Coursera - Andrew Ng',
      year: '2023'
    },
    {
      name: 'AI Fundamentals',
      issuer: 'Microsoft',
      year: '2023'
    },
    {
      name: 'Python for Data Science',
      issuer: 'Great Learning',
      year: '2023'
    },
    {
      name: 'Web Development',
      issuer: 'HTML, CSS, JavaScript Projects',
      year: '2023'
    }
  ];

  const skills = {
    languages: ['Python', 'Java', 'C', 'C++', 'JavaScript', 'TypeScript'],
    webDevelopment: ['HTML', 'CSS', 'React.js', 'Firebase', 'GitHub Pages'],
    aiMlLibraries: ['TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'OpenCV'],
    toolsPlatforms: ['GitHub', 'VS Code', 'Jupyter', 'Firebase', 'Linux', 'Google Cloud'],
    softSkills: ['Communication', 'Team Management', 'Leadership', 'Public Speaking']
  };

  const achievements = [
    {
      title: 'Hackathon Finalist',
      description: 'Finalist in 5+ national-level hackathons including Flipkart GRiD, Smart India Hackathon, Walmart Sparkathon',
      icon: <Target className="w-6 h-6" />
    },
    {
      title: 'Coding Excellence',
      description: 'Solved 1000+ coding questions (700+ on LeetCode, 300+ on GFG)',
      icon: <Code className="w-6 h-6" />
    },
    {
      title: 'GitHub Contributions',
      description: 'Maintaining 40+ repositories related to AI, automation, and full-stack tools',
      icon: <Github className="w-6 h-6" />
    },
    {
      title: 'Community Growth',
      description: 'Mentored 300+ peers through AI Digitals and Unstoppable Coders, helping them grow in DSA and AI',
      icon: <Users className="w-6 h-6" />
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <AITechBackground />
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 ${isDark ? 'bg-gray-800/90 backdrop-blur-md' : 'bg-white/90 backdrop-blur-md'} shadow-lg border-b border-gray-700/30`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Gaurav Dhakad
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['About', 'Projects', 'DSA', 'Hackathons', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', ''))}
                  className={`hover:text-cyan-400 transition-colors relative ${activeSection === item.toLowerCase().replace(' ', '') ? 'text-cyan-400 font-semibold' : ''}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                  {activeSection === item.toLowerCase().replace(' ', '') && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400"
                      layoutId="activeSection"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={toggleTheme}
                  variant="outline"
                  size="sm"
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
              </motion.div>
              <div className="md:hidden">
                <Button variant="outline" size="sm" className="border-purple-400 text-purple-400">
                  ☰
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Parallax */}
      <motion.section
        id="hero"
        style={{ y: heroY, opacity: heroOpacity }}
        className="h-screen w-screen flex items-center justify-center relative"
      >
        <SimpleHeroSection />
      </motion.section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4 relative">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <ProjectsSection />
      </section>

      {/* DSA Achievements Section */}
      <section id="dsa-achievements" className="py-20 px-4 relative">
        <DSAAchievementsSection />
      </section>

      {/* Hackathons & Events Section */}
      <section id="hackathons-events" className="py-20 px-4 relative">
        <HackathonsEventsSection />
      </section>

      {/* Open Source Contributions Section */}
      <section id="opensource" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Open Source Contributions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {openSourceContributions.map((contribution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-green-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between text-white group-hover:text-green-400 transition-colors">
                      <span>{contribution.name}</span>
                      <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </CardTitle>
                    <CardDescription className="text-gray-400">{contribution.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(contribution.link, '_blank')}
                      className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300"
                    >
                      View Project
                    </motion.button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Experience Section */}
      <section id="leadership" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Leadership & Experience
          </h2>
          <div className="space-y-8">
            {leadershipExperience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-purple-400 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl text-white">{exp.role}</CardTitle>
                        <CardDescription className="text-lg font-semibold text-purple-400">{exp.organization}</CardDescription>
                        <Badge variant="outline" className="mt-2 border-purple-400 text-purple-300">{exp.period}</Badge>
                      </div>
                      <Users className="h-8 w-8 text-purple-400" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{exp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="text-center bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-400 transition-all duration-300">
                  <CardHeader>
                    <BookOpen className="h-12 w-12 mx-auto mb-4 text-blue-400" />
                    <CardTitle className="text-lg text-white">{cert.name}</CardTitle>
                    <CardDescription className="text-blue-300">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-400/30">
                      {cert.year}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, skillList], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-orange-400 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="capitalize text-white">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill, skillIndex) => (
                        <motion.div
                          key={skillIndex}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Badge variant="outline" className="border-orange-400/50 text-orange-300 hover:bg-orange-400 hover:text-black transition-all duration-300">
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 px-4 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-yellow-400 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="text-yellow-400 group-hover:text-yellow-500 transition-colors">
                        {achievement.icon}
                      </div>
                      <div>
                        <CardTitle className="text-white group-hover:text-yellow-400 transition-colors">
                          {achievement.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {achievement.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-white">Let's Connect</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5 text-cyan-400" />
                  <span>g4777636@gmail.com</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone className="h-5 w-5 text-purple-400" />
                  <span>+91-7668759906</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://linkedin.com/in/gaurav-dhakad', '_blank')}
                >
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <span>linkedin.com/in/gaurav-dhakad</span>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://github.com/Gauravmy', '_blank')}
                >
                  <Github className="h-5 w-5 text-green-400" />
                  <span>github.com/Gauravmy</span>
                </motion.div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Send a Message</CardTitle>
                  <CardDescription className="text-gray-400">
                    I'd love to hear from you!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Name</Label>
                      <Input id="name" placeholder="Your Name" className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400" />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400" />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-gray-300">Message</Label>
                      <Textarea id="message" placeholder="Your message..." rows={4} className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400" />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${isDark ? 'bg-gray-900' : 'bg-gray-900'} text-white text-center border-t border-gray-800`}>
        <div className="max-w-6xl mx-auto">
          <p className="mb-2">© 2024 Gaurav Dhakad. All rights reserved.</p>
          <p className="text-gray-400 text-sm">
            Built with Next.js, TypeScript, Tailwind CSS, Three.js, and Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}