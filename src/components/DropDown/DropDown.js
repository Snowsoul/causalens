import React from "react";
import DropDownStyled from "./DropDown.styled";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function formatSeries(series = []) {
  return series.map((item, index) => ({ value: index, label: item }));
}

function DropDown({ series: { list, fetching }, onSelect }) {
  return (
    <DropDownStyled>
      <Select
        placeholder={fetching ? "Loading Series..." : "Select Series"}
        className="react-select-container"
        classNamePrefix="react-select"
        options={formatSeries(list)}
        onChange={(item) => {
          onSelect({ item: item.label, index: item.value });
        }}
      />
    </DropDownStyled>
  );
}

export default DropDown;
