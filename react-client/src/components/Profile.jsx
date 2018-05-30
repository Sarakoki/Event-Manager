import React from 'react'
import ReactDOM from 'react-dom'
import { Row, Col, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import {Route, Link, Switch, browserHistory, BrowserRouter as Router} from 'react-router-dom'
import $ from 'jquery'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: {},
      sata: {},
      email: '',
      age: '',
      gender: '',
      image:'',
      editing: false
    }

    this.edit = this.edit.bind(this)
    this.save = this.save.bind(this)
    this.handelChange2 = this.handelChange2.bind(this)
    this.handelChange3 = this.handelChange3.bind(this)
    this.handelChange4 = this.handelChange4.bind(this)
    this.renderStart = this.renderStart.bind(this)
    this.renderedit = this.renderedit.bind(this)
    this.uploadImg = this.uploadImg.bind(this)
    this.getUploadImg = this.getUploadImg.bind(this)
  }


  getUploadImg(){
    var that = this
    $.ajax({
      url:"/user",
      type:"GET",
      success:(res)=>{
        console.log("check res", res)
   // that.setState({
   //  image:res.data
   // })

 }
})

  }

  uploadImg(img){
    var that = this
    console.log(img.target.files)
    var imgFile = img.target.files[0]
    var fileReader = new FileReader()
    fileReader.readAsDataURL(imgFile)
    fileReader.onload = function (e){
      console.log("alo alo", e.target.result)
      that.setState({image:e.target.result})
//       $.ajax({
//         url:'/profile',
//        type:"PUT",
//        data:{image:e.target.result},
//        success: (sata) => {
//         console.log("mohammed",sata)
//         //window.location.reload()
//       },
//       error:(err)=>{
// console.log("didnt work with me!")
//       }

//     })
    }
  }

  componentDidMount () {
    var that = this
    that.getUploadImg()

    $.ajax({
      url: '/user',
      type: 'GET',
      success: (data) => {
        that.setState({data: data})
        console.log('bbbbbbbbbbbbbbbbbbb', data)
      }
    })

    $.ajax({
      url: '/allevents',
      type: 'GET',
      success: (sata) => {
        that.setState({sata: sata})
        console.log('dddddddddddddddddd', sata)
      }
    })
  }

  edit () {
    this.setState({
      editing: true
    })
  }
  save () {
    var that = this
    this.state.data.email = this.state.email
    this.state.data.age = this.state.age
    this.state.data.gender = this.state.gender
    var user = this.state.data.username
    $.ajax({
      url: '/profile',
      type: 'PUT',
      data: this.state,
      success: function (result) {
        alert('Updated')
      }
    })
  }

  handelChange2 (e) {
    this.setState({
      email: e.target.value
    })
  }
  handelChange3 (e) {
    this.setState({
      age: e.target.value
    })
  }
  handelChange4 (e) {
    this.setState({
      gender: e.target.value
    })
  }

  renderStart () {
    if (this.state.data.events === undefined) {
      return (<h1>Error Loading</h1>)
    }

    var arr = []
    var use = this.state.data.username
    this.state.data.events.forEach(function (elem) {
      arr.push(<li>{elem.eventName +','+ elem.place}</li>

       )
    })

    if (this.state.sata === undefined) {
      return (<h1>Error Loading 2</h1>)
    }

    var rra = []
    this.state.sata.forEach(function (element) {
      if (element.creator === use) {
        rra.push(<li>{element.eventName}</li>)
      }
    })

    return (
      <div>
<<<<<<< HEAD
<<<<<<< HEAD
      <div className='container'>
      <div className='row'>
      <div className='col-xs-20 col-sm-8 col-md-8'>
      <div className='well well-sm'>
      <div className='row'>
      <div className='col-sm-6 col-md-4'>
      <img src={this.state.image || 'http://qualiscare.com/wp-content/uploads/2017/08/default-user.png'} alt='' className='img-rounded img-responsive' />
      <form>
      <input type = "file" onChange={this.uploadImg}/>
      </form>
      <h4 className='col-sm-6 col-md-4'>{this.state.data.username}</h4>
      </div>
      <div className='col-sm-6 col-md-8'>
      <p>
      <i className='glyphicon glyphicon-envelope' /><b>Email:</b>{this.state.data.email}
      <br />
      <br />
      <i className='glyphicon glyphicon-gift' /><b>Gender:</b><a>{this.state.data.gender}</a>
      <br />
      <br />
      <i className='glyphicon glyphicon-globe' /><b>Age:</b>{this.state.data.age}</p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Button className='col-sm-6 col-md-8' bsStyle='primary' onClick={this.edit}>Edit Profile</Button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
=======
      <div className="container">    
                  <div className="row">
                      <div className="panel panel-default">
                      <div className="panel-heading"></div>
                       <div id="profile" className="panel-body">
                      <div className="col-md-4 col-xs-12 col-sm-6 col-lg-4">
                       <img alt="User Pic" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" id="profile-image1" className="img-circle img-responsive"/> 
                      </div>
                      <div className="col-md-8 col-xs-12 col-sm-6 col-lg-8" >
                          <div className="container" >
                            <h2>User Name:{this.state.data.username}</h2>
                          </div>
                           <hr/>
                          <ul className="container details" >
                            <li><p><span className="glyphicon glyphicon-user one" bsStyle="width:50px;"></span><b>Gender:</b><a>{this.state.data.gender}</a></p></li>
                            <li><p><span className="glyphicon glyphicon-envelope one" bsStyle="width:50px;"></span><b>Email:</b>{this.state.data.email}</p></li>
                          </ul>
                          <div className="col-sm-5 col-xs-6 tital " ><b>Age:</b>{this.state.data.age}</div>
                      </div>
=======
        <div className='container'>
          <div className='row'>
            <div className='panel panel-default'>
              <div className='panel-heading' />
              <div id='profile' className='panel-body'>
                <div className='col-md-4 col-xs-12 col-sm-6 col-lg-4'>
                  <img alt='User Pic' src='https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg' id='profile-image1' className='img-circle img-responsive' />
>>>>>>> more styling and more worke on the map
                </div>
                <div className='col-md-8 col-xs-12 col-sm-6 col-lg-8' >
                  <div className='container' >
                    <h2>User Name:{this.state.data.username}</h2>
                  </div>
                  <hr />
                  <ul className='container details' >
                    <li><p><span className='glyphicon glyphicon-user one' bsStyle='width:50px;' /><b>Gender:</b>{this.state.data.gender}</p></li>
                    <li><p><span className='glyphicon glyphicon-envelope one' bsStyle='width:50px;' /><b>Email:</b>{this.state.data.email}</p></li>
                  </ul>
                  <div className='col-sm-5 col-xs-6 tital ' ><li><b>Age:</b>{this.state.data.age}</li></div>
                </div>
              </div>
              <div id='but' className='col-md-8 col-xs-12' bsStyle='margin: 0px;padding: 0px;'>
                <Button id='but' className='col-md-4 col-xs-4 well' bsStyle='primary' onClick={this.edit}>Edit Profile</Button>
                <Link to='/Mail'><Button id='but' className="col-md-4 col-xs-4 well" bsStyle='primary'><i className="fa fa-thumbs-o-up fa-lg"></i>Mail Us</Button></Link>
              </div>
            </div>
<<<<<<< HEAD
>>>>>>> more styling
=======

          </div>
        </div>
>>>>>>> more styling and more worke on the map
        {/* <Col md={2}>
              <span id="textcolor" >User Name: <p className="fa-1x"> {this.state.data.username}</p></span>
          </Col>
          <Col md={2}>
              <span id="textcolor" >Email: <p className="fa-1x"> {this.state.data.email}</p></span>
          </Col>
          <Col md={1}>
            <span id="textcolor" >Age: <p className="fa-1x"> {this.state.data.age}</p></span>
          </Col>
          <Col md={1}>
            <span id="textcolor" >Gender: <p className="fa-1x"> {this.state.data.gender}</p></span>
          </Col>
          <Col md={1}>
            <Button bsStyle="success" onClick={this.edit}>Edit</Button>
          </Col>
        */}
        <br />
        <div>
<<<<<<< HEAD
        <Col md={2} />
        <Col md={2}>
        <span id='textcolor' >Attended Events:</span>
        <ul>
        {arr}
        </ul>
        </Col>
        <Col md={4} />
        <Col md={2}>
        <span id='textcolor' >Created Events:</span>
        <ul>
        {rra}
        </ul>
        </Col>
=======
          <Col md={2} />
          <Col md={2}>
            <span id='textcolor' ><b>Attended Events:</b></span>
            <div className='container'>
              <div className='card float-left'>
                <div className='row '>
                  <div className='col-sm-7'>
                    <div className='card-block'>
                      <p>{arr}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </Col>
          <Col md={4} />
          <Col md={2}>
            <span id='textcolor' ><b>Created Events:</b></span>
            <div id='font' className='container'>
              <div className='card float-left'>
                <div className='row '>
                  <div className='col-sm-7'>
                    <div className='card-block'>
                      <p>{rra}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
>>>>>>> more styling
        </div>
        </div>
        )
  }

  renderedit () {
    var user = this.state.data
    // var imgUrl = user.imgUrl;

    // <div className="col-md-3" style={{'paddingLeft':'20px'}}>
    //      <img src={imgUrl}  width = '250px' className="img-thumbnail"/>
    //    </div>
    return (
      <div className='row'>
      <div className='col-md-3' style={{'paddingLeft': '20px'}} />

      <div className='col-md-6'>
      <FormControl
      bsSize='large'
      value={this.state.email}
      placeholder='Email'
      onChange={this.handelChange2}
      />
      <hr />
      <FormControl
      bsSize='large'
      value={this.state.age}
      placeholder='Age'
      onChange={this.handelChange3}
      />
      <hr />

      <FormControl componentClass='select' placeholder='Gender' name='gender' onChange={this.handelChange4} required value={this.state.gender}>
      <option hidden>Gender</option>
      <option value='female'>Female</option>
      <option value='male'>Male</option>
      </FormControl>
      <hr />
      <Button bsStyle='success' onClick={this.save}>Save</Button>
      </div>
      </div>
      )
  }

  render () {
    if (this.state.editing) {
      return (
        this.renderedit()
        )
    } else {
      return (
        this.renderStart()
        )
    }
  }
}

export default Profile
