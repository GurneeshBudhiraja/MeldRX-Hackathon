import React from 'react';

function Button({
  text,
  children,
  className,
  onClick,
}: {
  text?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => any;
}) {
  return (
    <button className={className} onClick={onClick}>
      {!children ? text : children}
    </button>
  );
}

export default Button;
