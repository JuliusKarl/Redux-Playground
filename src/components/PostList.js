import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

export class PostList extends Component {
    render() {
        return (

            <div>
                {this.props.postList.map(post => console.log(post))}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { postList: state.postList}
};

export default connect(mapStateToProps, null)(PostList);