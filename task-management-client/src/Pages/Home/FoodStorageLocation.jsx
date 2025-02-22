import 'leaflet/dist/leaflet.css';
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix the default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

// Array of food storage locations in Bangladesh
const foodStorageLocations = [
  { id: 1, name: "Central Food Storage, Dhaka", position: [23.8103, 90.4125] },
  { id: 2, name: "Chittagong Food Storage", position: [22.3569, 91.7832] },
  { id: 3, name: "Khulna Food Warehouse", position: [22.8456, 89.5403] },
  { id: 4, name: "Sylhet Food Depot", position: [24.8949, 91.8687] },
  { id: 5, name: "Rajshahi Storage Facility", position: [24.3745, 88.6042] },
  { id: 6, name: "Barisal Food Storage", position: [22.7010, 90.3535] },
  { id: 7, name: "Rangpur Food Storage", position: [25.7439, 89.2752] },
  { id: 8, name: "Mymensingh Food Depot", position: [24.7471, 90.4203] },
];

const Food = () => {
  return (
    <div className="mb-4 md:mb-10 lg:mb-16">
      <h2 className="text-3xl lg:text-4xl text-center mb-4 lg:mb-8 font-semibold">Food Storage Locations in Bangladesh</h2>
      <p className="text-center text-gray-600">Please click on a location icon to see details</p>
      <div className="map-container" style={{ height: "400px", width: "100%", marginTop: "20px" }}>
        <MapContainer center={[23.6850, 90.3563]} zoom={7} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
          {/* Tile Layer for Map */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Add Markers for Food Storage Locations */}
          {foodStorageLocations.map((location) => (
            <Marker key={location.id} position={location.position}>
              <Popup>{location.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Food;
