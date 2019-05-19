import React from "react";
import ReactDOMServer from "react-dom/server";
import MarkerClusterGroup from "react-leaflet-markercluster";
import "react-leaflet-markercluster/dist/styles.min.css";
import { css } from "@emotion/core";
import { CircularProgress } from "@material-ui/core";
import { connect } from "react-redux";

import { TileLayer, Marker, Popup } from "react-leaflet";
import Leaflet, { LatLng } from "leaflet";
import { MyLocationTwoTone, WhereToVote } from "@material-ui/icons";

import { Map } from "./Map.elements";
import Fab from "src/components/ui/Fab";
import MapWasteTakePoint from "./MapWasteTakePoint";
import { WasteTakePoint } from "src/types/wasteTakePoint";
import "./index.css";
import { GoogleGeocodingApi } from "src/api/gis";
import { getGeolocation } from "src/helpers/gis";
import { AppState } from "src/types/appState";
import { User } from "src/types/user";

interface MapProps {
  points: WasteTakePoint[];
  user?: User;
}

interface State {
  position: [number, number];
  address: any;
}

export default class MyMap extends React.Component<MapProps, State> {
  state: State = {
    position: [55.78874, 49.12214],
    address: {}
  };

  map: React.RefObject<any> = React.createRef();

  async componentDidMount() {
    const position: [number, number] = await this.getGeolocation();
    // @ts-ignore
    this.setState({ position });
  }

  getGeolocation = async () => {
    const { user } = this.props;
    // @ts-ignore
    let position: [number, number] = [];
    if (user) {
      if (user.currentLocation)
        position = [
          user.currentLocation.latitude,
          user.currentLocation.longitude
        ];
    } else {
      const { latitude, longitude } = await getGeolocation();
      position = [latitude, longitude];
    }
    // @ts-ignore
    return position;
  };

  handleClickToLocation = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const [latitude, longitude] = await this.getGeolocation();
    if (this.map.current) {
      this.map.current.leafletElement.panTo(new LatLng(latitude, longitude));
    }
  };

  handleMarkerClick = async (point: WasteTakePoint) => {
    if (!this.state.address[point.id]) {
      const { location } = point;
      const { latitude, longitude } = location;
      const result = await GoogleGeocodingApi.getAddressByCoord({
        latitude,
        longitude
      });
      this.setState(({ address }) => ({
        address: {
          ...address,
          [point.id]: result
        }
      }));
    }
  };

  render() {
    const { position, address } = this.state;
    return (
      <>
        <Map
          ref={this.map}
          preferCanvas={true}
          center={position}
          zoom={18}
          maxZoom={19}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker
            position={position}
            icon={Leaflet.divIcon({
              html: ReactDOMServer.renderToString(
                <WhereToVote style={{ color: "#e53935" }} />
              ),
              iconSize: [20, 20],
              className: css`
                background: transparent;
              ` as any
            })}
          />
          <MarkerClusterGroup>
            {this.props.points.map(point => {
              const { location } = point;
              const { latitude, longitude } = location;
              return (
                <Marker
                  key={point.id}
                  onClick={async () => await this.handleMarkerClick(point)}
                  position={[latitude, longitude]}
                  icon={Leaflet.divIcon({
                    html: ReactDOMServer.renderToString(
                      <MapWasteTakePoint point={point} />
                    ),
                    iconSize: [20, 20],
                    className: css`
                      background: transparent;
                    ` as any
                  })}
                >
                  <Popup>
                    <p>{point.name}</p>
                    {address[point.id] ? (
                      <p>{address[point.id]}</p>
                    ) : (
                      <CircularProgress
                        size={24}
                        thickness={4}
                        style={{ animationDuration: "550ms" }}
                        disableShrink
                        variant="indeterminate"
                      />
                    )}
                  </Popup>
                </Marker>
              );
            })}
          </MarkerClusterGroup>
        </Map>
        <Fab color="primary" onClick={this.handleClickToLocation}>
          <MyLocationTwoTone />
        </Fab>
      </>
    );
  }
}
