import React, { Component } from 'react';
import Username from './UserName';
import UserOtherInfo from './UserOtherInfo';

class Table extends Component {
  render() {
    const users = [
      {
        id: 15,
        name: 'João',
        email: 'joaomaluquinho@hotmail.com',
      },
      {
        id: 15,
        name: 'Guto',
        email: 'gutomaluquinho@hotmail.com',
      },
      {
        id: 15,
        name: 'salah',
        email: 'mozinho@hotmail.com',
      },
    ];
    return users.map((user) => (
      <>
        <Username name={user.name} />
        <UserOtherInfo email={user.email} id={user.id} />
      </>
    ));
  }
}
export default Table;
