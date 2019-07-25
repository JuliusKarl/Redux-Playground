import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewPost from './components/NewPost'
import PostList from './components/PostList'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggle = this.toggle.bind(this);
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  };
  
  render() {
    return (
      <Provider store={store}>
      <div className="App">
          <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
              <NavbarBrand href='/'>Redux Demo</NavbarBrand>
              <NavbarToggler onClick={this.toggle}></NavbarToggler>
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="https://jkmacro.netlify.com/">
                      Portfolio
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="mr-0" navbar>
                  <NavItem>
                    <NavLink href="https://github.com/JuliusKarl">
                      GitHub
                    </NavLink>
                  </NavItem>
                </Nav>
                <Nav className="mr-0" navbar>
                  <NavItem>
                    <NavLink href="https://www.linkedin.com/in/juliuskarl/">
                      LinkedIn
                    </NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Container>
          </Navbar>
          <Container>
            <NewPost />
            <PostList />
          </Container>
      </div>
      </Provider>
    );
  }
}

export default App;

