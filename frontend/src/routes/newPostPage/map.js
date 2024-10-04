import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons not appearing
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const Map = ({ marker, setMarker }) => {
  const [locationDetails, setLocationDetails] = useState(null);

  const fetchLocationDetails = async (lat, lng) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
      const data = await response.json();
      setLocationDetails(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching location details:', error);
    }
  };

  const MapClickHandler = () => {
    useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        setMarker([lat, lng]);
        fetchLocationDetails(lat, lng);
      },
    });
    return null;
  };

  return (
    <MapContainer center={[22.251558, 84.906109]} zoom={15} scrollWheelZoom={false} style={{ height: '100vh', width: '100%', marginTop: '10px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {marker && (
        <Marker position={marker}>
          <Popup>
            {locationDetails ? (
              <>
                <div><strong>Latitude:</strong> {marker[0]}</div>
                <div><strong>Longitude:</strong> {marker[1]}</div>
              </>
            ) : (
              <div>Loading...</div>
            )}
          </Popup>
        </Marker>
      )}
      <MapClickHandler />
    </MapContainer>
  );
};

export default Map;
