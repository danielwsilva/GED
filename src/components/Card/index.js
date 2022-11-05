import React from 'react';
import { TbMap2, TbCalendarTime } from 'react-icons/tb';

import { DayWeek } from '../DayWeek';
import { SContainerCard, SCard, SButtonMaps, SCalendarTime, SContainerWeek } from './styles';

export const Card = ({ data }) => {
  const showInMapClicked = () => {
    window.open(data.map);
  };

  return (
    <SContainerCard>
      <SCard>
        <h1>{data.name}</h1>
        <h2>
          {data.city}/{data.state}
        </h2>

        <SButtonMaps onClick={showInMapClicked}>
          <TbMap2 />
          <h3>Mapa</h3>
        </SButtonMaps>

        <SCalendarTime>
          <TbCalendarTime size={18} />
          <h4>Horários</h4>
        </SCalendarTime>

        <SContainerWeek>
          <DayWeek day="SEG" hour={data.daysWorship.monday} />
          <DayWeek day="TER" hour={data.daysWorship.tuesday} />
          <DayWeek day="QUA" hour={data.daysWorship.wednesday} />
          <DayWeek day="QUI" hour={data.daysWorship.thursday} />
          <DayWeek day="SEX" hour={data.daysWorship.friday} />
          <DayWeek day="SAB" hour={data.daysWorship.saturday} />
          <DayWeek
            day={`DOM${data.daysWorship.youth_meeting && ' / RJM'} `}
            hour={`${data.daysWorship.sunday} / ${data.daysWorship.youth_meeting}`}
            hasBorder={false}
          />
        </SContainerWeek>
      </SCard>
    </SContainerCard>
  );
};
