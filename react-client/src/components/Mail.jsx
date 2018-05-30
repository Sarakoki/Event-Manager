import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Route, Link, Switch, browserHistory, BrowserRouter as Router} from 'react-router-dom'
import $ from 'jquery'
import Message from './Message.jsx'

class Mail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      to: '',
      from: '',
      text: '',
      date: '',
      messages: []
    }
    this.onChange = this.onChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  onChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  componentDidMount () {
    var that = this
    $.ajax({
      url: '/messages',
      type: 'GET',
      success: (data) => {
        console.log('in ajax get :', data)
        that.setState({
          messages: data.reverse()
        })
      }
    })
  }
  sendMessage () {
    $.ajax({
      url: '/messages',
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log('in ajax post :', data)
      }
    })
  }

  render () {
    return(
      <div>
  <section id="contact" bsStyle="">
            <div className="container">
                <div className="row">
                <div className="titleline-icon"></div>
                        <center><p bsStyle="color:#fff;"className='content-header wow fadeIn ' data-wow-delay='0.2s' data-wow-duration='2s'><h2>Get In Touch</h2> </p></center>
                    </div>
                    <div className="about_our_company" bsStyle="margin-bottom: 20px;">
                        <h1 bsStyle="color:#fff;">Write Your Message</h1>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <form name="sentMessage" id="contactForm" novalidate="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Recipent Name *" id="name" required="" 
                                        data-validation-required-message="Please enter your name." name="to" onChange={this.onChange}/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <textarea className="form-control" placeholder="Your Message *" id="messages" required="" data-validation-required-message="Please enter a message."onChange={this.onChange}></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                                <div className="col-lg-12 text-center">
                                    <div id="success"></div>
                                   <div className="group">
                                      <button type="submit" className="btn btn-warning col-xs-3 col-xs-offset-9" onClick={this.sendMessage} >Send 
                                     <span className="glyphicon glyphicon-send"></span></button>
                                  </div>
                                </div>
                                <div>
                              {this.state.messages.map((message)=>
                              <Message
                              key={message._id}
                              message={message} />
                              )}

                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
    )
  }
}

export default Mail
