import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const eventFn = () => {
  console.log('H1 clicado');
};

function App() {
  // const { reverse } = this.state;
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const reverseClass = reverse ? 'reverse' : '';

  const handleClick = () => {
    setReverse(!reverse);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleIncrement2 = () => {
    setCounter2(counter2 + 1);
  };

  // ComponentDidUpdate - executa todas as vezes q o componente atualiza
  // useEffect(() => {
  //   console.log('ComponentDidUpdate');
  // });

  // ComponentDidMount - executa 1x
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    // ComponentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  // Com dependência - executa todas as vezez que a dependência mudar
  useEffect(() => {
    console.log(`C1 ${counter} C2; ${counter2}`);
  }, [counter, counter2]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <h1>
          Counter: {counter}, Counter2: {counter2}
        </h1>
        <button type="button" onClick={handleClick}>
          reverse {reverseClass}
        </button>
        <button type="button" onClick={handleIncrement}>
          Counter
        </button>
        <button type="button" onClick={handleIncrement2}>
          Counter 2
        </button>
      </header>
    </div>
  );
}

// class App extends Component {
//   state = {
//     reverse: false,
//   };

//   handleClick = () => {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };

//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'reverse' : '';

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <button type="button" onClick={this.handleClick}>
//             reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
