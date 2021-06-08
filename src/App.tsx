import React from 'react';
import logo from './logo.svg';
import './App.css';
import DataList from './components/DataList';
import { getDataPage } from './utils';

export default function App() {
  
  const dataPageLength = 20; //imagine we've got it from user's settings
  const dataStringLength = 10;
  
  const [data, setData] = React.useState(getDataPage(0, dataPageLength, dataStringLength)); //when we name it 'data' it requires no explaination

  const onAddMoreClick = (e:any)  => {
    setData([...data, ...getDataPage(data.length, dataPageLength, dataStringLength)]);
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
