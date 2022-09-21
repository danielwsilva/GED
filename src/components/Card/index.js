import React from 'react';
import { BsPinAngle } from 'react-icons/bs';
import { TbMap2, TbCalendarTime } from 'react-icons/tb';

import Igreja from '../../assets/igreja.jpg';
import { DayWeek } from '../DayWeek';

import { SContainerCard, SCard, SImage, SButtonMaps, SCalendarTime, SContainerWeek, SOthers } from './styles';

export const Card = ({ data }) => {
  const showInMapClicked = () => {
    window.open(`https://www.google.com/maps?saddr=${data.latitude},${data.longitude}`);
  };

  return (
    <SContainerCard>
      <SCard>
        <BsPinAngle style={{ alignSelf: 'flex-end', marginBottom: 10 }} />
        <SImage src={Igreja} />
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
          <DayWeek day="DOM" hour={data.daysWorship.sunday} />
        </SContainerWeek>

        {
          data.daysWorship.youth_meeting &&
          <SOthers>
            <DayWeek day="RJM" hour={data.daysWorship.youth_meeting} width={80} hasBorder={false} />
          </SOthers>
        }
      </SCard>
    </SContainerCard>
  );
};
