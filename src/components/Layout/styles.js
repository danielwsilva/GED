import styled from 'styled-components';

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  padding-top: 20px;
  padding-left: ${({ sidebarOpen, isMobile }) => sidebarOpen ? '270px' : isMobile ? '95px' : '120px' };
  width: 100vw;

  h1 {
    font-size: 14px;
  }
`;
