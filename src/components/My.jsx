import { useEffect, useRef, useState } from 'react';
import { useSession } from '../hooks/session-context';
import { Login } from './Login';
import { Profile } from './Profile';

export const My = () => {
  const { session, removeCartItem } = useSession();
  const [sec, setSec] = useState(0);
  const ulRef = useRef();

  useEffect(() => {
    const intl = setInterval(() => {
      setSec((sec) => sec + 1);
    }, 1000);

    return () => clearInterval(intl);
  }, []);

  return (
    <>
      <div>sec: {sec}</div>
      {session.loginUser ? (
        <Profile />
      ) : (
        <Login />
      )}
      <div>
        <ul ref={ulRef}>
          {session.cart.map((item) => (
            <li key={item.id}>
              {item.name} <small>(₩{item.price.toLocaleString()})</small>
              <button onClick={() => removeCartItem(item.id)}>X</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
