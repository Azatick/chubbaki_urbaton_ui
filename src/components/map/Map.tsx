import React, { useEffect, useState } from "react";

import { TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";

import { Map } from "./Map.elements";

export default () => {
  const [position, setPosition] = useState<[number, number]>([
    55.78874,
    49.12214
  ]);

  function getGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const { coords } = position;
        setPosition([coords.latitude, coords.longitude]);
      });
    } else throw new Error("Геолокация не поддерживается данным браузером.");
  }

  useEffect(() => {
    getGeolocation();
  }, []);

  return (
    <Map center={position} zoom={17}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Fab>
        <Add />
      </Fab>
    </Map>
  );
};
