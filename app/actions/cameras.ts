'use server';

import { Camera, DriveTexasResponse, DriveTexasFeature } from '@/app/lib/types';
import { MOCK_CAMERAS, getFallbackMockCameras } from '@/app/lib/mockCameraData';

// El Paso geographic bounds (approximate)
const EL_PASO_BOUNDS = {
  north: 32.05,
  south: 31.6,
  east: -106.2,
  west: -106.75,
};

function isElPasoLocation(lat: number, lon: number): boolean {
  return (
    lat >= EL_PASO_BOUNDS.south &&
    lat <= EL_PASO_BOUNDS.north &&
    lon >= EL_PASO_BOUNDS.west &&
    lon <= EL_PASO_BOUNDS.east
  );
}

function parseHighway(name: string): 'I-10' | 'US-54' | 'Loop-375' | 'Other' {
  const normalizedName = name.toUpperCase();

  if (normalizedName.includes('I-10') || normalizedName.includes('I 10')) {
    return 'I-10';
  }
  if (normalizedName.includes('US-54') || normalizedName.includes('US 54')) {
    return 'US-54';
  }
  if (normalizedName.includes('LOOP 375') || normalizedName.includes('LOOP-375')) {
    return 'Loop-375';
  }

  return 'Other';
}

function parseNeighborhood(location: string): 'Westside' | 'Eastside' | 'Central' | 'Northeast' | 'Other' {
  const normalizedLocation = location.toUpperCase();

  // Westside indicators
  if (
    normalizedLocation.includes('WEST') ||
    normalizedLocation.includes('SUNLAND') ||
    normalizedLocation.includes('ANTHONY')
  ) {
    return 'Westside';
  }

  // Eastside indicators
  if (
    normalizedLocation.includes('EAST') ||
    normalizedLocation.includes('YARBROUGH') ||
    normalizedLocation.includes('EXECUTIVE') ||
    normalizedLocation.includes('AIRWAY')
  ) {
    return 'Eastside';
  }

  // Northeast indicators
  if (normalizedLocation.includes('NORTHEAST') || normalizedLocation.includes('YARB')) {
    return 'Northeast';
  }

  // Central/Downtown indicators
  if (
    normalizedLocation.includes('DOWNTOWN') ||
    normalizedLocation.includes('CENTRAL') ||
    normalizedLocation.includes('OREGON') ||
    normalizedLocation.includes('MESA') ||
    normalizedLocation.includes('MONTANA')
  ) {
    return 'Central';
  }

  return 'Other';
}

function transformToCamera(feature: DriveTexasFeature, index: number): Camera {
  const { properties } = feature;

  return {
    id: properties.id || `camera-${index}`,
    name: properties.name,
    location: properties.location || 'Unknown Location',
    latitude: properties.lat,
    longitude: properties.lon,
    highway: parseHighway(properties.name),
    neighborhood: parseNeighborhood(properties.location || properties.name),
    imageUrl: properties.imageUrl || 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80',
    lastUpdated: new Date().toISOString(),
    status: 'active',
    cameraType: 'traffic',
    description: properties.description,
  };
}

export async function fetchElPasoCameras(): Promise<Camera[]> {
  try {
    // Attempt to fetch from DriveTexas API
    const response = await fetch('https://driveTexas.org/api/cameras', {
      next: { revalidate: 300 }, // ISR: revalidate every 5 minutes
      headers: {
        'User-Agent': 'elpaso.fyi-traffic-dashboard/1.0',
      },
    });

    if (!response.ok) {
      console.warn(`DriveTexas API returned status ${response.status}. Using mock data.`);
      return getFallbackMockCameras();
    }

    const data: DriveTexasResponse = await response.json();

    if (!data.features || !Array.isArray(data.features)) {
      console.warn('Invalid DriveTexas response format. Using mock data.');
      return getFallbackMockCameras();
    }

    // Filter cameras by El Paso region
    const elPasoCameras = data.features
      .filter((feature) => {
        if (!feature.properties) return false;

        const lat = feature.properties.lat || feature.geometry?.coordinates[1];
        const lon = feature.properties.lon || feature.geometry?.coordinates[0];

        if (typeof lat !== 'number' || typeof lon !== 'number') {
          return false;
        }

        return isElPasoLocation(lat, lon);
      })
      .map((feature, index) => transformToCamera(feature, index))
      .slice(0, 50); // Limit to 50 cameras

    // If we found cameras, return them; otherwise fall back to mock
    if (elPasoCameras.length > 0) {
      console.log(`Loaded ${elPasoCameras.length} cameras from DriveTexas`);
      return elPasoCameras;
    }

    console.warn('No El Paso cameras found from DriveTexas. Using mock data.');
    return getFallbackMockCameras();
  } catch (error) {
    console.error('Failed to fetch from DriveTexas API:', error);
    // Return mock data as fallback
    return getFallbackMockCameras();
  }
}
