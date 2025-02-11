import React from "react";

const PATIENT = "John Doe";
function MainContent() {
  return (
    <div className="px-10 mt-10">
      <p>
        You are currently viewing for <span className="text-blue-600">{PATIENT}</span>{" "}
      </p>
    </div>
  );
}

export default MainContent;
