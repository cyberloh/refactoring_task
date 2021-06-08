import DataItem from '../interfaces/DataItem';

const randString = (stringLength: number):string => {
  return [...Array(stringLength)].map(i => (~~(Math.random()*36)).toString(36)).join('');
};

export const getDataPage = (startId: number, listLength:number, stringLength: number):DataItem[] => {
  return Array.from({length: listLength}, (x, i) => i).map(id => ({id: id + startId, title: randString(stringLength)}));
};

