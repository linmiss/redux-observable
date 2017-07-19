import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddNum extends Component {
    
    componentWillMount() {
        this.props.dispatch({type: 'ADD_NUM', payload: {count: 3}})
    }
    render() {
        console.log(this.props,555555)
        return (
            <div>
                <h1>AddNum</h1>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    const { addNum } = state
    return {
        ...addNum
    }
}
export default connect(mapStateToProps)(AddNum);