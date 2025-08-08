'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Trophy, BookOpen } from 'lucide-react';

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const roles = [
    { text: 'AI/ML Intern', color: 'text-cyan-400' },
    { text: 'SDE Intern', color: 'text-purple-400' },
    { text: 'Tech Community Leader', color: 'text-pink-400' }
  ];

  useEffect(() => {
    const typeSpeed = 100;
    const deleteSpeed = 50;
    const pauseDuration = 2000;

    const type = () => {
      const currentRole = roles[currentRoleIndex];
      
      if (isPaused) {
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
        return;
      }

      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      } else {
        if (currentText.length < currentRole.text.length) {
          setCurrentText(currentRole.text.slice(0, currentText.length + 1));
        } else {
          setIsPaused(true);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, isPaused, currentRoleIndex, roles]);

  const heroVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="h-screen w-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <motion.div
          variants={heroVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-7xl md:text-9xl font-bold mb-6 neon-glow"
          >
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
              GAURAV DHAKAD
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-2xl md:text-4xl mb-8 font-light tracking-wide"
          >
            <span className={roles[currentRoleIndex].color}>
              {currentText}
            </span>
            <span className="animate-pulse">|</span>
          </motion.p>
          
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed"
          >
            Second-year B.Tech AI/ML student passionate about building scalable, real-world software solutions. 
            Finalist in 5+ national-level hackathons with expertise in AI/ML, full-stack development, and open-source contributions.
          </motion.p>
          
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-10 py-5 text-xl shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300 rounded-full"
                onClick={() => window.open('https://wa.me/917668759906', '_blank')}
              >
                <Phone className="mr-3 h-6 w-6" />
                Get in Touch
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold px-10 py-5 text-xl transition-all duration-300 rounded-full shadow-lg hover:shadow-cyan-500/20"
                onClick={() => window.open('https://github.com/Gauravmy', '_blank')}
              >
                <Github className="mr-3 h-6 w-6" />
                GitHub
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold px-10 py-5 text-xl transition-all duration-300 rounded-full shadow-lg hover:shadow-purple-500/20"
                onClick={() => window.open('https://linkedin.com/in/gaurav-dhakad', '_blank')}
              >
                <Linkedin className="mr-3 h-6 w-6" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Quick Access Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full px-8 py-3 shadow-lg hover:shadow-orange-500/20"
                onClick={() => window.open('https://leetcode.com/u/g4777636/', '_blank')}
              >
                <Code className="mr-3 h-5 w-5" />
                LeetCode
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white transition-all duration-300 rounded-full px-8 py-3 shadow-lg hover:shadow-green-500/20"
                onClick={() => window.open('https://www.geeksforgeeks.org/user/g4777sov1/', '_blank')}
              >
                <Trophy className="mr-3 h-5 w-5" />
                GeeksforGeeks
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outline" 
                size="lg"
                className="border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white transition-all duration-300 rounded-full px-8 py-3 shadow-lg hover:shadow-blue-500/20"
                onClick={() => window.open('/resume', '_blank')}
              >
                <BookOpen className="mr-3 h-5 w-5" />
                Resume
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="flex justify-center space-x-12 text-lg text-gray-400"
          >
            <motion.div 
              className="flex items-center space-x-3 hover:text-cyan-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Mail className="h-5 w-5" />
              <span>g4777636@gmail.com</span>
            </motion.div>
            <motion.div 
              className="flex items-center space-x-3 hover:text-purple-400 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="h-5 w-5" />
              <span>+91-7668759906</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-cyan-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}