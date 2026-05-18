'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchElPasoCameras } from '@/app/actions/cameras';
import { Camera, CameraFilter } from '@/app/lib/types';
import CameraGrid from './components/CameraGrid';
import CameraModal from './components/CameraModal';
import FilterSidebar from './components/FilterSidebar';
import { Wifi, AlertCircle } from 'lucide-react';

export default function CamerasPage() {
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [filteredCameras, setFilteredCameras] = useState<Camera[]>([]);
  const [filters, setFilters] = useState<CameraFilter>({
    highways: [],
    neighborhoods: [],
    status: 'all',
  });
  const [selectedCamera, setSelectedCamera] = useState<Camera | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch cameras on mount
  useEffect(() => {
    async function loadCameras() {
      try {
        setLoading(true);
        const data = await fetchElPasoCameras();
        setCameras(data);
        setFilteredCameras(data);
        setError(null);
      } catch (err) {
        console.error('Failed to load cameras:', err);
        setError('Failed to load camera data. Please try again later.');
      } finally {
        setLoading(false);
      }
    }
    loadCameras();
  }, []);

  // Apply filters
  useEffect(() => {
    const filtered = cameras.filter((camera) => {
      const highwayMatch =
        filters.highways.length === 0 || filters.highways.includes(camera.highway);
      const neighborhoodMatch =
        filters.neighborhoods.length === 0 || filters.neighborhoods.includes(camera.neighborhood);
      const statusMatch = filters.status === 'all' || camera.status === filters.status;

      return highwayMatch && neighborhoodMatch && statusMatch;
    });

    setFilteredCameras(filtered);
  }, [filters, cameras]);

  // Get related cameras (same highway or neighborhood)
  const getRelatedCameras = (camera: Camera): Camera[] => {
    return cameras
      .filter(
        (c) =>
          c.id !== camera.id &&
          (c.highway === camera.highway || c.neighborhood === camera.neighborhood)
      )
      .slice(0, 4);
  };

  const handleFilterChange = (newFilters: CameraFilter) => {
    setFilters(newFilters);
  };

  const handleCameraClick = (camera: Camera) => {
    setSelectedCamera(camera);
  };

  const handleCloseModal = () => {
    setSelectedCamera(null);
  };

  const handleRelatedCameraClick = (camera: Camera) => {
    setSelectedCamera(camera);
  };

  return (
    <div className="dark-gradient-bg min-h-screen text-white">
      {/* Header Section */}
      <div className="sticky top-0 z-30 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold font-lora mb-2">
                  Live Traffic Cameras
                </h1>
                <p className="text-slate-400 text-lg">
                  Real-time traffic monitoring for El Paso highways and neighborhoods
                </p>
              </motion.div>
            </div>
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="ml-6 flex-shrink-0"
            >
              <Wifi className="w-8 h-8 text-green-500" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Error state */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8"
        >
          <div className="glass-card p-6 flex items-start gap-4 border-l-4 border-yellow-500">
            <AlertCircle className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold mb-1">Unable to load camera data</h3>
              <p className="text-slate-300 text-sm">{error}</p>
            </div>
          </div>
        </motion.div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              cameraCount={filteredCameras.length}
            />
          </div>

          {/* Grid */}
          <div className="flex-1">
            <CameraGrid
              cameras={filteredCameras}
              onCameraClick={handleCameraClick}
              isLoading={loading}
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      <CameraModal
        camera={selectedCamera}
        onClose={handleCloseModal}
        relatedCameras={selectedCamera ? getRelatedCameras(selectedCamera) : []}
        onRelatedCameraClick={handleRelatedCameraClick}
      />
    </div>
  );
}
