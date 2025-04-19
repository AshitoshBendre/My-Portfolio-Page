import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Scene() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [viewportOffset, setViewportOffset] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        setZoom((prev) => Math.min(Math.max(0.5, prev - e.deltaY * 0.001), 2));
      }
    };

    const element = document.getElementById("scene-viewport");
    element.addEventListener("wheel", handleWheel, { passive: false });

    return () => element.removeEventListener("wheel", handleWheel);
  }, []);

  const handleMouseDown = (e) => {
    if (e.button === 1 || e.button === 2) {
      // Middle or right click
      e.preventDefault();
      setIsDragging(true);
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - mousePosition.x;
      const dy = e.clientY - mousePosition.y;
      setViewportOffset((prev) => ({
        x: prev.x + dx,
        y: prev.y + dy,
      }));
      setMousePosition({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const gridSize = 50;
  const numLines = 50;

  return (
    <div
      id="scene-viewport"
      className="w-full h-full bg-[#1e1e1e] overflow-hidden cursor-move relative"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Grid */}
      <motion.div
        className="absolute inset-0"
        style={{
          transform: `translate(${viewportOffset.x}px, ${viewportOffset.y}px) scale(${zoom})`,
          transformOrigin: "center",
        }}
      >
        <svg
          className="w-full h-full"
          style={{
            strokeWidth: 1 / zoom,
          }}
        >
          {/* Vertical lines */}
          {Array.from({ length: numLines }).map((_, i) => (
            <line
              key={`v${i}`}
              x1={i * gridSize}
              y1="0"
              x2={i * gridSize}
              y2="100%"
              stroke="#2d2d2d"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {/* Horizontal lines */}
          {Array.from({ length: numLines }).map((_, i) => (
            <line
              key={`h${i}`}
              x1="0"
              y1={i * gridSize}
              x2="100%"
              y2={i * gridSize}
              stroke="#2d2d2d"
              vectorEffect="non-scaling-stroke"
            />
          ))}
          {/* Center lines */}
          <line
            x1="50%"
            y1="0"
            x2="50%"
            y2="100%"
            stroke="#3d3d3d"
            strokeWidth={2 / zoom}
            vectorEffect="non-scaling-stroke"
          />
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="#3d3d3d"
            strokeWidth={2 / zoom}
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* Scene Objects */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Add your scene objects here */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#0078d7]/20 rounded-lg border-2 border-[#0078d7] flex items-center justify-center text-[#0078d7] font-medium"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            Scene View
          </motion.div>
        </div>
      </motion.div>

      {/* Viewport Controls */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setZoom((prev) => Math.min(prev + 0.1, 2))}
          className="w-8 h-8 bg-surface/20 rounded-lg flex items-center justify-center text-secondary hover:bg-surface/30 transition-colors"
        >
          +
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setZoom((prev) => Math.max(prev - 0.1, 0.5))}
          className="w-8 h-8 bg-surface/20 rounded-lg flex items-center justify-center text-secondary hover:bg-surface/30 transition-colors"
        >
          -
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => {
            setViewportOffset({ x: 0, y: 0 });
            setZoom(1);
          }}
          className="w-8 h-8 bg-surface/20 rounded-lg flex items-center justify-center text-secondary hover:bg-surface/30 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 10l-4 4m0 0l-4-4m4 4V3m0 0v11m0 0v7"
            />
          </svg>
        </motion.button>
      </div>

      {/* Mouse Position Overlay */}
      <div className="absolute bottom-4 left-4 text-xs text-secondary/60">
        {Math.round(viewportOffset.x)}px, {Math.round(viewportOffset.y)}px •{" "}
        {Math.round(zoom * 100)}%
      </div>
    </div>
  );
}
