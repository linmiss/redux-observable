import React, { Component } from 'react';

class Layout extends Component {
    render() {
        return (
            <div>
                {/*由于Layout是route的根，所以需要下面的：*/}
                {this.props.children} 
            </div>
        );
    }
}

export default Layout;