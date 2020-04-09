import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testCase1, testCaseAdd, testCaseDelete } from '../actions/actionTemplate'
class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            obj: {},
            id: 1
        }
    }
    render() {
        return (
            <>
                count {this.props.tempCount}
                someArray: {this.tempSomeArray.map((item, index) => {
                return item
            })}

            update count:
            <button onClick = {()=>this.props.testCase1(this.state.count)}>Updating Counting</button>

            update testCaseAdd:
            <button onClick = {()=>this.props.testCaseAdd(this.state.obj)}>testCaseAdd</button>

            delete item:
            <button onClick = {()=>this.props.testCaseDelete(this.state.id)}>Delete Item</button>
            </>
        )
    }
}
let mapStateToProps = (state) => {
    return {
        tempCount: state.template.count,
        tempSomeArray: state.template.someArray
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        testCase1: (countValue) => dispatch(testCase1(countValue)),
        testCaseAdd: (dataObj) => dispatch(testCaseAdd(dataObj)),
        testCaseDelete: (id) => dispatch(testCaseDelete(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Container)