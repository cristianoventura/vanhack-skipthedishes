import React, { Component } from 'react';
import { List, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import { removeItem } from '../actions/cartActions';

class ListItemCart extends Component { 
    constructor(props) {
        super(props);
    }

    removeFromCart() {
        swal({
            title: "Are you sure?",
            text: `Are you sure you want to remove this item from your cart?`,
            icon: "info",
            buttons: true,
            dangerMode: true,
        }).then(res => {
            if (res) {
                this.props.removeFromCart(this.props.data);
            }
        });
    }

    render() {
        return (
            <List.Item className="product product--cart">
                <List.Content floated="right" className="product__price">
                    CAD {this.props.data.price.toFixed(2)}
                </List.Content>

                <List.Content floated="left">
                    <Button className="button-remove"
                            size="mini"
                            circular
                            color='red'
                            icon='remove'
                            onClick={() => this.removeFromCart(this.props.data)}
                    />
                </List.Content>

                <List.Content>
                    <List.Header>{this.props.data.name}</List.Header>
                    {this.props.data.description}
                </List.Content>
            </List.Item>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromCart: (obj) => {
            dispatch(removeItem(obj));
        }
    }
}

export default connect(null, mapDispatchToProps)(ListItemCart);