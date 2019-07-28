import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deletePost, clearAll } from '../redux/actions'
import 'bootstrap/dist/css/bootstrap.min.css';
import DateTime from './DateTime';
import { Button } from 'reactstrap';

export class PostList extends Component {
    render() {
        return (
            <div id="postList">
                <br></br>
                <div className="postsTitle">
                    <h4>Task Board</h4>
                    {this.props.postList.length > 0 && <button 
                        onClick={() => this.props.clearAll()} 
                        type="button" 
                        className="close">
                            <small>
                                <small>
                                    Clear All
                                </small>
                            </small>
                    </button>}
                </div>
                {this.props.postList.map(post => {
                    return (
                        <div className="visiblePostList" key={post.id}>
                                <button 
                                    onClick={() => this.props.deletePost(post.id)} 
                                    type="button" 
                                    className="close">
                                        <span>&times;</span>
                                </button>
                                {post.post}
                                <DateTime />
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

function mapDispatchToProps(dispatch) {
    return {
        deletePost: (x) => dispatch(deletePost(x)),
        clearAll: () => dispatch(clearAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);