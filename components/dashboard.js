import Link from 'next/link'
import { connect } from 'react-redux'
import Clock from './Clock'
import Panel from './panel'
import Button from 'react-md/lib/Buttons/Button'

export default connect(state => state)(({ title, linkTo, lastUpdate, light }) => {
  //console.log('dashboard')
  return (
    <div className="hello md-grid">
      <h1>{title}</h1>
      <Panel>
    <Button
      icon
      tooltipLabel='Close the interactive demo'
      tooltipDelay={150}
      tooltipPosition='left'
    >
      close
    </Button>
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

