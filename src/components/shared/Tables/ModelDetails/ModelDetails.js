import React from "react";
import ModelDetailsStyled, {
  ModelDetailsTableStyled,
} from "./ModelDetails.styled";

function ModelDetails({ data, title = "Add Table Title", headers = [] }) {
  if (!data) return <ModelDetailsStyled />;

  const table = data;
  return (
    <ModelDetailsStyled>
      {title}
      <ModelDetailsTableStyled>
        <tr>
          {headers.map((header) => (
            <td>{header}</td>
          ))}
        </tr>

        {Object.keys(data.modelSummary).map((item) => (
          <tr>
            <td>{item}</td>
            <td>{table[item]}</td>
          </tr>
        ))}
      </ModelDetailsTableStyled>
    </ModelDetailsStyled>
  );
}

export default ModelDetails;
