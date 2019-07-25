import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

export class PostList extends Component {
    render() {
        return (
            <div>
                {this.props.postList.map(post => {
                    return (
                        <div className="visiblePostList">
                            <hr></hr>
                                <button type="button" className="close">
                                    <span>&times;</span>
                                </button>
                                {post}
                            <hr></hr>
                        </div>
                 )})}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { postList: state.postList}
};

export default connect(mapStateToProps, null)(PostList);