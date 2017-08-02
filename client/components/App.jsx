import React from 'react'
import {getSomething} from '../api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      err: null,
      data: []
    }
  }
  // This didMount function will make a request upon load, rather than waiting for a button click

  // componentDidMount() {
  //   this.refreshData( )
  // }
  saveData(err, data) {
    this.setState({err, data: data || []})
  }
  refreshData() {
    getSomething(this.saveData.bind(this))
  }
  render() {
    let {err, data} = this.state
    const renderDataItem = (dataItem, key) => <h3 key={key}>{dataItem}</h3>
    const renderDataList = (dataList) => dataList.map(renderDataItem)
    return (
      <div>
        <h1>React/Api development has begun!</h1>
        <button onClick={this.refreshData.bind(this)}>Get Data</button>
        {err
          ? <h2>There is an error ;-; <br/> {err.message}</h2>
          : <h2>There is no error :)</h2>
        }
        {(data.length != 0)
          ? <h2>There is data: <br/>{renderDataList(data)}</h2>
          : <h2>There is no data ;-;</h2>
        }
      </div>
    )
  }
}
