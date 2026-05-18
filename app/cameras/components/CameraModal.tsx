'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Camera } from '@/app/lib/types';
import { X, MapPin, Clock, Radio } from 'lucide-react';
import { useEffect } from 'react';

interface CameraModalProps {
  camera: Camera | null;
  onClose: () => void;
  relatedCameras?: Camera[];
  onRelatedCameraClick?: (camera: Camera) => void;
}

export default function CameraModal({
  camera,
  onClose,
  relatedCameras = [],
  onRelatedCameraClick,
}: CameraModalProps) {
  useEffect(() => {
    if (camera) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [camera]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (camera) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [camera, onClose]);

  return (
    <AnimatePresence>
      {camera && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="glass-backdrop fixed inset-0 z-40"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 z-50 flex flex-col"
          >
            <div className="glass-panel h-full flex flex-col overflow-hidden">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-6 border-b border-slate-700/30">
                <h2 className="text-2xl font-bold text-white font-lora">{camera.name}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto flex flex-col md:flex-row gap-6 p-6">
                {/* Camera feed */}
                <div className="flex-1 flex flex-col">
                  <div className="relative w-full h-96 rounded-xl overflow-hidden mb-4">
                    <Image
                      src={camera.imageUrl}
                      alt={camera.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full">
                      <div className={`w-2 h-2 rounded-full ${
                        camera.status === 'active' ? 'bg-green-500' :
                        camera.status === 'inactive' ? 'bg-gray-500' :
                        'bg-yellow-500'
                      }`} />
                      <span className="text-xs text-white font-medium">
                        {camera.status === 'active' ? 'Live' : camera.status === 'inactive' ? 'Offline' : 'Maintenance'}
                      </span>
                    </div>
                  </div>
                  {camera.description && (
                    <p className="text-slate-300 text-sm">{camera.description}</p>
                  )}
                </div>

                {/* Details panel */}
                <div className="md:w-80">
                  <div className="space-y-6">
                    {/* Location */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Location</h3>
                      <div className="flex items-start gap-2">
                        <MapPin className="w-5 h-5 text-terracotta flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-white font-medium">{camera.location}</p>
                          <p className="text-slate-400 text-sm">
                            Coordinates: {camera.latitude.toFixed(3)}, {camera.longitude.toFixed(3)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Highway and Neighborhood */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Highway</h3>
                        <p className="text-white font-medium text-lg">{camera.highway}</p>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Area</h3>
                        <p className="text-white font-medium text-lg">{camera.neighborhood}</p>
                      </div>
                    </div>

                    {/* Last updated */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Last Updated</h3>
                      </div>
                      <p className="text-slate-300 text-sm">
                        {new Date(camera.lastUpdated).toLocaleString()}
                      </p>
                    </div>

                    {/* Status */}
                    <div>
                      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Status</h3>
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${
                          camera.status === 'active' ? 'bg-green-500' :
                          camera.status === 'inactive' ? 'bg-gray-500' :
                          'bg-yellow-500'
                        }`} />
                        <p className="text-white font-medium capitalize">{camera.status}</p>
                      </div>
                    </div>

                    {/* Camera type */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Radio className="w-4 h-4 text-slate-400" />
                        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Type</h3>
                      </div>
                      <p className="text-white font-medium capitalize">{camera.cameraType}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Related cameras - if any */}
              {relatedCameras.length > 0 && (
                <div className="border-t border-slate-700/30 p-6">
                  <h3 className="text-sm font-bold text-white mb-4">Nearby Cameras</h3>
                  <div className="flex gap-3 overflow-x-auto pb-2">
                    {relatedCameras.slice(0, 4).map((relatedCamera) => (
                      <motion.button
                        key={relatedCamera.id}
                        whileHover={{ scale: 1.05 }}
                        onClick={() => onRelatedCameraClick?.(relatedCamera)}
                        className="flex-shrink-0 relative w-24 h-24 rounded-lg overflow-hidden hover:ring-2 ring-terracotta transition-all"
                      >
                        <Image
                          src={relatedCamera.imageUrl}
                          alt={relatedCamera.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                        <p className="absolute bottom-1 left-1 right-1 text-xs text-white font-medium line-clamp-2">
                          {relatedCamera.name}
                        </p>
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
