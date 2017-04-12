import React from 'react'
import 'isomorphic-fetch'
import { nextConnect, startClock } from '../store'
import Dashboard from '../components/dashboard'
import Head from '../components/heading/head'
import Header from '../components/heading/header'

class App extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    if (isServer) {
      console.log('IS SERVER')
    }
    console.log('isServer')
    // eslint-disable-next-line no-undef
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
  }

  componentDidMount () {
   this.timer = this.props.startClock();
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  showAlert() {
    // console.log(this)
    // console.log(this.props.isServer)
  }

  render () {
    return (
      <div>
        <Head />
        <Header />
        <Dashboard title='Index Page' linkTo='/other' />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return({
        startClock: () => {dispatch(startClock())}
    })
}

export default nextConnect((state) => state, mapDispatchToProps)(App)
