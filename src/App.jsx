import { useReducer, useState } from 'react';
// import { flushSync } from 'react-dom';
import './App.css';
import { Hello } from './components/Hello';
import { My } from './components/My';
import { SessionProvider } from './hooks/session-context';

function App() {

  return (
    <div className='App'>
      <div>
        <Hello name='jeje' weather='맑음' />
      </div>
      <hr />
      <SessionProvider>
        <My />
      </SessionProvider>

      <hr />
      <div className='card'>
        <SessionProvider>
          <Count />
        </SessionProvider>
      </div>
    </div>
  );
}

export default App;
