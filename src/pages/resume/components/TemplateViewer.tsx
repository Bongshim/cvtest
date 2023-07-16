import { useLayoutEffect, useRef, useState } from "react";
import { Previewer } from "pagedjs";
import Template from "./Template";
import "./templateViewer.css"

const TemplateViewer = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);

  useLayoutEffect(() => {
    const previewer = new Previewer();

    if (rootRef.current && previewRef.current) {
      const rootElement = rootRef.current;
      const previewElement = previewRef.current;

      previewer
        .preview(rootElement.innerHTML, [], previewElement)
        .then((flow: any) => {
          // console.log("preview rendered, total pages", flow.total, { flow });
        });
    }

    return () => {
      document.head
        .querySelectorAll("[data-pagedjs-inserted-styles]")
        .forEach((e) => e.parentNode?.removeChild(e));
    };
  }, []);

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    if (scale > 0.1) {
      setScale(scale - 0.1);
    }
  };

  const previewStyles = {
    transform: `scale(${scale})`,
    transformOrigin: "top left",
  };

  return (
    <div>
      <div>
        <button onClick={handleZoomIn}>Zoom In</button>
        <button onClick={handleZoomOut}>Zoom Out</button>
      </div>
      <div id="pagedjsdocroot" ref={rootRef} style={{ display: "none" }}>
        {/* Book content */}
        <Template />
      </div>
      <div id="preview" ref={previewRef} style={previewStyles}></div>
    </div>
  );
};

export default TemplateViewer;
