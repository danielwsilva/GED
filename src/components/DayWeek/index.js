import React from "react";

import {
  SWrapperDayWeek,
  SDivider,
  SNameDayWeekLabel,
  SDayHour,
} from './styles';

export const DayWeek = ({ day, hour, width, hasBorder = true }) => {
  return (
    <SWrapperDayWeek hasCult={!!hour} width={width} hasBorder={hasBorder}>
      <SNameDayWeekLabel>{day}</SNameDayWeekLabel>
      <SDivider />
      <SDayHour>{hour}</SDayHour>
    </SWrapperDayWeek>   
  );
};
