import React, { Component } from 'react'
import Component1 from '../functional/Component1'
import * as ACTION_TYPES from '../store/actions/action_types'
import * as ACTIONS from '../store/actions/actions'
import { connect } from 'react-redux'
import reducer1 from '../store/reducers/reducer1'
import user_reducer from '../store/reducers/user_reducer'

class Container1 extends Component {
    render() {
        const user_text = "text 1"
        return (
            <div>
                <button onClick={() => console.log(this.props.stateprop1)
                }>Get state</button>
                <button onClick={() => this.props.action1()}>dispatch action 1</button>
                <button onClick={() => this.props.action2()}>dispatch action 2</button>
                <button onClick={() => this.props.action_creator1()}>dispatch action creator 1</button>
                <button onClick={() => this.props.action_creator2()}>dispatch action creator 2</button>
                <button onClick={() => this.props.action_creator3(user_text)}>dispatch action creator 3</button>
                {this.props.stateprop1
                    ? <h1> {this.props.user_input}</h1>
                    : null
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        stateprop1: state.reducer1.stateprop1,
        user_input: state.user_reducer.user_text
    }
}

function mapDispatchToProps(dispatch){
    return {
        action1: () => dispatch(ACTIONS.SUCCESS),
        action2: () => dispatch(ACTIONS.FAILURE),
        action_creator1: () => dispatch(ACTIONS.success()),
        action_creator2: () => dispatch(ACTIONS.failure()),
        action_creator3: (text) => dispatch(ACTIONS.user_input(text))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container1)