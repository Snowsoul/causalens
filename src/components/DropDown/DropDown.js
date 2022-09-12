import React from "react";
import DropDownStyled from "./DropDown.styled";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function DropDown() {
  return (
    <DropDownStyled>
      <Select
        className="react-select-container"
        classNamePrefix="react-select"
        options={options}
      />
    </DropDownStyled>
  );
}

export default DropDown;
