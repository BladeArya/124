import React from 'react'
import { Provider } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import InputTask from './components/inputtask/InputTask';
import OutputTask from './components/outputtask/OutputTask';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <InputTask/>
        <OutputTask/>
      </div>
    </Provider>  
  );
}

export default App;
