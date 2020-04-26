import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions'
import '../index.css';

export class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            post: '',
            id: 0
        })
        this.changePost = this.changePost.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    changePost = (event) => {
        this.setState({
            post: event.target.value
        })
    }
    clearInput() {
        this.setState({
            post: '',
            id: this.state.id + 1
        })
    }
    onSubmit(e) {
        e.preventDefault();
        if (this.state.post) {
            this.props.addPost(this.state.post, this.state.id);
            this.clearInput()}
    }

    render() {
        return (
            <div>
                <form 
                    className="text-left"
                    onSubmit={this.onSubmit}>
                    <input 
                        placeholder="New Task"
                        id="newPostTextArea"
                        type="text" 
                        className="form-control width" 
                        onChange={this.changePost} 
                        value={this.state.post}>
                    </input>
                    <br/>
                    <input 
                        type="submit" 
                        value=""
                        style={{display:"none"}}/>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (x, y) => dispatch(addPost(x, y))
    }
}

export default connect(null, mapDispatchToProps)(NewPost);