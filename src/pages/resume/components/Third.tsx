import PDFViewer from "./PDFViewer";
import CustomPage from "./CustomPage";

function Third() {
  return (
    // <div className="bg-white p-5 rounded-lg shadow-lg md:w-[90%] h-[90%] mx-auto border-[1px] border-blue-950 overflow-auto">
      <PDFViewer>
        <CustomPage />
      </PDFViewer>
    // </div>
  );
}

export default Third;
