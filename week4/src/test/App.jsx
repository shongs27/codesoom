import ReactDOM from 'react-dom';

import { Provider, shallowEqual, useDispatch, useSelector } from 'react-redux';
import store from './store';
import Son from './Son';
import { useCallback } from 'react';
import { addTask } from './actions';

function App() {
  console.log('APP등장');
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleClick = useCallback(() => {
    dispatch(addTask());
  }, []);

  return (
    <div>
      <button type="button" onClick={handleClick}>
        부모버튼
      </button>
      <Son obj={tasks} />
    </div>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById('app')
);
