import React from 'react';
import DataItem from '../interfaces/DataItem';

export default function DataList(prop: { data: DataItem[] }) {
  return (
    <>{
      prop.data.map((item:DataItem) => (
        <div key={'data-row-' + item.id.toString()} className={'App-item'}>{'Title is: ' + item.title + '!'}</div>
      ))
    }</>
  ) 
};
