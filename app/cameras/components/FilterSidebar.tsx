'use client';

import { motion } from 'framer-motion';
import { CameraFilter } from '@/app/lib/types';
import { ChevronDown, RotateCcw } from 'lucide-react';
import { useState } from 'react';

interface FilterSidebarProps {
  filters: CameraFilter;
  onFilterChange: (filters: CameraFilter) => void;
  cameraCount: number;
}

const HIGHWAYS = ['I-10', 'US-54', 'Loop-375'];
const NEIGHBORHOODS = ['Westside', 'Eastside', 'Central', 'Northeast'];

export default function FilterSidebar({
  filters,
  onFilterChange,
  cameraCount,
}: FilterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const activeFilterCount = filters.highways.length + filters.neighborhoods.length;

  const handleHighwayToggle = (highway: string) => {
    const newHighways = filters.highways.includes(highway)
      ? filters.highways.filter(h => h !== highway)
      : [...filters.highways, highway];
    onFilterChange({ ...filters, highways: newHighways });
  };

  const handleNeighborhoodToggle = (neighborhood: string) => {
    const newNeighborhoods = filters.neighborhoods.includes(neighborhood)
      ? filters.neighborhoods.filter(n => n !== neighborhood)
      : [...filters.neighborhoods, neighborhood];
    onFilterChange({ ...filters, neighborhoods: newNeighborhoods });
  };

  const handleStatusChange = (status: 'all' | 'active' | 'inactive') => {
    onFilterChange({ ...filters, status });
  };

  const handleReset = () => {
    onFilterChange({
      highways: [],
      neighborhoods: [],
      status: 'all',
    });
  };

  return (
    <>
      {/* Mobile toggle button */}
      <div className="md:hidden mb-4">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsOpen(!isOpen)}
          className="glass-card w-full p-4 flex items-center justify-between"
        >
          <span className="text-white font-medium flex items-center gap-2">
            Filters
            {activeFilterCount > 0 && (
              <span className="bg-terracotta text-white text-xs font-bold px-2 py-1 rounded-full">
                {activeFilterCount}
              </span>
            )}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-white" />
          </motion.div>
        </motion.button>
      </div>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:height-auto md:opacity-100 overflow-hidden md:overflow-visible mb-6 md:mb-0 md:sticky md:top-0 md:h-screen"
      >
        <div className="glass-card p-6 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-bold text-lg">Filters</h2>
            {activeFilterCount > 0 && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReset}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Reset filters"
              >
                <RotateCcw className="w-4 h-4 text-terracotta" />
              </motion.button>
            )}
          </div>

          {/* Camera count */}
          <p className="text-slate-400 text-sm mb-6">
            Showing <span className="text-white font-medium">{cameraCount}</span> cameras
          </p>

          {/* Highways */}
          <div className="mb-8">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider text-slate-300">
              Highways
            </h3>
            <div className="space-y-2">
              {HIGHWAYS.map((highway) => (
                <label key={highway} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.highways.includes(highway)}
                    onChange={() => handleHighwayToggle(highway)}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-terracotta focus:ring-terracotta cursor-pointer"
                  />
                  <span className="text-white group-hover:text-terracotta transition-colors">
                    {highway}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Neighborhoods */}
          <div className="mb-8">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider text-slate-300">
              Neighborhoods
            </h3>
            <div className="space-y-2">
              {NEIGHBORHOODS.map((neighborhood) => (
                <label key={neighborhood} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={filters.neighborhoods.includes(neighborhood)}
                    onChange={() => handleNeighborhoodToggle(neighborhood)}
                    className="w-4 h-4 rounded border-slate-600 bg-slate-700 text-terracotta focus:ring-terracotta cursor-pointer"
                  />
                  <span className="text-white group-hover:text-terracotta transition-colors">
                    {neighborhood}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Status */}
          <div className="mb-8">
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider text-slate-300">
              Status
            </h3>
            <div className="space-y-2">
              {(['all', 'active', 'inactive'] as const).map((status) => (
                <label key={status} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="radio"
                    name="status"
                    checked={filters.status === status}
                    onChange={() => handleStatusChange(status)}
                    className="w-4 h-4 rounded-full border-slate-600 bg-slate-700 text-terracotta focus:ring-terracotta cursor-pointer"
                  />
                  <span className="text-white group-hover:text-terracotta transition-colors capitalize">
                    {status}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Reset button for mobile */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="md:hidden w-full py-2 px-4 bg-terracotta text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Reset Filters
          </motion.button>
        </div>
      </motion.aside>
    </>
  );
}
