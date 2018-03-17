import React, { Component } from 'react';
import { Image, List } from 'semantic-ui-react';
import { Link } from "react-router-dom";
// import PropTypes from 'prop-types';

import sushi from '../img/sushi.svg';
import pizza from '../img/pizza.svg';
import chinese from '../img/chinese.svg';
import vietnamise from '../img/vietnamise.svg';

class ListItemCousine extends Component { 
    constructor(props) {
        super(props);
    }

    renderImage(id) {
        switch (id) {
            case 1:
                return <Image avatar src={chinese} />
            case 2:
                return <Image avatar src={pizza} />
            case 3:
                return <Image avatar src={vietnamise} />
            case 4:
                return <Image avatar src={sushi} />
            default:
                return undefined;
        }
    }

    render() {
        return (
            <List.Item>
                <Link to={`/Stores/${this.props.data.id}`} className="cousine-item">
                    {this.renderImage(this.props.data.id)}
                    <List.Content>
                        <List.Header>{this.props.data.name}</List.Header>
                    </List.Content>
                </Link>
            </List.Item>
        )
    }
}

export default ListItemCousine;