'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Trophy, MapPin, ExternalLink, Users, Code, Award, Star } from 'lucide-react';

interface HackathonEvent {
  title: string;
  organizer: string;
  date: string;
  location: string;
  achievement: string;
  description: string;
  tech: string[];
  category: 'hackathon' | 'conference' | 'workshop';
  logo?: string;
}

export default function HackathonsEventsSection() {
  const events: HackathonEvent[] = [
    {
      title: "SBI Hackathon",
      organizer: "State Bank of India",
      date: "March 2024",
      location: "Virtual",
      achievement: "Participant",
      description: "Participated in SBI's flagship hackathon focusing on banking innovation and digital transformation solutions.",
      tech: ["Fintech", "Digital Banking", "API Integration", "Security"],
      category: "hackathon"
    },
    {
      title: "Smart India Hackathon",
      organizer: "Government of India",
      date: "December 2023",
      location: "National Level",
      achievement: "Finalist",
      description: "Reached finals in India's largest hackathon with an innovative solution for smart city challenges.",
      tech: ["IoT", "Smart Cities", "Data Analytics", "Mobile Development"],
      category: "hackathon"
    },
    {
      title: "Flipkart GRiD",
      organizer: "Flipkart",
      date: "October 2023",
      location: "Bangalore",
      achievement: "Finalist",
      description: "Selected as finalist in Flipkart's GRiD hackathon, competing with top talent across India.",
      tech: ["E-commerce", "Logistics", "AI/ML", "Web Development"],
      category: "hackathon"
    },
    {
      title: "Walmart Sparkathon",
      organizer: "Walmart",
      date: "August 2023",
      location: "Virtual",
      achievement: "Finalist",
      description: "Finalist in Walmart's innovation challenge focusing on retail technology and supply chain optimization.",
      tech: ["Retail Tech", "Supply Chain", "Data Science", "Cloud Computing"],
      category: "hackathon"
    },
    {
      title: "IIT Guwahati Tech Conference",
      organizer: "IIT Guwahati",
      date: "July 2023",
      location: "Guwahati",
      achievement: "Certified Participant",
      description: "Attended and completed certification at IIT Guwahati's premier technology conference.",
      tech: ["AI/ML", "Research", "Innovation", "Technology Trends"],
      category: "conference"
    },
    {
      title: "National AI Summit",
      organizer: "NITI Aayog",
      date: "May 2023",
      location: "New Delhi",
      achievement: "Speaker",
      description: "Invited speaker at National AI Summit, presenting on AI applications in healthcare automation.",
      tech: ["AI/ML", "Healthcare", "Automation", "Ethics"],
      category: "conference"
    },
    {
      title: "Web Development Workshop",
      organizer: "Google Developer Groups",
      date: "April 2023",
      location: "Mathura",
      achievement: "Organizer",
      description: "Organized and conducted a comprehensive web development workshop for 100+ students.",
      tech: ["Web Development", "React", "Node.js", "Modern JavaScript"],
      category: "workshop"
    },
    {
      title: "Machine Learning Bootcamp",
      organizer: "AI Digitals",
      date: "February 2023",
      location: "Sanskriti University",
      achievement: "Lead Instructor",
      description: "Led a week-long ML bootcamp, training 50+ students on practical ML applications.",
      tech: ["Machine Learning", "Python", "TensorFlow", "Data Science"],
      category: "workshop"
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
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, y: -5 }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'hackathon':
        return <Trophy className="w-5 h-5 text-orange-400" />;
      case 'conference':
        return <Users className="w-5 h-5 text-blue-400" />;
      case 'workshop':
        return <Code className="w-5 h-5 text-green-400" />;
      default:
        return <Star className="w-5 h-5 text-purple-400" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'hackathon':
        return 'from-orange-400 to-red-400';
      case 'conference':
        return 'from-blue-400 to-cyan-400';
      case 'workshop':
        return 'from-green-400 to-emerald-400';
      default:
        return 'from-purple-400 to-pink-400';
    }
  };

  const getAchievementBadge = (achievement: string) => {
    const badgeConfig = {
      'Finalist': { color: 'bg-yellow-500/20 text-yellow-300 border-yellow-400/30', icon: <Trophy className="w-3 h-3" /> },
      'Winner': { color: 'bg-green-500/20 text-green-300 border-green-400/30', icon: <Award className="w-3 h-3" /> },
      'Participant': { color: 'bg-blue-500/20 text-blue-300 border-blue-400/30', icon: <Users className="w-3 h-3" /> },
      'Speaker': { color: 'bg-purple-500/20 text-purple-300 border-purple-400/30', icon: <Star className="w-3 h-3" /> },
      'Organizer': { color: 'bg-pink-500/20 text-pink-300 border-pink-400/30', icon: <Code className="w-3 h-3" /> },
      'Lead Instructor': { color: 'bg-orange-500/20 text-orange-300 border-orange-400/30', icon: <Award className="w-3 h-3" /> },
      'Certified Participant': { color: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/30', icon: <Award className="w-3 h-3" /> }
    };

    const config = badgeConfig[achievement as keyof typeof badgeConfig] || badgeConfig['Participant'];
    
    return (
      <Badge className={`${config.color} flex items-center space-x-1`}>
        {config.icon}
        <span>{achievement}</span>
      </Badge>
    );
  };

  return (
    <section id="hackathons-events" className="py-20 px-4 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-red-900/10 to-pink-900/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Hackathons & Events
            </span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto mb-8" />
          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing participation in national-level hackathons, tech conferences, and community events that highlight my journey in technology and innovation.
          </motion.p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { label: "Hackathons", value: "5+", icon: <Trophy className="w-6 h-6 text-orange-400" /> },
            { label: "Conferences", value: "10+", icon: <Users className="w-6 h-6 text-blue-400" /> },
            { label: "Workshops", value: "15+", icon: <Code className="w-6 h-6 text-green-400" /> },
            { label: "Finalist", value: "4", icon: <Award className="w-6 h-6 text-yellow-400" /> }
          ].map((stat, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-orange-400 transition-all duration-300 text-center">
                <CardHeader>
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{stat.value}</CardTitle>
                  <CardDescription className="text-gray-400">{stat.label}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Events Timeline */}
        <div className="space-y-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              {/* Timeline line */}
              {index < events.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-orange-400 to-transparent"></div>
              )}
              
              <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-orange-400 transition-all duration-300 ml-16">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-full bg-gradient-to-r ${getCategoryColor(event.category)} bg-opacity-20`}>
                        {getCategoryIcon(event.category)}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl text-white group-hover:text-orange-400 transition-colors">
                          {event.title}
                        </CardTitle>
                        <CardDescription className="text-gray-400">
                          {event.organizer}
                        </CardDescription>
                      </div>
                    </div>
                    {getAchievementBadge(event.achievement)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-300">{event.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {event.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs border-orange-400/50 text-orange-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <Badge variant="outline" className="text-xs border-gray-600 text-gray-400 capitalize">
                        {event.category}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-400/30 backdrop-blur-sm max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Ready to Collaborate?</CardTitle>
              <CardDescription className="text-orange-300">
                I'm always excited to participate in hackathons, attend tech events, and collaborate on innovative projects.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}