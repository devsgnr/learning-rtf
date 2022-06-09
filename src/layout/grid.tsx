import React from "react";

interface GridProps {
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ children }: GridProps) => {
  const GridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    position: "fixed",
  };

  return <div style={GridStyle}>{children}</div>;
};

export default Grid;
