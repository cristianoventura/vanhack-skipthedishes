import React, { Component } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';
import Header from './Header';
import Router from './Router';

class Wrapper extends Component {
    render() {
        return (
            <Container>
                <Router />
            </Container>
        )
    }
}

export default Wrapper;