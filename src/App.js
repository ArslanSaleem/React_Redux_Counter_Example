import logo from './logo.svg';
import './App.css';
import { Counter } from './views/Counter';
import { counterStore } from './application/Store';
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={counterStore}>
        <Counter />
      </Provider>
    </div>
  );
}

export default App;
