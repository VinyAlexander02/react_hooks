import './App.css';
import { useEffect, useState, useMemo } from 'react';
import P from 'prop-types';

const Post = ({ post }) => {
  console.log('Filho renderizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  console.log('Pai renderizou!');

  // Component did mount
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <p>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </p>
      {useMemo(() => {
        return (
          posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })
        );
      }, [posts])}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;

// const eventFn = () => {
//   console.log('H1 clicado');
// };

// function App() {
//   // const { reverse } = this.state;
//   const [reverse, setReverse] = useState(false);
//   const [counter, setCounter] = useState(0);
//   const [counter2, setCounter2] = useState(0);
//   const reverseClass = reverse ? 'reverse' : '';

//   const handleClick = () => {
//     setReverse(!reverse);
//   };

//   const handleIncrement = () => {
//     setCounter(counter + 1);
//   };

//   const handleIncrement2 = () => {
//     setCounter2(counter2 + 1);
//   };

//   // ComponentDidUpdate - executa todas as vezes q o componente atualiza
//   // useEffect(() => {
//   //   console.log('ComponentDidUpdate');
//   // });

//   // ComponentDidMount - executa 1x
//   useEffect(() => {
//     document.querySelector('h1')?.addEventListener('click', eventFn);

//     // ComponentWillUmount - limpeza
//     return () => {
//       document.querySelector('h1')?.removeEventListener('click', eventFn);
//     };
//   }, []);

//   // Com dependência - executa todas as vezez que a dependência mudar
//   useEffect(() => {
//     console.log(`C1 ${counter} C2; ${counter2}`);
//   }, [counter, counter2]);

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//         <h1>
//           Counter: {counter}, Counter2: {counter2}
//         </h1>
//         <button type="button" onClick={handleClick}>
//           reverse {reverseClass}
//         </button>
//         <button type="button" onClick={handleIncrement}>
//           Counter
//         </button>
//         <button type="button" onClick={handleIncrement2}>
//           Counter 2
//         </button>
//       </header>
//     </div>
//   );
// }

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
