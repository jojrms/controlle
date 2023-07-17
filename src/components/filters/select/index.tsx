import React from 'react';
import { useSelect } from 'downshift';
import { Container, FilterButton, Label } from '../styled';

// Interface para o item do select
export interface SelectItem {
  label: string;
  value: string;
}

// Props para o componente Select
interface SelectProps {
    label: string,
    items: SelectItem[];
    onSelectItem: (selectedItem: SelectItem | null | undefined) => void;
}

const Select: React.FC<SelectProps> = ({ label, items, onSelectItem }) => {
  // Use o hook useSelect
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getMenuProps,
    getLabelProps,
    getItemProps,
    highlightedIndex,
  } = useSelect({
    items,
    onSelectedItemChange: ({ selectedItem }) => onSelectItem(selectedItem),
  });

  return (
    <Container>
        <React.Fragment>
            <Label {...getLabelProps()}>{label}</Label>
            <FilterButton
                {...getToggleButtonProps()}>
                <span>{selectedItem ? selectedItem.label : 'Elements'}</span>
            </FilterButton>
        </React.Fragment>
        <ul
          className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${
            !isOpen && 'hidden'
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => (
              <li
                key={`${item.value}${index}`}
                {...getItemProps({item, index})}
              >
                <span>{item.label}</span>
                <span className="text-sm text-gray-700">{item.label}</span>
              </li>
            ))}
        </ul>
      </Container>
  );
};

export default Select;