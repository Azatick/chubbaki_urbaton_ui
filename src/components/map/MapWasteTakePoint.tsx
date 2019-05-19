import React, { memo } from "react";

import { Marker } from "./MapWasteTakePoint.elements";
import { WasteTakePoint } from "src/types/wasteTakePoint";

interface Props {
  point: WasteTakePoint;
}

export default memo(({ point }: Props) => {
  return <Marker fontSize="default" />;
});
