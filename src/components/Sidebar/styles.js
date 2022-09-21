import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { btnReset, v } from '../../styles/variables';

export const SSidebar = styled.div`
  width: ${({ isOpen }) => (isOpen ? v.sidebarWidth : 'auto')};
  background: ${({ theme }) => theme.white};
  height: 100%;
  padding: ${v.lgSpacing};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
`;

export const SSidebarButton = styled.button`
  ${btnReset};

  top: ${v.xxlSpacing};
  right: ${({ isOpen }) => (isOpen ? `-16px` : `-40px`)};
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0 0 4px ${({ theme }) => theme.white}, 0 0 7px ${({ theme }) => theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  transform: ${({ isOpen }) => (!isOpen ? `rotate(180deg)` : `initial`)};
`;

export const SLogo = styled.div`
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};

  img {
    max-width: 100%;
    height: auto;
  }
  cursor: pointer;

  margin-bottom: ${v.lgSpacing};
`;

export const SDivider = styled.div`
  height: ${({ isMobile }) => isMobile ? 0 : 1}px;
  width: 100%;
  background: ${({ theme }) => theme.grayLight};
  margin: ${v.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
  background: ${({ theme, isActive }) => (!isActive ? `transparent` : theme.grayLight)};
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.grayLight};
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;

  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  margin-left: px;
  color: white;

  margin-right: ${v.mdSpacing};
`;

export const STSidebarLabel = styled.span`
  display: block;
  flex: 1;
`;
