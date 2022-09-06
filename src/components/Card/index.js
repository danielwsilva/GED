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
          <DayWeek day="SEG" hour={data.days_worship.monday} />
          <DayWeek day="TER" hour={data.days_worship.tuesday} />
          <DayWeek day="QUA" hour={data.days_worship.wednesday} />
          <DayWeek day="QUI" hour={data.days_worship.thursday} />
          <DayWeek day="SEX" hour={data.days_worship.friday} />
          <DayWeek day="SAB" hour={data.days_worship.saturday} />
          <DayWeek day="DOM" hour={data.days_worship.sunday} />
        </SContainerWeek>

        <SOthers>
          <DayWeek day="RJM" hour={data.days_worship.youth_meeting} width={80} hasBorder={false} />
        </SOthers>
      </SCard>
    </SContainerCard>
  );
};
