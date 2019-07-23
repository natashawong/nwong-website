import React from 'react';

export default class Scroll extends Component {
    render() {
        constructor(props); {
            super(props);
            this.state = { offSet: 0 };
            const {children} = this.props
        }
        return(
            <div>${children}</div>
        )
    }

    ComponentDidMount() {
        window.addEventListener('scroll', this.shift)
    }

    ComponentWillUnmount() {
        window.addEventListener('scroll', this.shift);
    }

    shift() {
        this.setState({
            offset: window.pageYOffset
        })
    }
}