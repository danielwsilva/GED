import styled from 'styled-components';

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  padding-top: 20px;
  padding-left: ${({ sidebarOpen }) => sidebarOpen ? '270px' : '120px'};
  width: 100vw;
  height: 100vh;

  h1 {
    font-size: 14px;
  }
`;
