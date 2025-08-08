'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Heart, Eye } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  highlights: string[];
}

export default function ProjectsSection() {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: 'Grace – AI Healthcare Assistant',
      description: 'Python-based assistant using OpenCV for gesture control and voice commands for healthcare automation.',
      tech: ['Python', 'OpenCV', 'AI/ML', 'Healthcare', 'NLP'],
      github: 'https://github.com/Gauravmy',
      highlights: ['Gesture Control', 'Voice Commands', 'Healthcare Automation', 'Real-time Processing']
    },
    {
      title: 'AgriMarket',
      description: 'Platform connecting farmers and buyers with real-time pricing and secure transactions.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'Real-time', 'E-commerce'],
      github: 'https://github.com/Gauravmy',
      highlights: ['Real-time Pricing', 'Secure Transactions', 'Farmer-Broker Connect', 'Market Analytics']
    },
    {
      title: 'AI Demand Forecasting',
      description: 'Machine learning models for forecasting demand in logistics and supply chain sectors.',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'Logistics'],
      github: 'https://github.com/Gauravmy',
      highlights: ['Time Series Analysis', 'Supply Chain', 'Logistics Optimization', 'Predictive Analytics']
    },
    {
      title: 'BioPay System',
      description: 'Facial-recognition based contactless biometric payment system using Firebase and TypeScript.',
      tech: ['TypeScript', 'Firebase', 'Computer Vision', 'Fintech', 'React'],
      github: 'https://github.com/Gauravmy',
      highlights: ['Facial Recognition', 'Contactless Payment', 'Biometric Security', 'Real-time Processing']
    },
    {
      title: 'Portfolio Website',
      description: 'Developed and deployed personal portfolio using modern web technologies with interactive features.',
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
      github: 'https://github.com/Gauravmy',
      highlights: ['Interactive Design', '3D Animations', 'Responsive Layout', 'Modern Stack']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const cardVariants = {
    front: { rotateY: 0 },
    back: { rotateY: 180 }
  };

  const handleCardClick = (title: string) => {
    setFlippedCard(flippedCard === title ? null : title);
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8" />
          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl mx-auto">
            Explore my latest projects showcasing expertise in AI/ML, full-stack development, and innovative solutions.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="perspective-1000"
            >
              <div 
                className="relative w-full h-96 cursor-pointer"
                onClick={() => handleCardClick(project.title)}
              >
                <AnimatePresence mode="wait">
                  {flippedCard !== project.title ? (
                    <motion.div
                      key="front"
                      variants={cardVariants}
                      initial="front"
                      animate="front"
                      exit="back"
                      className="absolute inset-0 w-full h-full backface-hidden"
                    >
                      <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 group">
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Code className="w-8 h-8 text-white" />
                          </div>
                          <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors">
                            {project.title}
                          </CardTitle>
                          <CardDescription className="text-gray-400">
                            {project.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="flex flex-col justify-between h-full">
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.slice(0, 4).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs border-blue-400 text-blue-300">
                                {tech}
                              </Badge>
                            ))}
                            {project.tech.length > 4 && (
                              <Badge variant="outline" className="text-xs border-gray-500 text-gray-400">
                                +{project.tech.length - 4} more
                              </Badge>
                            )}
                          </div>
                          
                          <div className="space-y-3">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="w-full border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github, '_blank');
                              }}
                            >
                              <Github className="mr-2 h-4 w-4" />
                              View Code
                            </Button>
                            
                            <div className="text-center">
                              <span className="text-xs text-gray-500">Click to view details</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      variants={cardVariants}
                      initial="back"
                      animate="back"
                      exit="front"
                      className="absolute inset-0 w-full h-full backface-hidden"
                      style={{ transform: 'rotateY(180deg)' }}
                    >
                      <Card className="h-full bg-gradient-to-br from-blue-900/50 to-purple-900/50 border-blue-400/30 backdrop-blur-sm">
                        <CardHeader>
                          <CardTitle className="text-xl text-white flex items-center justify-between">
                            {project.title}
                            <Eye className="w-5 h-5 text-blue-400" />
                          </CardTitle>
                          <CardDescription className="text-blue-300">
                            Key Features & Highlights
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-white">Technologies Used:</h4>
                            <div className="flex flex-wrap gap-1">
                              {project.tech.map((tech, techIndex) => (
                                <Badge key={techIndex} variant="secondary" className="text-xs bg-blue-500/20 text-blue-300 border-blue-400/30">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-white">Highlights:</h4>
                            <ul className="space-y-1">
                              {project.highlights.map((highlight, highlightIndex) => (
                                <li key={highlightIndex} className="text-xs text-gray-300 flex items-center">
                                  <div className="w-1 h-1 bg-blue-400 rounded-full mr-2" />
                                  {highlight}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex gap-2 pt-4">
                            <Button 
                              variant="outline" 
                              size="sm"
                              className="flex-1 border-blue-400 text-blue-300 hover:bg-blue-400 hover:text-black transition-all duration-300"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.open(project.github, '_blank');
                              }}
                            >
                              <Github className="mr-1 h-3 w-3" />
                              GitHub
                            </Button>
                            
                            {project.live && (
                              <Button 
                                variant="outline" 
                                size="sm"
                                className="flex-1 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-black transition-all duration-300"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  window.open(project.live, '_blank');
                                }}
                              >
                                <ExternalLink className="mr-1 h-3 w-3" />
                                Live Demo
                              </Button>
                            )}
                          </div>
                          
                          <div className="text-center pt-2">
                            <span className="text-xs text-gray-500">Click to flip back</span>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}