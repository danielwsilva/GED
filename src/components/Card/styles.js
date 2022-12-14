import styled from 'styled-components';

import { btnReset, v } from '../../styles/variables';

export const SContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-bottom: 10px;
`;

export const SCard = styled.div`
  border-radius: 8px;
  box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.grayLight};
  background-color: ${({ theme }) => theme.white};

  margin-right: 10px;
  padding: ${v.mdSpacing};

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 18px;
  }

  h2 {
    font-size: 16px;
    color: ${({ theme }) => theme.textLight};
    font-weight: 400;
    margin-top: 4px;
  }

  h3,
  h4 {
    margin-left: 6px;
  }

  h3 {
    font-size: 14px;
  }

  h4 {
    font-size: 12px;
  }
`;

export const SButtonMaps = styled.button`
  ${btnReset};
  margin-top: ${v.mdSpacing};
  width: calc(${v.xxlSpacing} * 3);
  padding: ${v.smSpacing} 0;
  color: ${({ theme }) => theme.primary};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border-radius: ${v.smSpacing};
  border: 1px solid ${({ theme }) => theme.primary};
  background: transparent;
`;

export const SCalendarTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${v.smSpacing};
  margin-bottom: ${v.smSpacing};
`;

export const SContainerWeek = styled.div`
  display: flex;
  border: 0.1px solid ${({ theme }) => theme.text};
  border-radius: calc(${v.smSpacing} / 2);
  overflow: hidden;
`;
