import styled from "styled-components";

const FeatureImportancesChartStyled = styled.div`
  display: flex;
  width: 50%;
  height: 350px;
  background-color: #1d1d1d;
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  box-sizing: border-box;
  border-bottom: 1px solid #00dac6;

  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }
`;

export default FeatureImportancesChartStyled;
