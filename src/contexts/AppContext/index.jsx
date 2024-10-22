import { createContext, useContext } from 'react';

import { globalState } from './data';
export const GlobalContext = createContext();

// eslint-disable-next-line
export const AppContext = ({ props }) => {
  const [ContextState, setState] = useContext(globalState);

  return (
    <GlobalContext.Provider value={{ ContextState, setState }}>
      {/*eslint-disable-next-line*/}
      {props.children}
    </GlobalContext.Provider>
  );
};
