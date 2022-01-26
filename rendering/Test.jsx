// https://react.vlpt.us/basic/19-React.memo.html
// useMemo, useCallback, memo를 통한 컴포넌트 렌더링 최적화를 위한 공부

import ReactDOM from 'react-dom';

import { useState, useCallback } from 'react';
import Son from './Son';
import Son2 from './Son2';

export default function Test() {
  const [only, setOnly] = useState(0);
  const [number, setNumber] = useState(0);

  function handleOnly() {
    setOnly(only + 1);
  }
  const handleNumber = useCallback(() => setNumber((prev) => prev + 1), []);
  console.log('부모');
  return (
    <div>
      <div>부모입니다</div>
      <button type="button" onClick={handleOnly}>
        부모만
      </button>
      <button type="button" onClick={handleNumber}>
        아들까지 {number}
      </button>
      <br />
      <br />

      <Son handleNumber={handleNumber} />
      <Son2 />
    </div>
  );
}

ReactDOM.render(<Test />, document.getElementById('app'));
