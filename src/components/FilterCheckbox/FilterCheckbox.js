import React from 'react';
import {
  CheckboxButton,
  CheckboxLabel,
  CheckboxText,
} from './FilterCheckbox.styles';

const FilterCheckbox = ({
  type = 'checkbox',
  checked = false,
  onChange,
  label,
}) => {
  return (
    <CheckboxButton>
      <CheckboxLabel>
        <input type={type} checked={checked} onChange={onChange} />
        <CheckboxText>{label}</CheckboxText>
      </CheckboxLabel>
    </CheckboxButton>
  );
};

export default FilterCheckbox;
