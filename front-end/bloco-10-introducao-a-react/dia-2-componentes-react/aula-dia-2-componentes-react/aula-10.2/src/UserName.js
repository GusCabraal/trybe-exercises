import { Component } from "react";
import './UserName.css'
class Username extends Component {
    render(){
       const name = this.props.name;
    return (<p className="UserName">{name}</p>)
    }
}

export default Username;