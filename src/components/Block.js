import React from 'react';
import BlockStyle from '../styles/BlockStyle';

export default class Block extends Component {
    render() {
        const {title, body, image} = this.props
        return (
            <div style='BlockContainer'>
                {/* <h1 style={BlockStyle.componentStyle} */}
                <h1>${title}</h1>
                <p>${body}</p>
                <p>${image}</p>
            </div>
        )
    }
}