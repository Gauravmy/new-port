'use client';

import { useEffect, useState, useRef, useCallback } from 'react';

export default function AITechBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<any[]>([]);
  const neuralLinesRef = useRef<any[]>([]);
  const animationRef = useRef<number>();
  const requestRef = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [handleMouseMove]);

  useEffect(() => {
    if (!isMounted) return;
    
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

    // Initialize particles for neural network
    const particles = [];
    const particleCount = 40;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.4 + 0.1,
        pulse: Math.random() * Math.PI * 2
      });
    }

    particlesRef.current = particles;

    // Initialize neural network lines
    const neuralLines = [];
    const lineCount = 15;

    for (let i = 0; i < lineCount; i++) {
      neuralLines.push({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        endX: Math.random() * canvas.width,
        endY: Math.random() * canvas.height,
        progress: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
        opacity: Math.random() * 0.3 + 0.1,
        color: Math.random() > 0.5 ? '139, 92, 246' : '59, 130, 246'
      });
    }

    neuralLinesRef.current = neuralLines;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw neural network lines
      neuralLinesRef.current.forEach((line) => {
        line.progress += line.speed;
        if (line.progress > 1) {
          line.progress = 0;
          line.startX = Math.random() * canvas.width;
          line.startY = Math.random() * canvas.height;
          line.endX = Math.random() * canvas.width;
          line.endY = Math.random() * canvas.height;
        }

        const currentX = line.startX + (line.endX - line.startX) * line.progress;
        const currentY = line.startY + (line.endY - line.startY) * line.progress;

        // Draw line with gradient
        const gradient = ctx.createLinearGradient(line.startX, line.startY, currentX, currentY);
        gradient.addColorStop(0, `rgba(${line.color}, 0)`);
        gradient.addColorStop(0.5, `rgba(${line.color}, ${line.opacity})`);
        gradient.addColorStop(1, `rgba(${line.color}, 0)`);

        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(currentX, currentY);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw moving data point
        ctx.beginPath();
        ctx.arc(currentX, currentY, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${line.color}, 0.8)`;
        ctx.fill();
      });

      // Update and draw particles
      particlesRef.current.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.05;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Pulsing opacity
        const pulseOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${pulseOpacity})`;
        ctx.fill();
      });

      // Draw connections between nearby particles
      particlesRef.current.forEach((particle1, i) => {
        particlesRef.current.slice(i + 1).forEach((particle2) => {
          const dx = particle1.x - particle2.x;
          const dy = particle1.y - particle2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particle1.x, particle1.y);
            ctx.lineTo(particle2.x, particle2.y);
            ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      animate();
    };

    // Delay animation start for better initial performance
    requestRef.current = requestAnimationFrame(() => {
      setTimeout(startAnimation, 100);
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Canvas for neural network and particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.5 }}
      />
      
      {/* Main gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/40 to-blue-900/40" />
      
      {/* Mouse-following gradient overlay */}
      <div 
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.15), transparent 60%)`,
        }}
      />
      
      {/* Circuit board pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="h-full w-full" style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 48%, rgba(139, 92, 246, 0.3) 49%, rgba(139, 92, 246, 0.3) 51%, transparent 52%),
            linear-gradient(90deg, transparent 48%, rgba(59, 130, 246, 0.3) 49%, rgba(59, 130, 246, 0.3) 51%, transparent 52%),
            radial-gradient(circle at 25% 25%, rgba(139, 92, 246, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)
          `,
          backgroundSize: '60px 60px, 60px 60px, 120px 120px, 120px 120px',
          animation: 'circuitMove 30s linear infinite'
        }} />
      </div>
      
      {/* Moving light rays */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"
            style={{
              top: `${15 + i * 15}%`,
              left: '-100%',
              width: '200%',
              animation: `lightRay${i + 1} ${15 + i * 3}s linear infinite`,
              transform: `rotate(${i * 5 - 10}deg)`
            }}
          />
        ))}
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      {/* Corner tech accents */}
      <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-cyan-400/40 rounded-tl-lg" />
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-purple-400/40 rounded-tr-lg" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-blue-400/40 rounded-bl-lg" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-pink-400/40 rounded-br-lg" />
      
      {/* Data flow particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `dataFlow${i % 3} ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0.3 + Math.random() * 0.4
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes circuitMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(60px, 60px); }
        }
        
        @keyframes lightRay1 {
          0% { transform: translateX(-100%) rotate(-10deg); }
          100% { transform: translateX(100%) rotate(-10deg); }
        }
        
        @keyframes lightRay2 {
          0% { transform: translateX(-100%) rotate(-5deg); }
          100% { transform: translateX(100%) rotate(-5deg); }
        }
        
        @keyframes lightRay3 {
          0% { transform: translateX(-100%) rotate(0deg); }
          100% { transform: translateX(100%) rotate(0deg); }
        }
        
        @keyframes lightRay4 {
          0% { transform: translateX(-100%) rotate(5deg); }
          100% { transform: translateX(100%) rotate(5deg); }
        }
        
        @keyframes lightRay5 {
          0% { transform: translateX(-100%) rotate(10deg); }
          100% { transform: translateX(100%) rotate(10deg); }
        }
        
        @keyframes dataFlow0 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translate(100px, -50px); opacity: 0; }
        }
        
        @keyframes dataFlow1 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translate(-100px, 50px); opacity: 0; }
        }
        
        @keyframes dataFlow2 {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { transform: translate(50px, 100px); opacity: 0; }
        }
      `}</style>
    </div>
  );
}