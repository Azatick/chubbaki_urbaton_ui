import { Main, Login } from "src/containers";
import { RouteComponent } from "src/types/routing";

export default [
  {
    path: "/",
    component: Main
  },
  {
    path: "/login",
    component: Login
  }
] as RouteComponent[];
