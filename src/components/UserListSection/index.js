import { Component } from "react";
import SelectedUsersList from './SelectedUsersList'
import UsersList from './UsersList'

class UserListSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      users: props.userDB.map((user)=>({...user, isSelected:false}))
    }
  }

  setUserSelector = (newUsers)=>{this.setState({users:newUsers})}

  render(){
    const {users} = this.state;
   return <>
   <header><SelectedUsersList users={users}/></header>
   <main><UsersList  users={users} setUserSelector={this.setUserSelector}/></main> 
  </>;  
  }
}
export default UserListSection;