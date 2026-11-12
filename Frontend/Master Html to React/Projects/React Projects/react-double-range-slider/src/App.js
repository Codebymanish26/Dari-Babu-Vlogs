
import './App.css';
import DoubleRangeSlider from './components/DoubleRangeSlider';

function App() {
  return (
    <div className="range">
      <DoubleRangeSlider min={1000} max={50000}/>
    </div>
  );
}

export default App;
