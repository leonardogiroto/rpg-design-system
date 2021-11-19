import React, { FC } from 'react';
import './Button.css';

export interface ButtonProps {
  color: 'primary' | 'highlight';
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button className="root">{children}</button>
}
