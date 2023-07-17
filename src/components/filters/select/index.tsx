import React from 'react';
import { useSelect } from 'downshift';
import { Container, FilterButton, Label } from '../styled';

// Interface para o item do select
export interface SelectItem {
  value: string
}

// Props para o componente Select
interface SelectProps {
    label: string,
    items: SelectItem[];
    handleNewFilterTypeChange: any,
    newFilterType: any,
    onSelectItem: (selectedItem: SelectItem | null | undefined) => void;
}

const Select: React.FC<SelectProps> = ({ label, items, newFilterType, handleNewFilterTypeChange, onSelectItem }) => {
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

  React.useEffect( () => {
    handleNewFilterTypeChange(newFilterType.type, selectedItem?.value ? selectedItem?.value : items[0].value)
  }, [selectedItem?.value])

  return (
    <Container>
        <React.Fragment>
            <Label {...getLabelProps()}>{label}</Label>
            <FilterButton
                {...getToggleButtonProps()}>
                <span>{selectedItem ? selectedItem.value : items[0].value}</span>
            </FilterButton>
        </React.Fragment>
        <ul
          className={`absolute w-72 bg-white mt-1 shadow-md max-h-80 overflow-scroll p-0 z-10 ${
            !isOpen && 'hidden'
          }`}
          {...getMenuProps()}
        >
          {isOpen &&
            items.map((item, index) => {
                
                return(
                <li
                    key={`${item.value}${index}`}
                    {...getItemProps({item, index})}
                >
                    <span>{item.value}</span>
                </li>    
                )
              
})}
        </ul>
      </Container>
  );
};

export default Select;