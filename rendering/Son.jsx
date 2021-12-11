import { memo } from 'react';

function Son({handleNumber}) {
  // const handleNumber = () => {};
  console.log('아들');
  return (
    <div>
      <div>1.아들입니다</div>
      <button type="button" onClick={handleNumber}>아들 버튼</button>
    </div>

  );
}

export default memo(Son);
