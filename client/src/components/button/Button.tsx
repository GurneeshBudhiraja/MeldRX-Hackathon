import React from "react";

function Button({
  text,
  className,
  onClick,
}: {
  text: string;
  className?: string;
  onClick?: () => any;
}) {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
