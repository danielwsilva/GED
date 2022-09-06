import styled, { css } from 'styled-components';

import { v } from '../../styles/variables';

export const SWrapperDayWeek = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, hasCult }) => hasCult ? theme.primary : theme.gray};
  width: ${({ width }) => width ? width : 36}px;

  ${({ hasBorder }) => hasBorder && css`
    border-right: 1px solid ${({ theme }) => theme.black};
  `}
`;

export const SNameDayWeekLabel = styled.span`
  background-color: ${({ theme }) => theme.gray};
  padding: calc(${v.smSpacing} / 2);
  text-align: center;
  font-size: 12px;
`;

export const SDivider = styled.div`
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.black};
`;

export const SDayHour = styled.span`
  color: ${({ theme }) => theme.white};
  padding: calc(${v.smSpacing} / 2);
  text-align: center;
  font-size: 10px;
`;
