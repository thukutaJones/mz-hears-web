"use client";

import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapView = ({
  selectedLocation,
  handleClose,
}: {
  selectedLocation: any;
  handleClose: any;
}) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-screen flex justify-center items-center overflow-hidden z-70"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onClick={handleClose}
    >
      <div
        className="w-[90%] md:w-[35%] shadow-lg rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-[400px] rounded-xl overflow-hidden shadow">
          <MapContainer
            center={[selectedLocation.lat, selectedLocation.lng]}
            zoom={14}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[selectedLocation.lat, selectedLocation.lng]}>
              <Popup>Emergency Location</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapView;
