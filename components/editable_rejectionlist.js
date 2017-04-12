import myData from '../dummy.json';

export default (props = JSON.parse(myData)) => {
  // console.log(myData.rejections)
  const mapPropsToDOM = rejections => {
    return rejections.map(rejection => (
      <div className="rejection">
        <div className="rejection__id">rejection.id</div>
        <div className="rejection__askee">rejection.askee</div>
        <div className="rejection__response">rejection.response</div>
        <div className="rejection__result">rejection.result</div>
        <div className="rejection__score">rejection.score</div>
      </div>
    ))
  }
  return (
      <div className="panel">
        <div className="rejection-list">
          <h1>Props</h1>
        </div>
      </div>
  )
}

