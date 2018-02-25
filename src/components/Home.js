import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTasks, postTask, patchTask, deletTask, putTask, getState } from '../ducks/reducer';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: '',
            input: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.addTask = this.addTask.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.completeTask = this.completeTask.bind(this);
    }
    componentDidMount() {
        const taskStyle = {
            display: 'flex',
        }
        var mappedtasks;
        var prom = this.props.getTasks()
        var tasks = new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, prom)
        }).then(res => {
            mappedtasks = res.value.map((x, i, arr) => {
                return <div key={i} style={taskStyle}>
                    <a href={`/edit/${x.id}`}><h3>{x.title}</h3></a>
                    <button onClick={()=>this.completeTask(x.id)}>complete</button>
                    <button onClick={()=>this.removeTask(x.id)}>X</button>
                </div>
            })
            return this.setState({ tasks: mappedtasks })
        })

        //    var mappedtasks = tasks.map((x, i, arr)=>{
        //        return <h3 key={i}>{x.title}</h3>
        //    })
        // console.edtasks)log(mapp
        //     this.setState({ tasks: mappedtasks })
    }
    componentWillReceiveProps(){
        const taskStyle = {
            display: 'flex',
        }
        var mappedtasks;
        var prom = this.props.getTasks()
        var tasks = new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, prom)
        }).then(res => {
            mappedtasks = res.value.map((x, i, arr) => {
                return <div key={i} style={taskStyle}>
                    <a href={`/edit/${x.id}`}><h3>{x.title}</h3></a>
                    <button onClick={()=>this.completeTask(x.id)}>complete</button>
                    <button onClick={()=>this.removeTask(x.id)}>X</button>
                </div>
            })
            return this.setState({ tasks: mappedtasks })
        })
    }
    handleChange(e) {
        
        this.setState({ input: e })

    }
    addTask() {
        this.props.postTask(this.state.input);
        const taskStyle = {
            display: 'flex',
        }
        var mappedtasks;
        var prom = this.props.getTasks()
        var tasks = new Promise(function (resolve, reject) {
            setTimeout(resolve, 100, prom)
        }).then(res => {
            mappedtasks = res.value.map((x, i, arr) => {
                return <div key={i} style={taskStyle}>
                    <a href={`/edit/${x.id}`}><h3>{x.title}</h3></a>
                    <button>complete</button>
                    <button onClick={()=>this.removeTask(x.id)}>X</button>
                </div>
            })
            return this.setState({ tasks: mappedtasks })
        })
    }
    removeTask(id) {
        this.props.deletTask(id);
        // const taskStyle = {
        //     display: 'flex',
        // }
        // let mappedtasks;
        // let prom = this.props.getTasks()
        // let tasks = new Promise(function (resolve, reject) {
        //     setTimeout(resolve, 100, prom)
        // }).then(res => {
        //     mappedtasks = res.value.map((x, i, arr) => {
        //         return <div key={i} style={taskStyle}>
        //             <a href={`/edit/${i}`}><h3>{x.title}</h3></a>
        //             <button>complete</button>
        //             <button onClick={this.removeTask(i)}>X</button>
        //         </div>
        //     })
        //     return this.setState({ tasks: mappedtasks })
        // })
    }
    completeTask(id) {
        this.props.putTask(id);
        // const taskStyle = {
        //     display: 'flex',
        // }
        // let mappedtasks;
        // let prom = this.props.getTasks()
        // let tasks = new Promise(function (resolve, reject) {
        //     setTimeout(resolve, 100, prom)
        // }).then(res => {
        //     mappedtasks = res.value.map((x, i, arr) => {
        //         return <div key={i} style={taskStyle}>
        //             <a href={`/edit/${i}`}><h3>{x.title}</h3></a>
        //             <button>complete</button>
        //             <button onClick={this.removeTask(i)}>X</button>
        //         </div>
        //     })
        //     return this.setState({ tasks: mappedtasks })
        // })
    }
    

    render() {
        return (
            <div>
                <input onChange={e => this.handleChange(e.target.value)}></input>
                <button onClick={this.addTask}>Add task</button>
                {this.state.tasks}
            </div>

        )
    }
}

function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps, { getTasks, postTask, patchTask, deletTask, putTask })(Home);