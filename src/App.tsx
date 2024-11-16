import { Fragment } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Content } from './components/Content';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Content>
        <Form />
      </Content>
    </Fragment>
  );
}
