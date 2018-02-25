import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSingleTask, getTasks, postTask, patchTask,patchTaskTitle, deletTask, putTask, getState } from '../ducks/reducer';


class EditView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            tasks: ''

        }
    }
    componentDidMount() {
        const taskStyle = {
            display: 'flex',
        }
        var mappedtasks;
        var id = this.props.match.params.id
        let prom = this.props.getSingleTask(id)
        var tasks = new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, prom)
        }).then(res => {
            mappedtasks = res.value.map((x, i, arr) => {

                if (x.id == id) {
                    return (
                        <div key={i} style={taskStyle}>
                            <h3>{x.title}</h3>
                            <button onClick={() => this.completeTask(x.id)}>complete</button>
                            <div><h4>{x.description}</h4></div>
                            <button onClick={() => this.handleDescriptionChange}>changeDescription</button>
                            <button onClick={() => this.removeTask(x.id)}>X</button>
                        </div>
                    )
                }
            })
            return this.setState({ tasks: mappedtasks, title: '', description: '' })
        })

    }
    componentWillReceiveProps() {
        const taskStyle = {
            display: 'flex',
        }
        var mappedtasks;
        var id = this.props.match.params.id
        let prom = this.props.getSingleTask(id)
        var tasks = new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, prom)
        }).then(res => {
            mappedtasks = res.value.map((x, i, arr) => {
                if (x.id == id) {
                    return (
                        <div key={i} style={taskStyle}>
                            <h3>{x.title}</h3>
                            <button onClick={() => this.updateTaskTwo(x.id)}>change Title</button>
                            <button onClick={() => this.completeTask(x.id)}>complete</button>
                            <h4>{x.description}</h4><button onClick={() => this.updateTask(id)}>changeDescription</button>
                            <button onClick={() => this.removeTask(x.id)}>X</button>
                        </div>
                    )
                }
            })
            return this.setState({ tasks: mappedtasks })
        })
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
    removeTask(id) {
        this.props.deletTask(id);
    }
    completeTask(id) {
        this.props.putTask(id);
    }
    updateTask(id){
        
        this.props.patchTask(id, this.state.description);
    }
    updateTaskTwo(id){
        
        this.props.patchTaskTitle(id, this.state.title);
    }
    render() {
        return (
            <div>
                <a href='/'>Return to tasks</a>
                <div>
                    {this.state.tasks}
                    <input onChange={e=> this.handleTitleChange(e.target.value)}></input>
                    <input onChange={e => { this.handleDescriptionChange(e.target.value) }}></input>
                    <a href='/'><button>Save</button></a>
                    <a href='/'><button>Cancel</button></a>
                    <button onClick={() => this.removeTask(this.props.match.params.id)}>Delete</button>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return state;
}
export default connect(mapStateToProps, { getTasks, patchTaskTitle, postTask, patchTask, deletTask, putTask, getSingleTask })(EditView);