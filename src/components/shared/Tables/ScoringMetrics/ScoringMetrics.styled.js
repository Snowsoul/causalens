import styled from "styled-components";

const ModelDetailsStyled = styled.div`
  display: flex;
  width: 33.33%;
  min-height: 250px;
  background-color: #1d1d1d;
  margin: 16px;
  border-radius: 4px;
`;

export const ModelDetailsTableStyled = styled.table`
  width: 100%;
  min-height: 250px;
  padding: 16px;
  overflow-y: auto;

  td {
    color: hsl(0, 0%, 70%);
  }
`;

export default ModelDetailsStyled;
