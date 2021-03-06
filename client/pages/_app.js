import App from 'next/app';
import axios from 'axios';
import Page from '../components/Page';
import '../public/sass/style.scss';

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:7777';
}

class MyApp extends App {
  static async getInitialProps ({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    // this exposes the query to the user
    pageProps.query = ctx.query;
    return {pageProps};
  }
  render () {
    const { Component, pageProps } = this.props;

    return (
      <Page>
        <Component { ...pageProps }/>
      </Page>
    );
  }
}

export default MyApp;