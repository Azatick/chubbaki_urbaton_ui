import styled from "@emotion/styled";
import { Map as LMap } from "react-leaflet";

export const Map = (styled(LMap)`
  width: 100%;
  min-height: 100%;
` as unknown) as typeof LMap;
