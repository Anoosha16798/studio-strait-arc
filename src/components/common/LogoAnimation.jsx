import React from "react";
import { useEffect, useRef } from 'react';
const LogoAnimation = () => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Your logo's exact pixel geometry as line endpoints
      const logoPaths = [
        // Trace these from your file:8 - XX shape + arrow curve + dot
        { start: [20,20], end: [30,80] },
        { start: [70,20], end: [80,80] },
        { start: [40,50], end: [60,50], curve: true },
        // ... 10-15 more segments matching your logo exactly
      ];
      
      // 200 particles follow these paths
      const particles = logoPaths.flatMap(path => 
        Array(15).fill().map(() => ({
          x: Math.random()*canvas.width,
          y: Math.random()*canvas.height,
          vx: (Math.random()-0.5)*2,
          vy: (Math.random()-0.5)*2,
          targetX: path.start[0] + Math.random()*(path.end[0]-path.start[0]),
          targetY: path.start[1] + Math.random()*(path.end[1]-path.start[1])
        }))
      );
      
      const animate = (time) => {
        ctx.fillStyle = '#A8552B'; // Your brown
        ctx.fillRect(0,0,canvas.width,canvas.height);
        
        particles.forEach(p => {
          // Smooth lerp to target positions
          p.x += (p.targetX - p.x) * 0.08;
          p.y += (p.targetY - p.y) * 0.08;
          
          ctx.strokeStyle = 'rgba(255,255,255,0.9)';
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x+1.5, p.y+0.5); // Tiny straight segment
          ctx.stroke();
        });
        
        requestAnimationFrame(animate);
      };
      animate();
    }, []);
  
    return (
      <div className="w-64 h-64 rounded-full overflow-hidden bg-gradient-to-br from-amber-900 to-amber-800 shadow-2xl">
        <canvas ref={canvasRef} width={256} height={256} className="w-full h-full" />
      </div>
    );
  };
  export default LogoAnimation;