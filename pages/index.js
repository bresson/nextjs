import React from 'react'
import 'isomorphic-fetch'
import { nextConnect, startClock } from '../store'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {green100, green500, green700} from 'material-ui/styles/colors';
import Dashboard from '../components/dashboard'
import Head from '../components/heading/head'
import Header from '../components/heading/header'
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941

// const muiTheme = getMuiTheme({
//   palette: {
//     primary1Color: green500,
//     primary2Color: green700,
//     primary3Color: green100,
//   },
// }, {
//   avatar: {
//     borderColor: null,
//   },
//   userAgent: 'all',
// });

const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

class App extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    // eslint-disable-next-line no-undef
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
  }

  componentDidMount () {
   this.timer = this.props.startClock();
  }

  componentWillUnmount () {
    clearInterval(this.timer)
    injectTapEventPlugin();
  }

  showAlert() {
    console.log(this)
    console.log(this.props.isServer)
  }

  render () {
    return (
      <MuiThemeProvider muiTheme={ getMuiTheme({ userAgent: userAgent })} >
        <Head />
        <Header />
        <Dashboard title='Index Page' linkTo='/other' />
      </MuiThemeProvider>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return({
        startClock: () => {dispatch(startClock())}
    })
}

export default nextConnect((state) => state, mapDispatchToProps)(App)
