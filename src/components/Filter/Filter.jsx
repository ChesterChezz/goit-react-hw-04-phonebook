import React from 'react';
import PropTypes from 'prop-types';
import { FilterCont, Label, Input } from './Filter.styled';

function Filter({ value, onChangeFilter }) {
  return (
    <FilterCont>
      <Label>Find contacts by name</Label>
      <Input type="text" value={value} onChange={onChangeFilter} />
    </FilterCont>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
