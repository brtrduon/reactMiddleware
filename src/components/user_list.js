import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUser(user) {
        <div className='card card-block'>
            <h4 className='card-title'>{user.name}</h4>
            <p className='card-text'>Cheese Factory</p>
            <a className='btn btn-primary'>Email</a>
        </div>
    }

    render() {
        return (
            <div>
                {this.props.users.map(this.renderUser)}
            </div>
        );
    }
}
// for each user, call the helper function 'renderUser' and return it into the div

function mapStateToProps(state) {
    return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);