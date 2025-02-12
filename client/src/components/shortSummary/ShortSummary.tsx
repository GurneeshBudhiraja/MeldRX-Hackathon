import Button from "../button/Button";

function ShortSummary() {
  return (
    <div className=" bg-white shadow-lg p-4 max-w-6xl mx-auto my-8  px-7 py-5 rounded-md relative">
      {/* Ai generated summary about the patient */}
      <div>This is the AI generated summary of the the patient</div>
      {/* Button to get expanded summary */}
      <Button
        onClick={() => console.log("Clicked")}
        text="Get Full Analysis"
        className="bg-blue-600 text-slate-50 cursor-pointer  px-3 py-2 rounded-4xl drop-shadow-lg absolute right-5 bottom-4  hover:bg-blue-700"
      />
    </div>
  );
}

export default ShortSummary;
