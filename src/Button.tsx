import React, { HTMLAttributes, ReactNode } from 'react';
import './Button.css'
export interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** Provide a text for the button */
  children: ReactNode;
}

export const Button = ({
  children,
  className = 'primary',
  ...props
}: Props) => {
  return (
    <button {...props} className={`button ${className}`}>
      {children}
    </button>
  );
};
