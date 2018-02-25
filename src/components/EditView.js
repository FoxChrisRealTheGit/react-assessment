import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleTask, getTasks, postTask, patchTask, deleteTask, putTask, getState } from '../ducks/reducer';


class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',

        }
    }
    componentDidMount() {
        var id = this.props.match.params.id
        this.props.getSingleTask(id)
        console.log(id);
    }
    handleTitleChange(e) {
        this.setState({ title: e })
    }
    handleDescriptionChange(e) {
        this.setState({ description: e })
    }
    addTask() {
        this.props.postTask(this.state.input);
    }
    removeTask() {
        this.props.deleteTask();
    }
    completeTask() {
        this.props.putTask();
    }

    render() {
        return (
            <div>
                <a href='/'>Return to tasks</a>
                <div>
                    <button>Save</button>
                    <button>Cancel</button>
                    <button>Delete</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, { getTasks, postTask, patchTask, deleteTask, putTask, getSingleTask })(EditView);