import React from "react";

import { Resizable } from "re-resizable";

const ResizablePanel = ({ children, handleResize }) => {
  return (
    <Resizable
      defaultSize={{ width: 300, height: 200 }}
      className="border border-black p-4"
      minWidth={200}
      minHeight={100}
      maxWidth={450}
      maxHeight={200 * 2}
      onResize={handleResize}
    >
      {children}
    </Resizable>
  );
};

export default ResizablePanel;
