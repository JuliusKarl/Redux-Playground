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
                <form className="text-left">
                    <textarea 
                        type="text" 
                        class="form=control width" 
                        onChange={this.changePost} 
                        value={this.state.post}>
                    </textarea>
                    <br/>
                    <Button 
                        className="btn btn-defaults" 
                        onClick={ () => {
                            this.state.post 
                            && this.props.addPost(this.state.post) 
                            && this.clearInput()}
                        }>Pin Task
                    </Button>
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