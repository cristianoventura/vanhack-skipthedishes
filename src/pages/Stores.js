import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';

import listContainer from '../hoc/listContainer';
import ListItemStore from '../components/ListItemStore';

class Stores extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            data: []
        };
    }

    render() {
        const EnhancedComponent = listContainer(
            ListItemStore,
            `Cousine/${this.props.match.params.cousineId}/stores`
        );
        return (
            <Container>
                <EnhancedComponent />
            </Container>
        )
    }
}

export default Stores;