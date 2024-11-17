import { Fragment } from 'react';
import { GlobalStyles } from './GlobalStyles';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Form } from './components/Form';
import { Summary } from './components/Summary';
import { List } from './components/List';
import { AppProvider } from './store/context';

export function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Header />
      <Content>
        <AppProvider>
          <section>
            <Form />
            <Summary />
            <List />
          </section>
        </AppProvider>
      </Content>
    </Fragment>
  );
}
