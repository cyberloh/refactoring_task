import DataItem from '../interfaces/DataItem';

const randString = ():string => {
  return [...Array(10)].map(i=>(~~(Math.random()*36)).toString(36)).join('');
};

export const getDataPage = (startId: number, length:number):DataItem[] => {
  return Array.from({length}, (x, i) => i).map(id => ({id: id + startId, title: randString()}));
};

