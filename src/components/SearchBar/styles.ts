import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FFF;
  padding: 1rem .875rem;
  border-radius: 4px;
  gap: 8px;
  width: 220px;
  
  input {
    font-size: 18px;
    width: 80%;
    outline: none;
  }

  input::placeholder {
    color: var(--text-description);
    font-weight: 500;
  }
  
`;