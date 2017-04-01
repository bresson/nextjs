import Link from 'next/link'
import { connect } from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import Clock from './Clock'
import Panel from './panel'


export default connect(state => state)(({ title, linkTo, lastUpdate, light }) => {
  //console.log('dashboard')
  return (
    <div className="hello md-grid">
      <h1>{title}</h1>
      <Panel>
        <RaisedButton label="Default" />
      </Panel>
      <Panel className="md-cell--6" />
      <Clock lastUpdate={lastUpdate} light={light} />
      <style jsx>{`
      .hello {
        color: red;
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: center;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>
    </div>
  )
  
})

