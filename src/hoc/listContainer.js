import React, { Component } from 'react';
import { List } from 'semantic-ui-react';
import axios from 'axios';

const listContainer = (ListComponent, endpoint) => {
    return class extends Component {
        constructor(props) {
            super(props);

            this.state = {
                data: []
            }
        }

        componentDidMount() {
            const URL = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1/';
            let request = `${URL}/${endpoint}`;
            axios.get(request)
                .then(json => this.setState({ data: json.data }));
        }

        render() {
            return (
                <List divided verticalAlign='middle'>
                    {this.state.data.map(item => <ListComponent key={item.id} data={item} />)}
                </List>
            )
        }
    }
}

export default listContainer;