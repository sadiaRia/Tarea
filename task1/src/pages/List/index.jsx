import React, { Component } from 'react'
import _ from 'lodash'
export default class List extends Component {
  state = {
    appointmentList: []
  }
  componentDidMount() {
    let localItem = localStorage.getItem('appointList');
    let list = localItem ? JSON.parse(localItem) : [];
    this.setState({ appointmentList: list })
  }
  render() {
    const { appointmentList } = this.state;
    return (
      <div>
        <div>
        {!_.isEmpty(appointmentList) ?
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {appointmentList.map((item, index) =>
                <tr>
                  <td>{item.firstName} {item.lastName}</td>
                  <td>{item.date}</td>
                  <td>{item.time}</td>
                </tr>
              )}
            </tbody>
          </table> :<div style={{textAlign:'center'}}> No appointment</div>}
        </div>
      </div>
    )
  }
}
