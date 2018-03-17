import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { List, Header } from 'semantic-ui-react';

import ListItemCart from '../components/ListItemCart';

class Cart extends Component {
    constructor(props) {
        super(props);
    }

    renderCartList() {
        if (this.props.state.length > 0) {
            return this.props.state.map((item, key) => <ListItemCart key={key} data={item} />)
        }
        else {
            return <Header size="large" textAlign="center">Your cart is empty</Header>
        }
    }

    render() {
        return (
            <List>
                {this.renderCartList()}
            </List>
        )
    }
}

function mapStateToProps(state) {
    return { 
        state
    };
}

export default connect(mapStateToProps, null)(Cart);