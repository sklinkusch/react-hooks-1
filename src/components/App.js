import React from 'react';
import logo from '../images/logo.svg';
import '../styles/App.css';
import CounterClass from './CounterClass';
import CounterHook from './CounterHook';
import CounterClassWithLifecycle from './CounterClassWithLifecycle';
import CounterHookWithEffects from './CounterHookWithEffects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterClass />
        <CounterHook />
        <CounterClassWithLifecycle />
        <CounterHookWithEffects />
      </header>
    </div>
  );
}

export default App;
