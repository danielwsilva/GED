import styled from 'styled-components';

export const SWrapperDayWeek = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme, hasCult }) => hasCult ? theme.primary : theme.gray};
`;

export const SNameDayWeekLabel = styled.span`
  background-color: ${({ theme }) => theme.gray};
  padding: 4px;
  text-align: center;
  font-size: 12px;
`;

export const SDivider = styled.div`
  width: 100%;
  height: 0.1px;
  background: ${({ theme }) => theme.black};
`;

export const SDayHour = styled.span`
  color: ${({ theme }) => theme.white};
  padding: 4px 0;
  text-align: center;
  font-size: 10px;
`;
