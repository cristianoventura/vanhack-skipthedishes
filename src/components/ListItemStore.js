import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class ListItemStore extends Component { 
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List.Item>
                <Link to={`/Products/${this.props.data.id}`}>
                    <List.Content>
                        <List.Header>{this.props.data.name}</List.Header>
                        {this.props.data.address}
                    </List.Content>
                </Link>
            </List.Item>
        )
    }
}

export default ListItemStore;