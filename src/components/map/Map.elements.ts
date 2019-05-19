import styled from "@emotion/styled";
import { Map as LMap } from "react-leaflet";

export const Map = (styled(LMap)`
  width: 100% !important;
  min-height: 100% !important;
` as unknown) as typeof LMap;
