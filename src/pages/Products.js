import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

import listContainer from '../hoc/listContainer';
import ListItemProduct from '../components/ListItemProduct';

class Products extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            data: []
        };
    }

    render() {
        const EnhancedComponent = listContainer(
            ListItemProduct,
            `Store/${this.props.match.params.storeId}/products`
        );
        return (
            <Container>
                <EnhancedComponent />
            </Container>
        )
    }
}

export default Products;