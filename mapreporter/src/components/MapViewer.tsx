import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapViewer.css'; // You'll create this for custom styling

// Fix Leaflet icon issues in React
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

interface MapViewerProps {
  center?: [number, number];
  zoom?: number;
}

const MapViewer = ({ 
  center = [40.7128, -74.0060], // Default to NYC
  zoom = 13 
}: MapViewerProps) => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  // Get user's location if they allow it
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation([
            position.coords.latitude,
            position.coords.longitude
          ]);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  return (
    <div className="map-container">
      <MapContainer 
        center={userLocation || center} 
        zoom={zoom} 
        zoomControl={false}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ZoomControl position="bottomright" />

        {/* Additional layers will be added here */}

      </MapContainer>
    </div>
  );
};

export default MapViewer;
