
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";
import Footer from "../components/Footer/Footer";
import HospitalSearch from "../components/Hospital/HospitalSearch";
import HospitalTips from "../components/Hospital/HospitalTips";
import HospitalCallBack from "../components/Hospital/HospitalCallBack";

// Custom icon for hospitals
const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Hospital icon image
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const EmergencyMap = () => {
  const [position, setPosition] = useState([6.857, 7.383]); // Default coordinates (Nsukka)
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get user's current location and fetch nearby hospitals
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          fetchNearbyHospitals(latitude, longitude);
        },
        (err) => {
          console.error(err);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  }, []);

  // Fetch nearby hospitals from Google Places API
  const fetchNearbyHospitals = async (lat, lng) => {
    const apiKey = "YOUR_GOOGLE_PLACES_API_KEY"; // Replace with your Google Places API key
    const radius = 5000;
    const type = "hospital";
    
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;
    
    try {
      const response = await axios.get(url);
      const { results } = response.data;
      setHospitals(results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching hospitals:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="animate-spin h-12 w-12 border-t-4 border-blue-500 rounded-full"></div>
        <p className="mt-4 text-gray-600">Loading nearby medical facilities...</p>
      </div>
    );
  }

  return (
    <div className=" mx-4 md:mx-8 shadow-2xl"  >
    <div className="px-4  pt-8">
      <h1 className="text-2xl font-bold text-center mb-6">Find Nearby Medical Facilities</h1>
      <p className="text-lg text-center mb-6">
        Locate hospitals or clinics near your current location and get help quickly.
      </p>
      <HospitalSearch hospitals={hospitals} />
  
      
      <div className="mt-8 ">
        {/* Map Section */}
        <div className="w-full md:w-3/5 flex justify-center items-center mx-auto ">
          <MapContainer
            center={position}
            zoom={13}
            className="h-96 w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>Your current location</Popup>
            </Marker>

            {hospitals.map((hospital, index) => (
              <Marker
                key={index}
                position={[
                  hospital.geometry.location.lat,
                  hospital.geometry.location.lng,
                ]}
                icon={hospitalIcon}
              >
                <Popup>
                  <strong>{hospital.name}</strong>
                  <br />
                  Rating: {hospital.rating || "N/A"}
                  <br />
                  Address: {hospital.vicinity}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>

        {/* Hospitals List Section */}
        <div className="md:w-1/2  mt-3 md:mt-0 md:ml-2  flex md:items-center mx-auto flex-col">
          <h4 className="text-xl pt-4 font-semibold mb-2">Nearby Hospitals</h4>
          <div className="space-y-4">
            {hospitals.length === 0 ? (
              <p>No hospitals found</p>
            ) : (
              hospitals.map((hospital, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-100 rounded-lg shadow-md"
                >
                  <strong className="text-lg">{hospital.name}</strong>
                  <p>Address: {hospital.vicinity}</p>
                  <p>Rating: {hospital.rating || "N/A"}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          className="active hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => window.location.reload()}
        >
           Refresh Location & Hospitals 
        </button>
      </div>
      <HospitalTips />
      <HospitalCallBack />
  </div>
      <Footer />
      
    </div>
  );
};

export default EmergencyMap;
