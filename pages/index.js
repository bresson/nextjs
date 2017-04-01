import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'
import { nextConnect, startClock } from '../store'
import Dashboard from '../components/dashboard'


class App extends React.Component {
  static async getInitialProps ({ store, isServer }) {
    // eslint-disable-next-line no-undef
    store.dispatch({ type: 'TICK', light: !isServer, ts: Date.now() })
    return { isServer }
  }

constructor(props){
    super(props);
    this.state = { 
      
    };

    //this.showAlert = this.showAlert.bind(this);

  }

  componentDidMount () {
    console.log('this props', nextConnect, this.props, this.state)
   //this.timer = this.props.dispatch(startClock())
   this.timer = this.props.startClock();
   console.log( 'hello', this.showAlert());
  }

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  showAlert() {
    console.log(this)
    console.log(this.props.isServer)
  }

  render () {
    return (
      <div>
        {console.log('this inside method', this.showAlert())}
        <button onClick={ () => this.showAlert()} >Click</button>
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