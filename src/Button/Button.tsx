import React from 'react';

export interface ButtonPops {
  text: string;
}

export const Button = ({ text }: ButtonPops) => {
  return <button>{text}</button>
}
