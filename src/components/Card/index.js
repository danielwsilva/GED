import React from 'react';
import { TbMap2, TbCalendarTime } from 'react-icons/tb';

import { DayWeek } from '../DayWeek';
import { SContainerCard, SCard, SButtonMaps, SCalendarTime, SContainerWeek } from './styles';

export const Card = ({ data }) => {
  const showInMapClicked = () => {
    window.open(`https://www.google.com/maps?saddr=${data.latitude},${data.longitude}`);
  };

  console.log(data);
  const array = data.daysWorship.youth_meeting.split(' ');

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
          <DayWeek day="DOM" hour={data.daysWorship.sunday} hasBorder={false}/>
          
          {
            data.daysWorship.youth_meeting &&
            <DayWeek day={`${array[0] === 'Domingo' && 'DOM'}/RJM `} hour={array[1]} />
          }
        </SContainerWeek>

      </SCard>
    </SContainerCard>
  );
};
