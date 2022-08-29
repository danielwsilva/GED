import React from 'react';
import { BsChevronDown, BsCheck2, BsSearch } from 'react-icons/bs';
import { MdLocationCity } from 'react-icons/md';

import * as SelectPrimitive from '@radix-ui/react-select';

import { Card } from '../components/Card';

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
  SSearch,
  SSearchIcon
} from './styles';

const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectGroup = SelectPrimitive.Group;
const SelectItemText = SelectPrimitive.ItemText;

const HomePage = () => {
  const data = [1, 2, 3, 4, 5];

  const renderEmptyItems = () => (
    <>
      <SEmpty />
      <SEmpty />
      <SEmpty />
      <SEmpty />
      <SEmpty />
    </>
  );

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

        <SSearch onClick={() => {}}>
          <SSearchIcon>
            <BsSearch />
          </SSearchIcon>
          <input placeholder="Search" />
        </SSearch>
      </SWrapperFilter>

      <SContainerCard>
        {data.map((item, index) => (
          <Card key={index} />
        ))}
        {renderEmptyItems()}
      </SContainerCard>
    </SContainer>
  );
};

export default HomePage;
