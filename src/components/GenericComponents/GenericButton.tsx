import React from 'react';

interface Props {
  buttonType: "button" | "slider" | "radio" | "checkbox";
  placeholder?: string;
}

const GenericButton: React.FC<Props> = ({ placeholder, buttonType }) => {
  return (
    <div>
      <p>Button</p>
    </div>
  );
};

export default GenericButton;
