'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Target, Users, Award, BookOpen, Calendar, Trophy, Star } from 'lucide-react';

export default function AboutSection() {
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

  const achievements = [
    {
      icon: <Code className="w-6 h-6 text-cyan-400" />,
      title: "1000+ DSA Problems Solved",
      description: "700+ on LeetCode, 300+ on GFG",
      highlight: "Top #1 Rank in GFG Institute Leaderboard"
    },
    {
      icon: <Calendar className="w-6 h-6 text-purple-400" />,
      title: "10+ National Conferences",
      description: "Tech events and workshops attended nationwide",
      highlight: "Active participant in tech community"
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange-400" />,
      title: "SBI Hackathon",
      description: "Participated in State Bank of India Hackathon",
      highlight: "Banking innovation challenge"
    },
    {
      icon: <Award className="w-6 h-6 text-green-400" />,
      title: "IIT Guwahati Certified",
      description: "Completed specialized course from IIT Guwahati",
      highlight: "Prestigious institution certification"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-cyan-900/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              I'm a 3rd year B.Tech student majoring in Artificial Intelligence and Machine Learning at Sanskriti University. 
              My journey is driven by a passion for building scalable, real-world software solutions that make a meaningful impact.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              As a finalist in <span className="text-purple-400 font-semibold">5+ national-level hackathons</span> and having solved 
              <span className="text-orange-400 font-semibold"> over 1000+ DSA problems</span> across LeetCode and GFG, I bring a 
              strong foundation in algorithms and problem-solving to every project I undertake.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-gray-300 leading-relaxed">
              I'm actively shaping the tech community as the cofounder of <span className="text-green-400 font-semibold">AI Digitals</span> 
              and a leader in <span className="text-pink-400 font-semibold">Unstoppable Coders</span>, where I've had the privilege of 
              mentoring <span className="text-yellow-400 font-semibold">300+ students</span> across India, fostering the next generation 
              of tech innovators.
            </motion.p>

            {/* Education Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-cyan-400 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center text-cyan-400">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-lg text-white">B.Tech in Computer Science (AIML Minor)</p>
                    <p className="text-gray-400">Sanskriti University, Mathura</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <Badge variant="outline" className="border-green-400 text-green-400">
                        2023-2027
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Key Achievements */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-purple-400 transition-all duration-300 group">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-gray-700 group-hover:bg-gray-600 transition-colors">
                        {achievement.icon}
                      </div>
                    </div>
                    <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      {achievement.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center">
                      <Badge variant="secondary" className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-300 border-purple-400/30">
                        <Star className="mr-1 h-3 w-3" />
                        {achievement.highlight}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Focus Areas */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <motion.h3 variants={itemVariants} className="text-2xl font-bold text-center mb-8 text-white">
            Focus Areas
          </motion.h3>
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {['AI/ML Development', 'Full Stack Development', 'Open Source', 'Community Building', 'DSA & Algorithms', 'Hackathon Participation'].map((area, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Badge variant="outline" className="px-4 py-2 text-sm border-cyan-400 text-cyan-300 hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  {area}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
