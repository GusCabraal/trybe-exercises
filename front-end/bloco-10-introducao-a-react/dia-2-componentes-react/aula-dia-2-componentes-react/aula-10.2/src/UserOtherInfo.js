import { Component } from "react";

class UserOtherInfo extends Component {
    render(){
        const {email, id} = this.props
    return (<p>{email} {id}</p>)
    }
}

export default UserOtherInfo;