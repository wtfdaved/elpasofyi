'use client';

import { motion } from 'framer-motion';
import { Camera } from '@/app/lib/types';
import CameraCard from './CameraCard';

interface CameraGridProps {
  cameras: Camera[];
  onCameraClick: (camera: Camera) => void;
  isLoading?: boolean;
}

export default function CameraGrid({ cameras, onCameraClick, isLoading }: CameraGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="glass-card h-64 animate-pulse" />
        ))}
      </div>
    );
  }

  if (cameras.length === 0) {
    return (
      <div className="col-span-full flex items-center justify-center py-20">
        <div className="text-center">
          <p className="text-white text-lg font-medium mb-2">No cameras found</p>
          <p className="text-slate-400">Try adjusting your filters</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full"
    >
      {cameras.map((camera) => (
        <motion.div key={camera.id} variants={itemVariants}>
          <CameraCard camera={camera} onClick={onCameraClick} />
        </motion.div>
      ))}
    </motion.div>
  );
}
