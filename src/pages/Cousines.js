import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import listContainer from '../hoc/listContainer';
import ListItemCousine from '../components/ListItemCousine';

class Cousines extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            data: []
        };
    }

    render() {
        const EnhancedComponent = listContainer(
            ListItemCousine,
            'Cousine'
        );
        return (
            <Container>
                <EnhancedComponent />
            </Container>
        )
    }
}

export default Cousines;