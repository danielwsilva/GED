import React from "react";

import {
  SWrapperDayWeek,
  SDivider,
  SNameDayWeekLabel,
  SDayHour,
} from './styles';

export const DayWeek = ({ day, hour, width }) => {
  return (
    <SWrapperDayWeek hasCult={!!hour} width={width}>
      <SNameDayWeekLabel>{day}</SNameDayWeekLabel>
      <SDivider />
      <SDayHour>{hour}</SDayHour>
    </SWrapperDayWeek>   
  );
};
