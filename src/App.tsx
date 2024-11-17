import { Fragment } from 'react';
import { GlobalStyles } from '@/GlobalStyles';
import { Header, Content, Form, Summary, List } from '@/components';
import { AppProvider } from '@/store/context';

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
