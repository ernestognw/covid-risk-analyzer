import { useState, useEffect } from 'react';

const useLocalStorage = (key, config = { parse: false }) => {
  const [state, setState] = useState(
    config.parse
      ? JSON.parse(localStorage.getItem(key))
      : localStorage.getItem(key)
  );

  useEffect(() => {
    if (state)
      localStorage.setItem(key, config.parse ? JSON.stringify(state) : state);
    else localStorage.removeItem(key);
  }, [key, state, config.parse]);

  return [state, setState];
};

export default useLocalStorage;
