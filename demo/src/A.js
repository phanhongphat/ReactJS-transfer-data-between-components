import React, { Component } from 'react';

class A extends Component {
    state = {
        k: 10
    }

rt = () =>{
        this.props.callBack1(this.state.k)
}
    render() {
        return (
            <div onClick={this.rt}>
                {
                    this.props.children

                }
             </div>
    );
    }
}

export default A;