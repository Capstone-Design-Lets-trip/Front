import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from './Header';

import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

function Map() {
  const center = useMemo(() => ({lat: 40.7578861, lng: -73.9856162}),[]);
  return (
    <GoogleMap
      zoom={10}
      center={center}
      mapContainerClassName="map-container"
    >
      <Marker position={{ lat: 40.7578861, lng: -73.9856162 }}/>
      <Marker position={{ lat: 40.7586653, lng: -73.9786868 }}/>
    </GoogleMap>
  );
}

function MainPage(){
    return (
        <div>
          <Header/>
          <div className="setcenter"><Map/></div>
        </div>
      );
}

export default MainPage;