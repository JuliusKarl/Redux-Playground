import React, { Component } from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Assets/logo.png'
//import store from './redux/store';
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

import { persistor, store } from './redux/store';
import{ PersistGate } from 'redux-persist/integration/react';

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
        <PersistGate 
          persistor={persistor} 
          loading={null}>
        <div className="App">
            <Navbar 
              color="dark" 
              dark 
              expand="sm" 
              className="mb-5">
              <Container>
                <NavbarBrand href='/'>
                  <img 
                    height="30"
                    src={Logo}/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}></NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink href="https://juliuskarl.dev/">
                        <small>PORTFOLIO</small>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="mr-0" navbar>
                    <NavItem>
                      <NavLink href="https://medium.com/@julius.karl.macrohon">
                        <small>MEDIUM</small>
                      </NavLink>
                    </NavItem>
                  </Nav>
                  <Nav className="mr-0" navbar>
                    <NavItem>
                      <NavLink href="https://www.linkedin.com/in/juliuskarl/">
                        <small>LINKEDIN</small>
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
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

