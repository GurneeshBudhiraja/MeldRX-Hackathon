import React from "react";
import Button from "../button/Button";

function ShortSummary() {
  return (
    <div className="max-w-6xl mx-auto my-8 border border-blue-800 h-1/5 px-7 py-5 rounded-md relative">
      {/* Ai generated summary about the patient */}
      <div>This will be the AI generated summary of the the patient</div>
      {/* Button to get expanded summary */}
      <Button
        onClick={() => console.log("Clicked")}
        text="Get Full Analysis"
        className="bg-blue-600 text-slate-50 cursor-pointer  px-3 py-2 rounded-4xl border border-zinc-800 drop-shadow-lg absolute right-10 bottom-4 hover:bg-blue-700 active:bg-blue-700/80"
      />
    </div>
  );
}

export default ShortSummary;
