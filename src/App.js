import React, { useRef, useState, useEffect } from 'react';
import { Map, MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { GenerateForm } from "./components/form/GenerateForm";
import { CreateNavBar } from "./components/nav-bar/CreateNavBar";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import About from "./pages/About";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const defaultCenter = [38.9072, -77.0369];
const defaultZoom = 8;
const disneyWorldLatLng = [28.3852, -81.5639];
const disneyLandLatLng = [33.8121, -117.9190];

function App() {
  
  {/*
  useEffect(() => {
    alert("yes");
    
    fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
      .then((response) => response.json())
      .then((response) => {
        alert(response.features[0].geometry.coordinates[0]);
        this.setMarkers(response.features);
      });
 
  }, []); */}

  const mapRef = useRef();

  /**
 * handleOnSetView
 */

  function handleOnSetView() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;
    map.setView(disneyWorldLatLng, 14);
  }

  /**
   * handleOnFlyTo
   */

  function handleOnFlyTo() {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    map.flyTo(disneyLandLatLng, 14, {
      duration: 2
    });
  }

  const [markers, setMarkers] = useState([[355, 234], [13, 34]]);

  return (
    <div className="App">
        <CreateNavBar />
        <Routes>
        {/* <Route exact path="/" element={<Homepage />}/>  */}
        <Route path="/about" element={<About />} />
        </Routes>
        <Map ref={mapRef} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {[[51.505, -0.09], [24.42, -32.24], [-34.45, -3.45]].map((x) => (
            <Marker
              position={[x[1], x[0]]}>
              <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
            </Marker>
          ))} 
        </Map>
        <div className="sidebar">
          <h2>Disney World</h2>
          <p>
            Bay Lake, FL
          </p>
          <ul>
            <li>Lat: 28.3852</li>
            <li>Long: -81.5639</li>
          </ul>
          <p>
            <button onClick={handleOnSetView}>
              Set View to Disney World
            </button>
          </p>
          <h2>Disneyland</h2>
          <p>
            Anaheim, CA
          </p>
          <ul>
            <li>Lat: 33.8121</li>
            <li>Long: -117.9190</li>
          </ul>
          <p>
            <button onClick={handleOnFlyTo}>
              Fly to Disneyland
            </button>
          </p>
        </div>
    </div>
  )
}

export default App;
