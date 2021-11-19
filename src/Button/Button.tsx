import React, { FC } from 'react';

export interface ButtonProps {
  color: 'primary' | 'highlight';
}

export const Button: FC<ButtonProps> = ({ children }) => {
  return <button>{children}</button>
}
