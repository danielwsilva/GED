import React from "react";

import {
  SWrapperDayWeek,
  SDivider,
  SNameDayWeekLabel,
  SDayHour,
} from './styles';

export const DayWeek = ({ day, hour }) => {
  return (
    <SWrapperDayWeek hasCult={!!hour}>
      <SNameDayWeekLabel>{day}</SNameDayWeekLabel>
      <SDivider />
      <SDayHour>{hour}</SDayHour>
    </SWrapperDayWeek>   
  );
};
