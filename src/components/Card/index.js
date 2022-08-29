import React from "react";
import { TbMap2 } from "react-icons/tb";
import { TbCalendarTime } from "react-icons/tb";
import { BsPinAngle } from "react-icons/bs";

import Igreja from '../../assets/igreja.jpg';

import {
  SContainerCard,
  SCard,
  SImage,
  SButtonMaps,
  SCalendarTime,
  SWrapperDayWeek,
  SDivider,
  SNameDayWeekLabel,
  SDayHour,
  SContainerWeek
} from './styles';

export const Card = () => {
  return (
    <SContainerCard>
      <SCard>
        <BsPinAngle style={{ alignSelf: 'flex-end', marginBottom: 10 }} />
        <SImage src={Igreja} />
        <h1>Congregação Campos Elíseos</h1>
        <h2>Ribeirão Preto/SP</h2>
        
        <SButtonMaps>
          <TbMap2 />
          <h3>Mapa</h3>
        </SButtonMaps>

        <SCalendarTime>
          <TbCalendarTime size={18} />
          <h4>Horários</h4>
        </SCalendarTime>

        <SContainerWeek>
          <SWrapperDayWeek>
            <SNameDayWeekLabel>SEG</SNameDayWeekLabel>
            <SDivider />
            <SDayHour>19:30</SDayHour>
          </SWrapperDayWeek>
          <SWrapperDayWeek>
            <SNameDayWeekLabel>TER</SNameDayWeekLabel>
            <SDivider />
            <SDayHour>19:30</SDayHour>
          </SWrapperDayWeek>
          <SWrapperDayWeek>
            <SNameDayWeekLabel>QUA</SNameDayWeekLabel>
            <SDivider />
            <SDayHour>19:30</SDayHour>
          </SWrapperDayWeek>
          <SWrapperDayWeek>
            <SNameDayWeekLabel>QUI</SNameDayWeekLabel>
            <SDivider />
            <SDayHour>19:30</SDayHour>
          </SWrapperDayWeek>
          <SWrapperDayWeek>
            <SNameDayWeekLabel>SEX</SNameDayWeekLabel>
            <SDivider />
            <SDayHour>19:30</SDayHour>
          </SWrapperDayWeek>
          <SWrapperDayWeek>
            <SNameDayWeekLabel>SAB</SNameDayWeekLabel>
            <SDivider />
            <SDayHour>19:30</SDayHour>
          </SWrapperDayWeek>
          <SWrapperDayWeek>
            <SNameDayWeekLabel>DOM/RJM</SNameDayWeekLabel>
            <SDivider />
            <SDayHour>19:30/10:00</SDayHour>
          </SWrapperDayWeek>
        </SContainerWeek>
      </SCard>
    </SContainerCard>
  );
};
