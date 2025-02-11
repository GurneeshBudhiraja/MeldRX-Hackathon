import { User } from "lucide-react";
import React from "react";

function Header() {
  return (
    <div className="px-10 py-7 border-b shadow-[0px_4px_20px_-9px_black] flex justify-between items-center">
      <div className="text-lg">Logo</div>
      <User className="text-slate-200 border border-slate-200 bg-blue-600 p-1 rounded-full cursor-pointer" width={32} height={32} />
    </div>
  );
}

export default Header;
