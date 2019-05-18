import React from "react";

import layouts from "./";

export function withLayout<ComponentProps>(name: keyof typeof layouts) {
  const Layout = layouts[name];
  return (Component: React.ComponentType<ComponentProps>) => (
    props: ComponentProps
  ) => (
    <Layout>
      <Component {...props} />
    </Layout>
  );
}
