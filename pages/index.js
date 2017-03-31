import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import { nextConnect } from '../store'
import Dashboard from '../components/dashboard'


class App extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    // eslint-disable-next-line no-undef
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
  }

  componentDidMount () {
    console.log('this props', nextConnect, this.props, this.state)
   this.timer = this.props.startClock()
   console.log(this.timer)
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>
        <p>{this.timer} !</p>
        <Dashboard title='Index Page' linkTo='/other' />
      </div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//     return({
//         startClock: () => {dispatch(startClock)}
//     })
// }

export default nextConnect((state) => state, startClock => store.dispatch(startClock()))(App)

// <head title={ this.props.title} />
// <header />
// <dashboard>
//   <panel>
//     <rejectionForm />
//   </panel>
//   <panel>
//     <calendar />
//     <score />
//     <editableRejectionLis>
//       <rejections />
//     <editableRejectionList />
//   </panel>
// </dashboard>
// <fooer />