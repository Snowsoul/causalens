import styled from "styled-components";

const DropDownStyled = styled.div`
  display: flex;
  width: 40%;
  height: 38px;
  background-color: #1d1d1d;
  margin: 16px;
  border-radius: 4px;

  .react-select-container {
    width: 100%;

    .react-select__control {
      background-color: transparent;
      border: 0;
    }
  }
`;

export default DropDownStyled;
