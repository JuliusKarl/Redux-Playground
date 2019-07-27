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

    render() {
        return (
            <div>
                <form className="text-left">
                    <textarea 
                        type="text" 
                        className="form=control width" 
                        onChange={this.changePost} 
                        value={this.state.post}>
                    </textarea>
                    <br/>
                    <Button 
                        className="btn btn-defaults" 
                        onClick={ () => {
                            this.state.post 
                            && this.props.addPost(this.state.post, this.state.id) 
                            && this.clearInput()}
                        }>Pin 
                    </Button>
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