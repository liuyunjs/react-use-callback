# react-use-callback

解决 useCallback 依赖陷阱
无需传入 useCallback 第二个参数，callback 每次执行时都能获取到最新 state
并且返回的都是同一个引用

## 安装

```
    npm install react-use-callback --save

    or

    yarn add react-use-callback
```

## 示例

```javascript
import * as React from 'react';
import useCallback from 'react-use-callback';

export default () => {
  const isFirst = React.useRef(true);
  const [count, setCount] = React.useState(0);

  const onClick = useCallback(() => {
    setCount(count + 1);
  });

  const onClick1 = React.useCallback(() => {
    setCount(count + 1);
  }, []);

  const onClick2 = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  React.useMemo(() => {
    if (isFirst) {
      return;
    }
    console.log('react-use-callback 引用变化');
  }, [onClick]);

  React.useMemo(() => {
    if (isFirst) {
      return;
    }
    console.log('react 原生 useCallback 传入依赖， 引用变化');
  }, [onClick2]);

  return (
    <div>
      <span>{count}</>
      <button onClick={onClick}>react-use-callback</button>
      <button onClick={onClick1}>react 原生 useCallback</button>
      <button onClick={onClick2}>react 原生 useCallback 传入依赖</button>
    </div>
  );
};
```
