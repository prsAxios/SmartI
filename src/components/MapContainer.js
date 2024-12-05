import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const MapContainer = () => {
  const mapRef = useRef(null);
  const infoRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    if (mapRef.current && !mapRef.current._leaflet_id) {
      const map = L.map(mapRef.current).setView([19.2, 72.8], 13);

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CartoDB</a>',
      }).addTo(map);

      const customIcon = L.icon({
        iconUrl: 'https://img.icons8.com/ios-filled/50/ffffff/marker.png',
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      L.marker([19.2, 72.8], { icon: customIcon }).addTo(map)
        .bindPopup('Smart i Electronics Systems Pvt. Ltd.')
        .openPopup();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen relative bg-gray-800">
      <div
        ref={infoRef}
        className={`info-box absolute p-8 w-[90%] md:w-[60%] lg:w-[50%] bg-gray-200 bg-opacity-80 backdrop-blur-xl text-black
          ${isMobile ? 'top-auto bottom-0 w-full h-[40%] rounded-tl-lg rounded-tr-lg' : 'top-20 left-10 h-[80%]'}`}
        style={{
          zIndex: 1000,
          boxShadow: '0 4px 25px rgba(0, 0, 0, 0)',
          clipPath: isMobile ? 'none' : 'polygon(0 0, 100% 0%, 85% 100%, 0% 100%)'
        }}
      >
        <h2 className="text-5xl font-bold text-center mb-6 text-gray-800">Headquarter</h2>
        <p className="text-xl text-center mb-8 px-4">
          Smart i Electronics Systems Pvt. Ltd.<br />
          Bhumi World Industrial Park, Building No D-7, Units No 250,251 & 252,
          Pimplas, Bhiwandi, Thane – 421302, Maharashtra, INDIA
        </p>
        <div className="contact-info text-center">
          <p className="text-lg font-semibold mb-4"><FaPhoneAlt className="inline mr-2" /> (+91)-02522-661513/2</p>
          <a
            href="https://www.google.com/maps?q=19.2,72.8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-xl hover:text-blue-700 transition-colors duration-300"
          >
            <FaMapMarkerAlt className="inline mr-2" /> View on Google Maps
          </a>
        </div>
      </div>

      <div
        ref={mapRef}
        style={{ width: '100%', height: '100%' }}
      ></div>
    </div>
  );
};

export default MapContainer;
