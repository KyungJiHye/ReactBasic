import { createContext, useContext, useState } from "react";

const SessionContext = createContext();

export const CountProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const reducer = (count, action) => {
    switch (action.type) {
      case 'plus':
        return count + (action.payload ?? 1);
      case 'minus':
        return count - 1;
    }
  };

  const [count, dispatch] = useReducer(reducer, 0);

  const plusCount = (cnt) => dispatch({ type: 'plus', payload: cnt });
  const minusCount = () => dispatch({ type: 'minus' });

    <button onClick={() => plusCount(30)}>Plus 30</button>
    <strong>{count}</strong>
    <button onClick={minusCount}>Minus</button>


  return (
    <SessionContext.Provider value={{ count }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);