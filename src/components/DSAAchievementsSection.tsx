'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Trophy, Target, TrendingUp, ExternalLink, Award, Star, Zap } from 'lucide-react';

interface DSAStats {
  leetcode: {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    ranking: string;
    acceptanceRate: number;
  };
  gfg: {
    totalSolved: number;
    schoolSolved: number;
    basicSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
    instituteRank: number;
    overallRank: string;
  };
}

export default function DSAAchievementsSection() {
  const [stats, setStats] = useState<DSAStats>({
    leetcode: {
      totalSolved: 700,
      easySolved: 300,
      mediumSolved: 350,
      hardSolved: 50,
      ranking: "Top 15%",
      acceptanceRate: 85
    },
    gfg: {
      totalSolved: 300,
      schoolSolved: 50,
      basicSolved: 100,
      easySolved: 80,
      mediumSolved: 60,
      hardSolved: 10,
      instituteRank: 1,
      overallRank: "Top 5%"
    }
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading live stats
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

  const statCardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.05, y: -5 }
  };

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6 text-yellow-400" />,
      title: "1000+ Problems Solved",
      description: "Combined across LeetCode and GeeksforGeeks",
      value: "1000+",
      color: "from-yellow-400 to-orange-400"
    },
    {
      icon: <Target className="w-6 h-6 text-green-400" />,
      title: "Institute Top Rank",
      description: "#1 Rank in GFG Institute Leaderboard",
      value: "#1",
      color: "from-green-400 to-emerald-400"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
      title: "Consistency Streak",
      description: "Daily problem solving for 180+ days",
      value: "180+",
      color: "from-blue-400 to-cyan-400"
    },
    {
      icon: <Award className="w-6 h-6 text-purple-400" />,
      title: "Contest Rating",
      description: "High performance in coding contests",
      value: "1800+",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const renderSkeleton = () => (
    <div className="animate-pulse">
      <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2"></div>
    </div>
  );

  return (
    <section id="dsa-achievements" className="py-20 px-4 relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/10 via-blue-900/10 to-purple-900/10" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              DSA Achievements
            </span>
          </motion.h2>
          <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8" />
          <motion.p variants={itemVariants} className="text-lg text-gray-400 max-w-2xl mx-auto">
            Live statistics showcasing my journey in Data Structures and Algorithms across competitive programming platforms.
          </motion.p>
        </motion.div>

        {/* Key Achievement Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={statCardVariants}
              whileHover="hover"
            >
              <Card className="h-full bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:border-green-400 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-r ${achievement.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300`}>
                      {achievement.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {achievement.value}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {achievement.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 text-center">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Platform Statistics */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* LeetCode Stats */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-gray-800/50 border-orange-500/30 backdrop-blur-sm hover:border-orange-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-orange-400">
                  <Code className="mr-2 h-5 w-5" />
                  LeetCode Statistics
                  <Badge variant="outline" className="ml-auto border-orange-400 text-orange-300">
                    Live
                  </Badge>
                </CardTitle>
                <CardDescription className="text-orange-300">
                  Competitive programming performance on LeetCode
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    {renderSkeleton()}
                    {renderSkeleton()}
                    {renderSkeleton()}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Problems Solved</span>
                      <span className="text-2xl font-bold text-orange-400">{stats.leetcode.totalSolved}</span>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center p-3 bg-green-500/20 rounded-lg border border-green-400/30">
                        <div className="text-lg font-bold text-green-400">{stats.leetcode.easySolved}</div>
                        <div className="text-xs text-gray-400">Easy</div>
                      </div>
                      <div className="text-center p-3 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                        <div className="text-lg font-bold text-yellow-400">{stats.leetcode.mediumSolved}</div>
                        <div className="text-xs text-gray-400">Medium</div>
                      </div>
                      <div className="text-center p-3 bg-red-500/20 rounded-lg border border-red-400/30">
                        <div className="text-lg font-bold text-red-400">{stats.leetcode.hardSolved}</div>
                        <div className="text-xs text-gray-400">Hard</div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Ranking</span>
                      <Badge variant="outline" className="border-orange-400 text-orange-300">
                        {stats.leetcode.ranking}
                      </Badge>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Acceptance Rate</span>
                      <span className="text-lg font-semibold text-orange-400">{stats.leetcode.acceptanceRate}%</span>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-orange-400 text-orange-300 hover:bg-orange-400 hover:text-black transition-all duration-300"
                      onClick={() => window.open('https://leetcode.com/u/g4777636/', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View LeetCode Profile
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* GeeksforGeeks Stats */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="bg-gray-800/50 border-green-500/30 backdrop-blur-sm hover:border-green-400 transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-green-400">
                  <Trophy className="mr-2 h-5 w-5" />
                  GeeksforGeeks Statistics
                  <Badge variant="outline" className="ml-auto border-green-400 text-green-300">
                    Live
                  </Badge>
                </CardTitle>
                <CardDescription className="text-green-300">
                  Institute topper and consistent performer on GFG
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="space-y-4">
                    {renderSkeleton()}
                    {renderSkeleton()}
                    {renderSkeleton()}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Problems Solved</span>
                      <span className="text-2xl font-bold text-green-400">{stats.gfg.totalSolved}</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center p-2 bg-blue-500/20 rounded-lg border border-blue-400/30">
                        <div className="text-lg font-bold text-blue-400">{stats.gfg.schoolSolved}</div>
                        <div className="text-xs text-gray-400">School</div>
                      </div>
                      <div className="text-center p-2 bg-purple-500/20 rounded-lg border border-purple-400/30">
                        <div className="text-lg font-bold text-purple-400">{stats.gfg.basicSolved}</div>
                        <div className="text-xs text-gray-400">Basic</div>
                      </div>
                      <div className="text-center p-2 bg-green-500/20 rounded-lg border border-green-400/30">
                        <div className="text-lg font-bold text-green-400">{stats.gfg.easySolved}</div>
                        <div className="text-xs text-gray-400">Easy</div>
                      </div>
                      <div className="text-center p-2 bg-yellow-500/20 rounded-lg border border-yellow-400/30">
                        <div className="text-lg font-bold text-yellow-400">{stats.gfg.mediumSolved}</div>
                        <div className="text-xs text-gray-400">Medium</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-4 rounded-lg border border-yellow-400/30">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400">Institute Rank</div>
                          <div className="text-2xl font-bold text-yellow-400 flex items-center">
                            #{stats.gfg.instituteRank}
                            <Star className="ml-2 h-5 w-5 text-yellow-400" />
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                          Top Performer
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Overall Rank</span>
                      <Badge variant="outline" className="border-green-400 text-green-300">
                        {stats.gfg.overallRank}
                      </Badge>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-green-400 text-green-300 hover:bg-green-400 hover:text-black transition-all duration-300"
                      onClick={() => window.open('https://www.geeksforgeeks.org/user/g4777sov1/', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View GFG Profile
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Recent Activity */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-12"
        >
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center text-cyan-400">
                <Zap className="mr-2 h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Solved 5 problems today</span>
                  </div>
                  <span className="text-xs text-gray-500">2 hours ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Contest participation - Weekly Contest</span>
                  </div>
                  <span className="text-xs text-gray-500">1 day ago</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-sm text-gray-300">Achieved 1800+ rating</span>
                  </div>
                  <span className="text-xs text-gray-500">3 days ago</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}