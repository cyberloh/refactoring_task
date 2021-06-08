import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataList from './components/DataList';
import { getDataPortion } from './utils';

export default function App() {
  
  const dataPortionLength = 20; //imagine we've got it from user's settings
  
  const [data, setData] = React.useState(getDataPortion(0, dataPortionLength)); //when we name it 'data' it requires no explaination

  const onAddMoreClick = (e:any)  => {
    setData([...data, ...getDataPortion(data.length, dataPortionLength)]);
  };

  return (
      <div className="App">
          <div className="App-header">
              <img src={logo} className="App-logo" alt="logo"/>
          </div>
          <div>
              <button className={"App-button"} onClick={onAddMoreClick}>
                  Add More
              </button>
          </div>
          <div>
              <DataList data={data}/>
          </div>
      </div>
  );
};
