import React, { Component } from 'react';
import { Grid, Icon, Label, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { getCartLength } from '../actions/cartActions';
import { Link } from 'react-router-dom';

import vanhack from '../img/vanhack.png';

class Header extends Component {
    constructor(props) {
        super(props);
    }
    
    renderCartLength() {
        if (this.props.length > 0) {
            return (
                <Label circular color="red" size="tiny">
                    {this.props.length}
                </Label>
            )
        }
    }

    render() {
        return (
            <div className="app-header">
                <Grid>
                    <Grid.Column floated='left' width={5}>
                        <Image src={vanhack} />
                    </Grid.Column>

                    <Grid.Column floated='left' width={5}>
                        <Link className="menu-link" to="/">All Cousines</Link>
                    </Grid.Column>

                    <Grid.Column floated='right' width={2} className="cart-container">
                        <Link to="/cart">
                            <Icon name="shopping cart" size="large" />
                            {this.renderCartLength()}
                        </Link>
                    </Grid.Column>
                </Grid>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { length: state.length };
}

export default connect(mapStateToProps, null)(Header);