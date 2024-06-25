import React, { useState } from 'react';
import { Select } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { Copy } from './components/Copy';
import { ScrollArea } from './components/ScrollArea';

export default { title: 'Components/ScrollArea' };

export function Basic() {
  const [props, setProps] = useState({} as any);
  return (
    <>
      <div style={{ margin: '20px auto', width: 'max-content', textAlign: 'center' }}>
        <form
          onChange={(event) => {
            const formData = new FormData(event.currentTarget);
            const entries = (formData as any).entries();
            const cleanup = [...entries].map(([key, value]: any) => [key, value || undefined]);
            const props = Object.fromEntries(cleanup);
            setProps(props);
          }}
        >
          <label>
            type:
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <Select name="type">
              <MenuItem value="always">always</MenuItem>
              <MenuItem value="auto">auto</MenuItem>
              <MenuItem value="scroll">scroll</MenuItem>
              <MenuItem value="hover">hover</MenuItem>
            </Select>
          </label>
          {' '}
          <label>
            dir:
            {' '}
            <select name="dir">
              <option></option>
              <option>ltr</option>
              <option>rtl</option>
            </select>
          </label>
          {' '}
          <label>
            scrollHideDelay:
            {' '}
            <input type="number" name="scrollHideDelay" />
          </label>
        </form>
      </div>

      <ScrollArea
        {...props}
        key={props.type}
        type="always"
        style={{ width: 800, height: 800, margin: '30px auto' }}
      >
        {Array.from({ length: 30 }).map((_, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Copy key={index} />
        ))}
      </ScrollArea>
    </>
  );
}