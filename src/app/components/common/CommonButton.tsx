import React, { MouseEvent } from "react";

interface buttonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}
const CommonButton: React.FC<buttonProps> = ({
  children,
  className,
  onClick,
  disabled,
}) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default CommonButton;
