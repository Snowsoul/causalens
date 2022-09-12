import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;

  /* Quick way to make it responsive */
  @media (max-width: 768px) {
    flex-direction: column;

    div {
      width: auto !important;
    }
  }
`;

export default Row;
