import * as React from 'react';

export function useReactCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: any[] = [],
): T {
  const ref = React.useRef<T>();

  ref.current = callback;

  return React.useCallback(
    function () {
      // @ts-ignore
      return ref.current!.apply(undefined, arguments);
    } as T,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps,
  );
}

export const useCallback = useReactCallback;

export default useReactCallback;
