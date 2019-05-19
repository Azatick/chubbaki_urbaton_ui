import React from "react";
import Map from "src/components/map/Map";

import { withLayout } from "src/components/layout/withLayout";
import { WasteTakePoint } from "src/types/wasteTakePoint";
import { WasteTakePointsApi } from "src/api/wasteTakePoints";
import { connect } from "react-redux";

import GuideModal from "./GuideModal";
import { LatLng } from "leaflet";
import { User } from "src/types/user";
import { AppState } from "src/types/appState";

interface Props {
  user?: User;
}

interface State {
  points: WasteTakePoint[];
}

class Main extends React.Component<Props, State> {
  state = {
    points: []
  };

  map: any = React.createRef();

  async componentDidMount() {
    const { data: points } = await WasteTakePointsApi.fetchPoints();
    this.setState({ points });
  }

  showOnMap = (wasteTakePoint: WasteTakePoint) => {
    this.setState({ points: [wasteTakePoint] });
    const { location } = wasteTakePoint;
    this.map.current &&
      this.map.current.map.current.leafletElement.panTo(
        new LatLng(location.latitude, location.longitude)
      );
  };

  render() {
    const { points } = this.state;
    console.log(this.map.current);
    return (
      <>
        <Map ref={this.map} user={this.props.user} points={points} />
        <GuideModal showOnMap={this.showOnMap} />
      </>
    );
  }
}

export default withLayout("Dashboard")(
  connect(
    (state: AppState) => ({
      user: state.auth.user
    }),
    null
  )(Main)
);
