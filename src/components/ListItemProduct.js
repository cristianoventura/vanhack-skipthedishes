import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { addItem } from '../actions/cartActions';

class ListItemProduct extends Component { 
    constructor(props) {
        super(props);
    }

    onItemClick() {
        swal({
            title: "Are you sure?",
            text: `Are you sure you want to add ${this.props.data.name} this product to your cart?`,
            icon: "info",
            buttons: true,
            dangerMode: true,
        }).then(res => {
            if (res) {
                this.props.addToCart(this.props.data);
            }
        });
    }

    render() {
        return (
            <List.Item
                className="product"
                onClick={() => this.onItemClick(this.props.data)}>
                <List.Content floated="right" className="product__price">
                    CAD {this.props.data.price.toFixed(2)}
                </List.Content>

                <List.Content>
                    <List.Header>{this.props.data.name}</List.Header>
                    {this.props.data.description}
                </List.Content>
            </List.Item>
        )
    }
}

function mapStateToProps(state) {
    return { 
        state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (obj) => {
            dispatch(addItem(obj));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItemProduct);