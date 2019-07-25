import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { addPost } from '../redux/actions'

export class NewPost extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            post: ''
        })
        this.changePost = this.changePost.bind(this);
    }

    changePost = (event) => {
        this.setState({
            post: event.target.value
        })
    }
    clearInput() {
        this.setState({
            post: ''
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div class="input-group">
                        <input type="text" class="form=control" onChange={this.changePost} value={this.state.post}></input>
                        <Button className="btn btn-default" onClick={() => {this.props.addPost(this.state.post); this.clearInput()}}>Post</Button>
                    </div>
                </form>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: (x) => dispatch(addPost(x))
    }
}

export default connect(null, mapDispatchToProps)(NewPost);