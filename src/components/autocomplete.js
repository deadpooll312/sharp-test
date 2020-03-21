import React from 'react';
import Autocomplete from 'react-autocomplete';

export function AutocomleteComponent(props) {
  const {data, search, select, value, label} = props;

  return <div className="autocomplete">
    <span className="label">{label}</span>
    <Autocomplete
      className="create-search"
      getItemValue={item => item.name}
      items={data}
      renderItem={item => <p key={item.id}>{item.name}</p>}
      value={value}
      onChange={e => search(e.target.value)}
      onSelect={val => select(val)}
      menuStyle={{
        borderRadius: '3px',
        background: data.length ? '#eee' : '#fff',
        padding: '5px',
        fontSize: '14px',
        position: 'fixed',
        color: '#000',
        overflow: 'auto',
      }}
      wrapperStyle={{display: 'block'}}
    />
  </div>
}