import React from "react";
import ModelDetailsStyled, {
  ModelDetailsTableStyled,
} from "./ModelDetails.styled";

function ModelDetails({ data }) {
  if (!data || !data.results || !data.results.modelSummary)
    return <ModelDetailsStyled />;

  const table = data.results.modelSummary;
  return (
    <ModelDetailsStyled>
      <ModelDetailsTableStyled>
        <tr>
          <td>Property</td>
          <td>Value</td>
        </tr>

        {Object.keys(data.results.modelSummary).map((item) => (
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
