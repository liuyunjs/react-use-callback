import * as React from 'react';

export function useCallback<T extends (...args: any[]) => any>(callback: T) {
  const ref = React.useRef<T>();

  ref.current = callback;

  return React.useCallback(function (...args: any[]) {
    return ref.current!(...args);
  }, []);
}

export default useCallback;
