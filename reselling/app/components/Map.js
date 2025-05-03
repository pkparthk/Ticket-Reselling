/*
'use client';

import { useEffect } from 'react';

const MapPage = () => {
  useEffect(() => {
    const initMap = async () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=places&v=weekly`;
      script.async = true;
      script.defer = true;
      window.initMap = () => {
        const position = { lat: -25.344, lng: 131.031 };
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 4,
          center: position,
          mapId: "DEMO_MAP_ID",
        });

        new google.maps.Marker({
          position,
          map,
          title: "Uluru",
        });
      };
      document.head.appendChild(script);
    };
    initMap();
  }, []);

  return (
    <div>
      <h3>My Google Maps Demo</h3>
      <div id="map" style={{ height: '400px', width: '100%' }}></div>
    </div>
  );
};

export default MapPage;
*/