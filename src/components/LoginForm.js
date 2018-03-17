import React, { Component } from 'react';
import { Container, Button, Form } from 'semantic-ui-react';

class LoginForm extends Component {
    render() {
        return (
            <Container>
                <Form className="login-form">
                    <Form.Field>
                        <label>E-mail</label>
                        <input placeholder='E-mail' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='Password' />
                    </Form.Field>
                    <Button type='submit'>Login</Button>
                </Form>
            </Container>
        )
    }
}

export default LoginForm;