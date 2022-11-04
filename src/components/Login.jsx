import { useEffect, useRef } from 'react';
import { useSession } from '../hooks/session-context';

export const Login = () => {
  // console.log('@@ Login');
  const { login } = useSession();
  const userIdRef = useRef();
  const userNameRef = useRef();

  useEffect(() => {
    userIdRef.current.focus();
  }, []);

  console.log('End of Login');

  return (
    <>
      <h2>Login Please</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          login(userIdRef.current.value, userNameRef.current.value);
        }}
      >
        <label htmlFor='user-id'>UserID:</label>
        <input type='number' ref={userIdRef} />

        <label htmlFor='user-name'>UserName:</label>
        <input type='text' ref={userNameRef} />

        <button type='submit'>Login</button>
      </form>
    </>
  );
};
