import React from "react";

import layouts from "./";

export function withLayout<ComponentProps = {}>(name: keyof typeof layouts) {
  const Layout = layouts[name];
  return (Component: React.ComponentType<ComponentProps>) =>
    class extends React.Component<ComponentProps> {
      render() {
        return (
          <Layout>
            <Component {...this.props} />
          </Layout>
        );
      }
    };
}
