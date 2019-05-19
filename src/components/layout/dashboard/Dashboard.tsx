import React, { useRef, useEffect, useState } from "react";

import { Wrapper, Content } from "./Dashboard.elements";
import Header from "./Header";
import Sidebar from "./Sidebar";

interface IDashboardProps {
  children: React.ReactNode;
}

export const Dashboard = ({ children }: IDashboardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.clientHeight);
    }
  }, []);

  return (
    <Wrapper>
      <Header ref={ref} />
      <Content headerHeight={headerHeight}>{children}</Content>
    </Wrapper>
  );
};
