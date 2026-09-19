import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const patients = [
  {
    id: 1,
    name: "John",
    disease: "Healthy",
    position: [28.6139, 77.2090],
  },
  {
    id: 2,
    name: "Sara",
    disease: "Flu",
    position: [28.7041, 77.1025],
  },
  {
    id: 3,
    name: "David",
    disease: "Common Cold",
    position: [28.5355, 77.3910],
  },
];

function CommunityMap() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Community Health Map</h2>

      <MapContainer
        center={[28.6139, 77.2090]}
        zoom={10}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution="OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {patients.map((patient) => (
          <Marker
            key={patient.id}
            position={patient.position}
          >
            <Popup>
              <b>{patient.name}</b>
              <br />
              {patient.disease}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default CommunityMap;