import React, { Component } from 'react'
import {connect} from 'react-redux'
import Footer from './Footer.js'
import './App.css'
import {
  changeUser,
  fetchUser,
  createUser,
  deleteUser,
  updateUser
} from './actions'

class App extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  state = {
    name: '',
    userId:'',
    userName:''
  }

  handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({[name]: value});

  }
  handleSubmit = () => {
    this.props.createUser(this.state);
  }
  handleDelete = (e) => {
    const {id} = e.target;
    this.props.deleteUser(id);
  }
  handletoEditform = (e) => {
    const {id} = e.target;
    var userselect = [];
    const {userlist} = this.props.users;
    userlist.map(data => {
      if (data != null)
        return userselect.push(data)
    })
    userselect = userselect.filter(data => data.curriculum_id == id)
    userselect.map(data => {
      return this.setState({userId: data.curriculum_id, userName: data.name})
    });

  };
  handleUpdate = (e) => {
    const {userName,userId} = this.state;

    const user = {
      name: userName,
    };
    const id = userId
    this.props.updateUser(id, user)
  }
  render() {
    const {userlist} = this.props.users;
    const {name,userId, userName} = this.state;
    const {
      handleSubmit,
      handleChange,
      handleDelete,
      handletoEditform,
      handleUpdate
    } = this;
    return (
      <div className="bg-body">
        <header className="App-header">
          <h1 className="App-title">Client-Assignment</h1>
        </header>
        <p className="App-intro">
          <h2>College of Computing</h2>
       <ul>
         {
           userlist.map((data, index) => {
             if (data != null) {
               return <li
                 key={data.id}>{data.curriculum_id + "." + " " + data.name}
                 <button className="edit-button" id={data.curriculum_id} onClick={handletoEditform}>Edit</button>
                 <button className="delete-button" id={data.curriculum_id} onClick={handleDelete}>Delete</button>
               </li>
             }
           })
         }
       </ul>
       <h2>ADD Curriculum</h2>
        <input className="mg-left" type="text" name="name" size="35" onChange={handleChange} value={name}/>
       <button className="mg-left" onClick={handleSubmit}>Submit</button>
       <h2>Edit Curriculum</h2>
       <input className="mg-left" type="text" name="userName" size="35" onChange={handleChange} value={userName}/>
       <button className="mg-left" onClick={handleUpdate}>Update</button>
        </p>
        <Footer />
      </div>

    );
  }
}

const mapStateToProps = ({users}) => {
 return {
   users,
 }
}
export default connect(mapStateToProps, {changeUser, fetchUser, createUser, deleteUser, updateUser})(App);
