import { Fragment } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Summary } from './components/Summary';
import { Card } from './components/Card';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Content>
        <Form />
        <Summary />
        <Card />
      </Content>
    </Fragment>
  );
}
