import React, { Component } from 'react';

class A extends Component {
    state = {
        k: 10
    }


    render() {
        return (
            <div>
                {
                    this.props.render(this.state.k)

                }
             </div>
    );
    }
}

export default A;