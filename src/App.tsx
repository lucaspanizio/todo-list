import { Fragment } from 'react/jsx-runtime';
import { GlobalStyles } from './GlobalStyles';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <h1
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        ToDo List
      </h1>
    </Fragment>
  );
}
