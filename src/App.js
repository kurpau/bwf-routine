import './App.css';
import { Fragment } from 'react';
import Slider from './components/Slider';
import { dips, extensions, hinges, pullups, pushups, rows, squats } from './assets/index';

function App() {
  return (
    <Fragment>
      <Slider slides={hinges} />
      <Slider slides={pushups} />
    </Fragment>
  );
}

export default App;