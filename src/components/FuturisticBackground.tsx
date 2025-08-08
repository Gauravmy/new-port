'use client';

import { useEffect, useState, useRef } from 'react';

export default function FuturisticBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const particles = [];
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    particlesRef.current = particles;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();
      });

      // Draw connections
      particlesRef.current.forEach((particle1, i) => {
        particlesRef.current.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />
      
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/30 to-blue-900/30" />
      
      {/* Animated gradient overlay */}
      <div 
        className="absolute inset-0 opacity-40 transition-all duration-1000 ease-out"
        style={{
          background: `radial-gradient(800px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.2), transparent 70%)`,
        }}
      />
      
      {/* Holographic grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, 0.1) 25%, rgba(139, 92, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.1) 75%, rgba(139, 92, 246, 0.1) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(59, 130, 246, 0.1) 25%, rgba(59, 130, 246, 0.1) 26%, transparent 27%, transparent 74%, rgba(59, 130, 246, 0.1) 75%, rgba(59, 130, 246, 0.1) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
          animation: 'gridMove 20s linear infinite'
        }} />
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Neural network lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full relative">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
              style={{
                top: `${(i + 1) * 5}%`,
                left: '0',
                right: '0',
                animation: `pulse ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Corner holographic effects */}
      <div className="absolute top-0 left-0 w-40 h-40 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-40 h-40 border-t-2 border-r-2 border-purple-400/50 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-40 h-40 border-b-2 border-l-2 border-blue-400/50 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-40 h-40 border-b-2 border-r-2 border-pink-400/50 rounded-br-lg" />
      
      {/* Moving light streaks */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-lightStreak1" />
        <div className="absolute top-1/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-lightStreak2" />
        <div className="absolute top-2/3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-lightStreak3" />
      </div>
      
      <style jsx>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }
        
        @keyframes lightStreak1 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes lightStreak2 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes lightStreak3 {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-lightStreak1 {
          animation: lightStreak1 8s linear infinite;
        }
        
        .animate-lightStreak2 {
          animation: lightStreak2 12s linear infinite;
          animation-delay: 2s;
        }
        
        .animate-lightStreak3 {
          animation: lightStreak3 10s linear infinite;
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}