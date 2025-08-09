'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, Code, Trophy, BookOpen } from 'lucide-react';

// ✅ Move roles array outside the component so it doesn't reinitialize each render
const roles = [
  { text: 'AI/ML Intern', color: 'text-cyan-400' },
  { text: 'SDE Intern', color: 'text-purple-400' },
  { text: 'Tech Community Leader', color: 'text-pink-400' }
];

// ✅ Motion variants centralized
const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HeroSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // ✅ Using refs so speeds don't trigger re-renders
  const typeSpeed = useRef(100);
  const deleteSpeed = useRef(50);
  const pauseDuration = useRef(2000);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[currentRoleIndex];

      if (isDeleting) {
        if (currentText.length > 0) {
          setCurrentText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex(prev => (prev + 1) % roles.length);
        }
      } else {
        if (currentText.length < currentRole.text.length) {
          setCurrentText(prev => currentRole.text.slice(0, prev.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration.current);
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed.current : typeSpeed.current);
    return () => clearTimeout(timer);

  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section className="h-screen w-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <motion.div variants={heroVariants} initial="hidden" animate="visible" className="space-y-8">

          {/* Name */}
          <motion.h1 variants={itemVariants} className="text-7xl md:text-9xl font-bold mb-6 neon-glow">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient drop-shadow-lg">
              GAURAV DHAKAD
            </span>
          </motion.h1>

          {/* Typing effect */}
          <motion.p variants={itemVariants} className="text-2xl md:text-4xl mb-8 font-light tracking-wide">
            <span className={roles[currentRoleIndex].color}>{currentText}</span>
            <span className="blink-cursor">|</span>
          </motion.p>

          {/* Description */}
          <motion.p variants={itemVariants} className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-gray-300 leading-relaxed">
            Second-year B.Tech AI/ML student passionate about building scalable, real-world software solutions. 
            Finalist in 5+ national-level hackathons with expertise in AI/ML, full-stack development, and open-source contributions.
          </motion.p>

          {/* Main Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Phone, text: 'Get in Touch', link: 'https://wa.me/917668759906', style: 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-2xl hover:shadow-cyan-500/30' },
              { icon: Github, text: 'GitHub', link: 'https://github.com/Gauravmy', style: 'border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white' },
              { icon: Linkedin, text: 'LinkedIn', link: 'https://linkedin.com/in/gaurav-dhakad', style: 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white' }
            ].map((btn, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant={btn.text === 'Get in Touch' ? 'default' : 'outline'} 
                  className={`${btn.style} font-semibold px-10 py-5 text-xl transition-all duration-300 rounded-full`}
                  onClick={() => window.open(btn.link, '_blank')} aria-label={btn.text}>
                  <btn.icon className="mr-3 h-6 w-6" /> {btn.text}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Access Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 mb-12">
            {[
              { icon: Code, text: 'LeetCode', link: 'https://leetcode.com/u/g4777636/', color: 'orange' },
              { icon: Trophy, text: 'GeeksforGeeks', link: 'https://www.geeksforgeeks.org/user/g4777sov1/', color: 'green' },
              { icon: BookOpen, text: 'Resume', link: '/resume', color: 'blue' }
            ].map((btn, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg"
                  className={`border-${btn.color}-500 text-${btn.color}-400 hover:bg-${btn.color}-500 hover:text-white transition-all duration-300 rounded-full px-8 py-3 shadow-lg hover:shadow-${btn.color}-500/20`}
                  onClick={() => window.open(btn.link, '_blank')} aria-label={btn.text}>
                  <btn.icon className="mr-3 h-5 w-5" /> {btn.text}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="flex justify-center space-x-12 text-lg text-gray-400">
            {[
              { icon: Mail, text: 'g4777636@gmail.com', color: 'cyan' },
              { icon: Phone, text: '+91-7668759906', color: 'purple' }
            ].map((info, i) => (
              <motion.div key={i} className={`flex items-center space-x-3 hover:text-${info.color}-400 transition-colors cursor-pointer`} whileHover={{ scale: 1.05 }}>
                <info.icon className="h-5 w-5" /> <span>{info.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-cyan-400 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>

      {/* ✅ Blinking cursor animation */}
      <style jsx>{`
        .blink-cursor {
          animation: blink 1s infinite;
        }
        @keyframes blink {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
      `}</style>
    </section>
  );
}
