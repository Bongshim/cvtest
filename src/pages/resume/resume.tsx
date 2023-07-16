import Second from "./components/Second";
import TemplateViewer from "./components/TemplateViewer";
import Third from "./components/Third";

function Resume() {
  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden">
      <div className="p-10 h-full ">
        <Third />
      </div>
      <div className="p-10 h-full bg-[#94a3b8] overflow-auto">
        <div className="">
          {/* <TemplateViewer /> */}
        </div>
      </div>
    </div>
  );
}

export default Resume;
