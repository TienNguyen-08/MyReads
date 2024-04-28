import { useState, useEffect, useRef } from 'react';

export const useDebounce = (value, delay) => {
  // Create a ref to store the timeout ID
  const timeoutRef = useRef(null);

  // State to hold the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Clear any existing timeout before setting a new one
    clearTimeout(timeoutRef.current);

    if (value !== undefined) { // Handle undefined values gracefully
      timeoutRef.current = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
    }

    // Cleanup function to clear timeout on unmount
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value, delay]); // Only re-run effect if value or delay changes

  return debouncedValue;
};
