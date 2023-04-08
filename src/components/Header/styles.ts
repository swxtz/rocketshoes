import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  display: flex;
  flex: row;
  align-items: center;
`;

export const Logo = styled.div`
  
`;

export const NavBar = styled.div`
  padding-left: 7.125rem;
  padding-right: 5.125rem;
  display: flex;
  flex-direction: row;

  gap: 90px;
  
  a {
    font-size: 24px;
    font-weight: 700;
    color: var(--text);
    
  }
  
  a:hover {
    transition: 300ms;
    color: var(--text-hover);
  }
`;

export const Bag = styled.div`
  padding-left: 80px;
`;

