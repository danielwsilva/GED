import React, { useState } from 'react';
import { BsChevronDown, BsCheck2, BsSearch } from 'react-icons/bs';
import { MdLocationCity } from 'react-icons/md';

import * as SelectPrimitive from '@radix-ui/react-select';

import { Card } from '../../components/Card';

import {
  SContainer,
  SWrapperFilter,
  SContainerCard,
  SEmpty,
  SSelectTrigger,
  SSelectTriggerWrapper,
  SStyledContent,
  SSelectViewport,
  SelectLabel,
  SSelectItem,
  SSelectItemIndicator,
  SSearch
} from './styles';

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectGroup = SelectPrimitive.Group;
const SelectItemText = SelectPrimitive.ItemText;

const data = [
  {
    id: '1',
    user_id: '1',
    code: '1010',
    name: 'Campos Elíseos',
    city: 'Ribeirão Preto',
    state: 'SP',
    phone: null,
    latitude: -21.1621273,
    longitude: -47.7989861,
    status: 1,
    created_at: '2022-09-03T05:00:57.000000Z',
    updated_at: '2022-09-03T05:00:57.000000Z',
    days_worship: {
      id: '2ad80caa-7a5c-45a0-83fe-34617247afd1',
      church_id: 'caaa7c96-733f-4e30-9973-ce6e6db39150',
      sunday: '18:30',
      youth_meeting: 'DOM / 10:00',
      monday: '19:30',
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: '19:30',
      saturday: null,
      created_at: '2022-09-03T05:00:57.000000Z',
      updated_at: '2022-09-03T05:00:57.000000Z'
    }
  },
  {
    id: '2',
    user_id: '1',
    code: '1010',
    name: 'Ipiranga',
    city: 'Ribeirão Preto',
    state: 'SP',
    phone: null,
    latitude: '101011010',
    longitude: '25251211',
    status: 1,
    created_at: '2022-09-03T05:00:57.000000Z',
    updated_at: '2022-09-03T05:00:57.000000Z',
    days_worship: {
      id: '2ad80caa-7a5c-45a0-83fe-34617247afd1',
      church_id: 'caaa7c96-733f-4e30-9973-ce6e6db39150',
      sunday: '18:30',
      youth_meeting: 'DOM / 10:00',
      monday: null,
      tuesday: '19:30',
      wednesday: null,
      thursday: '19:30',
      friday: null,
      saturday: null,
      created_at: '2022-09-03T05:00:57.000000Z',
      updated_at: '2022-09-03T05:00:57.000000Z'
    }
  },
  {
    id: '3',
    user_id: '1',
    code: '1010',
    name: 'Parque Ribeirão',
    city: 'Ribeirão Preto',
    state: 'SP',
    phone: null,
    latitude: '101011010',
    longitude: '25251211',
    status: 1,
    created_at: '2022-09-03T05:00:57.000000Z',
    updated_at: '2022-09-03T05:00:57.000000Z',
    days_worship: {
      id: '2ad80caa-7a5c-45a0-83fe-34617247afd1',
      church_id: 'caaa7c96-733f-4e30-9973-ce6e6db39150',
      sunday: '18:30',
      youth_meeting: 'TER / 10:00',
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
      created_at: '2022-09-03T05:00:57.000000Z',
      updated_at: '2022-09-03T05:00:57.000000Z'
    }
  },
  {
    id: '4',
    user_id: '1',
    code: '1010',
    name: 'Vila Carvalho',
    city: 'Ribeirão Preto',
    state: 'SP',
    phone: null,
    latitude: '101011010',
    longitude: '25251211',
    status: 1,
    created_at: '2022-09-03T05:00:57.000000Z',
    updated_at: '2022-09-03T05:00:57.000000Z',
    days_worship: {
      id: '2ad80caa-7a5c-45a0-83fe-34617247afd1',
      church_id: 'caaa7c96-733f-4e30-9973-ce6e6db39150',
      sunday: '18:30',
      youth_meeting: 'DOM / 10:00',
      monday: null,
      tuesday: null,
      wednesday: '19:30',
      thursday: null,
      friday: null,
      saturday: null,
      created_at: '2022-09-03T05:00:57.000000Z',
      updated_at: '2022-09-03T05:00:57.000000Z'
    }
  },
  {
    id: '5',
    user_id: '1',
    code: '1010',
    name: 'Jardim Nova Aliança',
    city: 'Ribeirão Preto',
    state: 'SP',
    phone: null,
    latitude: '101011010',
    longitude: '25251211',
    status: 1,
    created_at: '2022-09-03T05:00:57.000000Z',
    updated_at: '2022-09-03T05:00:57.000000Z',
    days_worship: {
      id: '2ad80caa-7a5c-45a0-83fe-34617247afd1',
      church_id: 'caaa7c96-733f-4e30-9973-ce6e6db39150',
      sunday: '18:30',
      youth_meeting: 'SEG / 10:00',
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: '19:30',
      saturday: null,
      created_at: '2022-09-03T05:00:57.000000Z',
      updated_at: '2022-09-03T05:00:57.000000Z'
    }
  }
];

const HomePage = () => {
  const [churches, setChurches] = useState(data);
  const [churche, setChurche] = useState(data);
  
  const renderEmptyItems = () => (
    <>
      <SEmpty />
      <SEmpty />
      <SEmpty />
      <SEmpty />
      <SEmpty />
    </>
  );

  const handleSearch = (text) => {
    const filtered = churches.filter((item) => item.name.toUpperCase().includes(text.toUpperCase()));
    setChurche(filtered);
  };

  function SelectContent({ children, ...props }) {
    return (
      <SelectPrimitive.Portal>
        <SStyledContent {...props}>{children}</SStyledContent>
      </SelectPrimitive.Portal>
    );
  }

  return (
    <SContainer>
      <h1>Casas de Orações</h1>
      <h2>Dias de cultos e Reuniões Jovens e Menores</h2>

      <SWrapperFilter>
        <Select>
          <SSelectTrigger aria-label="Cidade">
            <SSelectTriggerWrapper>
              <MdLocationCity size={18} />
              <SelectValue placeholder="Cidades" />
            </SSelectTriggerWrapper>
            <BsChevronDown />
          </SSelectTrigger>
          <SelectContent>
            <SSelectViewport>
              <SelectGroup>
                <SelectLabel>Cidades</SelectLabel>
                <SSelectItem value="ribeirao preto">
                  <SelectItemText>Ribeirão Preto</SelectItemText>
                  <SSelectItemIndicator>
                    <BsCheck2 />
                  </SSelectItemIndicator>
                </SSelectItem>
                <SSelectItem value="bonfim">
                  <SelectItemText>Bonfim</SelectItemText>
                  <SSelectItemIndicator>
                    <BsCheck2 />
                  </SSelectItemIndicator>
                </SSelectItem>
              </SelectGroup>
            </SSelectViewport>
          </SelectContent>
        </Select>

        <SSearch>
          <button>
            <BsSearch />
          </button>
          <input placeholder="Search" onChange={(text) => handleSearch(text.target.value)}/>
        </SSearch>
      </SWrapperFilter>

      <SContainerCard>
        {churche.map((item) => (
          <Card key={item.id} data={item} />
        ))}
        {renderEmptyItems()}
      </SContainerCard>
    </SContainer>
  );
};

export default HomePage;
