import {useEffect, useState} from 'react';

function getSavedValue(key, defaultValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  return savedValue || defaultValue;
}
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(getSavedValue(key, initialValue));
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue];
}