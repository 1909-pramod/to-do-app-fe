import React, { useState } from 'react';
import { Select, MenuItem , SelectChangeEvent} from '@mui/material';

import styles from '../../styles/common/FilterSortBar.module.scss';

const FilterSortBar = () => {
  const [age, setAge] = useState('None');

  const handleChange = (e: SelectChangeEvent<string>) => {
    setAge(e.target.value)
  }


  return (
    <div className={styles.bar}>
      <Select
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        value={age}
        label='Age'
        onChange={handleChange}
      >
        <MenuItem value='None'>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <Select
        labelId='demo-simple-select-helper-label'
        id='demo-simple-select-helper'
        value={age}
        label='Age'
        onChange={handleChange}
      >
        <MenuItem value='None'>
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </div>
  );
};

export default FilterSortBar;
