import React from "react";
import Map from "src/components/map/Map";

import { withLayout } from "src/components/layout/withLayout";
import { WasteTakePoint } from "src/types/wasteTakePoint";
import { WasteTakePointsApi } from "src/api/wasteTakePoints";

interface State {
  points: WasteTakePoint[];
}

class Main extends React.Component<{}, State> {
  state = {
    points: []
  };

  async componentDidMount() {
    const { data: points } = await WasteTakePointsApi.fetchPoints();
    this.setState({ points });
  }

  render() {
    const { points } = this.state;
    return <Map points={points} />;
  }
}

export default withLayout("Dashboard")(Main);
