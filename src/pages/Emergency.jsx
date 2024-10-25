
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";

// Custom icon for hospitals
const hospitalIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Hospital icon
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const EmergencyMap = () => {
  const [position, setPosition] = useState([6.857, 7.383]); // Default coordinates (Nsukka)
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to get the user's location and nearby hospitals
  const fetchLocationAndHospitals = () => {
    setLoading(true); // Start loading

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition([latitude, longitude]);
          fetchNearbyHospitals(latitude, longitude);
        },
        (err) => {
          console.error("Error with geolocation:", err);
          setLoading(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      setLoading(false);
    }
  };

  // Function to fetch nearby hospitals from Google Places API
  const fetchNearbyHospitals = async (lat, lng) => {
    const apiKey = "YOUR_GOOGLE_PLACES_API_KEY"; // Replace with your Google Places API key
    const radius = 5000; // Search radius in meters
    const type = "hospital";

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}&type=${type}&key=${apiKey}`;

    try {
      const response = await axios.get(url);
      const { results } = response.data;

      if (results.length === 0) {
        console.warn("No hospitals found nearby.");
      }

      setHospitals(results);
      setLoading(false); // Stop loading
    } catch (error) {
      console.error("Error fetching nearby hospitals:", error);
      setLoading(false);
    }
  };

  // Fetch location and hospitals on initial load
  useEffect(() => {
    fetchLocationAndHospitals()
  }, []);

const Emergency = () => {
  return (
    <div>Emergency</div>
  )
}

export default Emergency