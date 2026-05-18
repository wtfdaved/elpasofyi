export interface Camera {
  id: string;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  highway: 'I-10' | 'US-54' | 'Loop-375' | 'Other';
  neighborhood: 'Westside' | 'Eastside' | 'Central' | 'Northeast' | 'Other';
  imageUrl: string;
  videoFeedUrl?: string;
  lastUpdated: string;
  status: 'active' | 'inactive' | 'maintenance';
  cameraType: 'traffic' | 'weather' | 'incident';
  description?: string;
}

export interface CameraFilter {
  highways: string[];
  neighborhoods: string[];
  status: 'all' | 'active' | 'inactive';
}

export interface DriveTexasFeature {
  properties: {
    id?: string;
    name: string;
    location?: string;
    lat: number;
    lon: number;
    imageUrl?: string;
    description?: string;
  };
  geometry?: {
    coordinates: [number, number];
  };
}

export interface DriveTexasResponse {
  type: string;
  features: DriveTexasFeature[];
}
