import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const InteractiveImage = ({ src, alt, width, height, className = "" }) => {
  const containerRef = useRef(null);
  const [scale, setScale] = useState(2);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const MIN_SCALE = 1;  // Minimum zoom level
  const MAX_SCALE = 4;  // Maximum zoom level

  // Handle scroll (zoom in/out)
  const handleWheel = (event) => {
    event.preventDefault();
    const zoomFactor = 0.1;

    // Calculate new scale
    let newScale = scale - event.deltaY * zoomFactor;
    
    // Limit the scale between MIN_SCALE and MAX_SCALE
    newScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, newScale));
    setScale(newScale);
  };

  // Handle mouse down for drag start
  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStart({
      x: event.clientX - translate.x,
      y: event.clientY - translate.y,
    });
  };

  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = 'auto';
  };

  // Handle mouse move for dragging
  const handleMouseMove = (event) => {
    if (!isDragging) return;
    setTranslate({
      x: event.clientX - dragStart.x,
      y: event.clientY - dragStart.y,
    });
  };

  // Handle touch events
  const handleTouchStart = (event) => {
    const touch = event.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX - translate.x,
      y: touch.clientY - translate.y,
    });
  };

  const handleTouchMove = (event) => {
    if (!isDragging) return;
    const touch = event.touches[0];
    setTranslate({
      x: touch.clientX - dragStart.x,
      y: touch.clientY - dragStart.y,
    });
  };

  // Stop dragging when mouse is released
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add/remove event listeners for dragging
  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragStart]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        cursor: isDragging ? 'grabbing' : 'grab',
      }}
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <motion.img
        src={src}
        alt={alt}
        className="mt-10"
        style={{
          width: width || '100%',
          height: height || 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
        }}
        animate={{
          scale: scale,
          x: 0.5 * translate.x,
          y: 0.5 * translate.y,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
          duration: isDragging ? 0 : 0.3
        }}
        dragConstraints={containerRef}
      />
    </div>
  );
};

export default InteractiveImage;