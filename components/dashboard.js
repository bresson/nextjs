import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import Panel from './panel'
import TextField from 'react-md/lib/TextFields';

export default connect(state => state)(({ title, linkTo, lastUpdate, light }) => {
  //console.log('dashboard')
  return (
    <div className="hello md-grid">
      <h1>{title}</h1>
      <Panel>
        <TextField
          id="errorTitle"
          label="Title"
          defaultValue="I am amazing"
          error
          errorText="This is an example of some error message. It should automatically wrap lines as well. It just keeps going and going and going."
          className="md-cell md-cell--top"
        />
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

