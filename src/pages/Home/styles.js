import * as SelectPrimitive from '@radix-ui/react-select';
import styled from 'styled-components';

import { btnReset, v } from '../../styles/variables';

export const SContainer = styled.div`
  padding-bottom: 20px;

  h1 {
    font-size: 20px;
    font-weight: 700;
    color: ${({ theme }) => theme.primary};
  }

  h2 {
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.textLight};
    margin-top: ${v.smSpacing};
  }
`;

export const SContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
`;

export const SWrapperFilter = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({ isMobile }) => isMobile ? '100%' : '50%' };
  flex-direction: row;
  margin: ${v.lgSpacing} 0;
  padding-right: ${({ isMobile }) => isMobile ? 16 : 0 }px;
  gap: 10px;
`;

export const SSelectTrigger = styled(SelectPrimitive.SelectTrigger)`
  all: 'unset';
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  flex: 1;
  gap: 5px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.text};
  box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.grayLight};
  border: 0;

  cursor: pointer;

  :focus {
    box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.grayLight};
  }

  &[data-placeholder] {
    color: ${({ theme }) => theme.gray};
  }
`;

export const SSelectTriggerWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;

export const SStyledContent = styled(SelectPrimitive.Content)`
  overflow: hidden;
  background: ${({ theme }) => theme.white};
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
`;

export const SSelectViewport = styled(SelectPrimitive.Viewport)`
  padding: 5px;
`;

export const SelectLabel = styled(SelectPrimitive.Label)`
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: ${({ theme }) => theme.textLight};
`;

export const SSelectItem = styled(SelectPrimitive.Item)`
  all: 'unset';
  font-size: 13px;
  line-height: 1px;
  color: ${({ theme }) => theme.black};
  border-radius: 3;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;
  border: 0;

  &[data-disabled] {
    color: ${({ theme }) => theme.primary};
  }

  &[data-highlighted] {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }
`;

export const SSelectItemIndicator = styled(SelectPrimitive.ItemIndicator)`
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const SSearch = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.white};
  height: 35px;
  box-shadow: 3px 3px 5px 3px ${({ theme }) => theme.grayLight};
  border-radius: 4px;
  color: ${({ theme }) => theme.grayLight};
  
  display: flex;
  align-items: center;
  padding-left: 15px;

  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 14px;
   
    outline: none;
    border: none;
    color: ${({ theme }) => theme.text};
    background: transparent;
  }

  input::placeholder {
    color: ${({ theme }) => theme.grayLight};
  }

  input:focus {
    color: ${({ theme }) => theme.text};
  }

  button {
    ${btnReset};
    display: flex;
    cursor: pointer;
    svg {
      font-size: 16px;
    }
  }
`;