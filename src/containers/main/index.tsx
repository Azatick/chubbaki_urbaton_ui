import React from "react";
import Map from "src/components/map/Map";

import { withLayout } from "src/components/layout/withLayout";

const Main = () => <Map />;

export default withLayout("Dashboard")(Main);
