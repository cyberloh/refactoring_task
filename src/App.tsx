import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getDataPortion } from './utils';

function App() {
  
  const dataPortionLength = 20; //imagine we've got it from user's settings
  
  const [data, setData] = React.useState(getDataPortion(0, dataPortionLength)); //when we name it 'data' it requires no explaination

  const dataRowsRender = ():any[] => {
    return data.map(item => (
      <div key={'data-row-' + item.id.toString()} className={'App-item'}>{'Title is: ' + item.title + '!'}</div>
    ));
  };

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
              { dataRowsRender() }
          </div>
      </div>
  );
}

export default App;
