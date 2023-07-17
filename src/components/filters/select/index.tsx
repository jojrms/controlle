import React from 'react';
import { useSelect } from 'downshift';
import { Container, FilterButton, Label, FilterOptions } from '../styled';

// Interface para o item do select
export interface SelectItem {
  value: string
}

type NewFilterTypeProps = {
  type: string | null,
  value: string | null
}

// Props para o componente Select
interface SelectProps {
    label: string,
    items: SelectItem[];
    handleNewFilterTypeChange: any,
    newFilterType: NewFilterTypeProps,
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
                <span>{newFilterType.value ? newFilterType.value : items[0].value}</span>
            </FilterButton>
        </React.Fragment>
        <FilterOptions
          isOpen={isOpen}
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
        </FilterOptions>
      </Container>
  );
};

export default Select;