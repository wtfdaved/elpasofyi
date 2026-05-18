'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Camera } from '@/app/lib/types';
import { MapPin } from 'lucide-react';

interface CameraCardProps {
  camera: Camera;
  onClick: (camera: Camera) => void;
}

const HIGHWAY_COLORS: Record<string, string> = {
  'I-10': 'bg-blue-600',
  'US-54': 'bg-green-600',
  'Loop-375': 'bg-purple-600',
  'Other': 'bg-slate-600',
};

const STATUS_COLORS: Record<string, string> = {
  'active': 'bg-green-500',
  'inactive': 'bg-gray-500',
  'maintenance': 'bg-yellow-500',
};

export default function CameraCard({ camera, onClick }: CameraCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onClick={() => onClick(camera)}
      className="glass-card cursor-pointer group h-64 overflow-hidden relative"
    >
      {/* Camera Image Background */}
      <Image
        src={camera.imageUrl}
        alt={camera.name}
        fill
        className="object-cover absolute inset-0 group-hover:scale-110 transition-transform duration-500"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 group-hover:to-black/60 transition-all duration-300" />

      {/* Status indicator */}
      <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
        <div className={`w-3 h-3 rounded-full ${STATUS_COLORS[camera.status]}`} />
        <span className="text-xs text-white font-medium">
          {camera.status === 'active' ? 'Live' : camera.status === 'inactive' ? 'Offline' : 'Maintenance'}
        </span>
      </div>

      {/* Content overlay - visible on hover/bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10">
        {/* Badges */}
        <div className="flex gap-2 mb-3">
          <span className={`text-xs font-bold text-white px-3 py-1 rounded-full ${HIGHWAY_COLORS[camera.highway]}`}>
            {camera.highway}
          </span>
          <span className="text-xs font-bold text-white px-3 py-1 rounded-full bg-slate-700">
            {camera.neighborhood}
          </span>
        </div>

        {/* Camera info */}
        <h3 className="font-bold text-white text-sm mb-2 line-clamp-2">
          {camera.name}
        </h3>
        <div className="flex items-center gap-1 text-slate-200 text-xs">
          <MapPin className="w-3 h-3" />
          <span className="line-clamp-1">{camera.location}</span>
        </div>
      </div>

      {/* Always-visible title at bottom for context */}
      <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300 z-10">
        <h3 className="font-bold text-white text-sm line-clamp-2">
          {camera.name}
        </h3>
      </div>
    </motion.div>
  );
}
