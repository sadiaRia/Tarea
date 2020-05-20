import React, { Component } from 'react'
import _ from 'lodash';

let OltimeSlotList = ['4.00-5.00', '5.00-6.00', '6.00-7.00']
let timeSlotList = OltimeSlotList;

export default class Form extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    age: '',
    date: '',
    time: '',
    appointmentList: [],
    errorMsg: ''
  }
  componentDidMount() {
    let list = this._getListFromLocalStorage();
    this.setState({ appointmentList: list })
  }
  _getListFromLocalStorage() {
    let localItem = localStorage.getItem('appointList');
    let list = localItem ? JSON.parse(localItem) : [];
    return list;
  }

  setFieldOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    if (event.target.name === 'date') {
      this.setState({
        time: ''
      })
      const selectedDate = event.target.value;
      let alreadyBookedSlot = _.filter(this.state.appointmentList, { date: selectedDate })
      let bookedSlot = [];
      _.forEach(alreadyBookedSlot, item => {
        bookedSlot.push(item.time)
      })
      const newTimeSlotList = []
      OltimeSlotList.filter(item => _.includes(bookedSlot, item) ? '' : newTimeSlotList.push(item));
      timeSlotList = !_.isEmpty(newTimeSlotList) ? newTimeSlotList : OltimeSlotList;
    }
  }

  resetState = () => {
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      address: '',
      age: '',
      date: '',
      time: '',
      errorMsg: ''
    })
  }
  _validateEmail = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@\']+(\.[^<>()[\]\\.,;:\s@\']+)*)|(\'.+\'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
  }

  onSubmit = () => {
    const { firstName, lastName, email, phoneNumber, address, age, date, time } = this.state;
    const payload = {
      firstName,
      lastName,
      email,
      phoneNumber,
      address,
      age,
      date,
      time
    }
    if (this._validateEmail(email)) {
      let list = this._getListFromLocalStorage();
      list.push(payload);
      localStorage.setItem('appointList', JSON.stringify(list));
      this.setState({ appointmentList: list });
      this.resetState();
    } else {
      this.setState({ errorMsg: 'Invalid Input' })
    }
  }

  checkInvalidInput = () => {
    const { firstName, lastName, email, phoneNumber, address, age, date, time } = this.state;
    if (firstName && lastName && email && phoneNumber && address && age && date && time) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    const { firstName, lastName, email, phoneNumber, address, age, date, time, errorMsg } = this.state;
    return (
      <div className='container'>
        <form>
          <div className="form-group">
            <label for="formGroupExampleInput">First Name</label>
            <input type="text" name='firstName' value={firstName || ''} className="form-control" id="formGroupExampleInput" placeholder="Enter First Name" onChange={this.setFieldOnChange} />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Last Name</label>
            <input type="text" name='lastName' value={lastName || ''} className="form-control" id="formGroupExampleInput" placeholder="Enter Last Name" onChange={this.setFieldOnChange} />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Email</label>
            <input type="email" name='email' value={email || ''} className="form-control" id="formGroupExampleInput" placeholder="Enter Email" onChange={this.setFieldOnChange} required />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Phone Number</label>
            <input type="text" name='phoneNumber' value={phoneNumber || ''} className="form-control" id="formGroupExampleInput" placeholder="Enter Phone Number" onChange={this.setFieldOnChange} />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Address</label>
            <input type="text" name='address' value={address || ''} className="form-control" id="formGroupExampleInput" placeholder="Enter address" onChange={this.setFieldOnChange} />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Age</label>
            <input type="number" name='age' value={age || ''} className="form-control" id="formGroupExampleInput" placeholder="Enter your Age" onChange={this.setFieldOnChange} />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Date</label>
            <input type="date" name='date' value={date || ''} className="form-control" id="formGroupExampleInput" placeholder="Select Date" onChange={this.setFieldOnChange} />
          </div>
          <div className="form-group">
            <label for="formGroupExampleInput">Time Slot</label>
            <select type="time" name='time' value={time || ''} className="form-control" id="formGroupExampleInput" onChange={this.setFieldOnChange}>
              <option value="">Please Select</option>
              {date ? !_.isEmpty(timeSlotList) && timeSlotList.map(item =>
                <option value={item}>{item}</option>
              ) : <option style={{ color: 'red' }}>Pick a date first</option>}
            </select>
            {_.isEmpty(timeSlotList) && <span style={{ color: 'red' }}>All slots are booked already</span>}
          </div>
          {errorMsg && <span style={{ color: 'red' }}>{errorMsg}</span>}
          <div className="form-group">
            <button disabled={this.checkInvalidInput()} type="button" className="btn btn-dark" onClick={this.onSubmit}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}
