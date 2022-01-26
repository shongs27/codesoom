import { memo } from 'react';

function userPropsEqual(prevUser, nextUser) {
  console.log(prevUser, nextUser);
  //   return prevUser.obj.id === nextUser.obj.id;
}

function Son({ obj }) {
  console.log('Son 등장');

  return (
    <>
      <button type="button">아들버튼</button>
    </>
  );
}

export default memo(Son, userPropsEqual);
