import React, { useEffect, useState } from 'react';
import { BsChevronDown, BsCheck2, BsSearch } from 'react-icons/bs';
import { MdLocationCity } from 'react-icons/md';
import * as SelectPrimitive from '@radix-ui/react-select';
import { isMobile } from 'react-device-detect';

import { Card } from '../../components/Card';
import { api } from '../../services/api';

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

const HomePage = () => {
  const [churches, setChurches] = useState([]);
  const [churche, setChurche] = useState([]);
  const [city, setCity] = useState('todas');
  
  const fetchChurches = async () => {
    try {
      const { data } = await api.get('/churches');
      setChurches(data);
      setChurche(data);
    } catch(error) {

    }
  }

  useEffect(() => {
    fetchChurches();
  }, []);

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
    if (city !== 'todas') {
      const filtered = churches
        .filter((item) => item.name.toUpperCase().includes(text.toUpperCase()))
        .filter((item) => item.city.toUpperCase().includes(city.toUpperCase()));
      setChurche(filtered);
    } else {
      const filtered = churches.filter((item) => item.name.toUpperCase().includes(text.toUpperCase()))
      setChurche(filtered);
    }
  };

  const haldleFilterCity = (value) => {
    if (value !== 'todas') {
      const filtered = churches.filter((item) => item.city.toUpperCase().includes(value.toUpperCase()));
      setChurche(filtered);
      setCity(value);
    } else {
      setChurche(churches);
      setCity(value);
    }
  }

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

      <SWrapperFilter isMobile={isMobile}>
        <Select onValueChange={(text) => haldleFilterCity(text)}>
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
                <SSelectItem value="todas" >
                  <SelectItemText>Todas</SelectItemText>
                  <SSelectItemIndicator>
                    <BsCheck2 />
                  </SSelectItemIndicator>
                </SSelectItem>
                <SSelectItem value="ribeirão preto" >
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
          <Card key={item.code} data={item} />
        ))}
        {renderEmptyItems()}
      </SContainerCard>
    </SContainer>
  );
};

export default HomePage;
