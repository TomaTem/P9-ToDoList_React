import {useEffect, useReducer} from 'react';
import {reducer} from '../reducers/reducer';

export function useLocalStorage(key, initialValue) {
  const [state, dispatch] = useReducer(reducer, initialValue, () => {
    const savedValue = JSON.parse(window.localStorage.getItem(key));
    return savedValue || initialValue;
  });
  useEffect(
    () => window.localStorage.setItem(key, JSON.stringify(state)),
    [key, state]
  );
  return [state, dispatch];
}