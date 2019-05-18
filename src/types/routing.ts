import { RouteComponentProps } from "@reach/router";
import layouts from "src/components/layout";

export interface RouteComponent {
  path: string;
  layout?: keyof typeof layouts;
  component: React.ComponentType<RouteComponentProps>;
}
