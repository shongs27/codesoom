import { Fragment, memo, useState } from 'react';

function Son2() {
  const [state, setState] = useState(0);

  function onClickButton() {
    setState(state + 1);
  }
  return (
    <div>
      <div>2.아들2입니다</div>
      <button type="button" onClick={onClickButton}>
        아들2버튼
        {state}
      </button>
    </div>
  );
}

export default Son2;
