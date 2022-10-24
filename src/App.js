import './App.css';
import Text from './Text';
import Button from './Button';
import CountUp from './CountUp';

function App() {
  return (
    <div className="App">
      <Text 
        title={'Greeting'}
        content={'Hello, World!'}
      />
      <Button />
      <CountUp />
    </div>
  );
}

export default App;
