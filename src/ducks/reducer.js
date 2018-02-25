import axios from 'axios';

const initialState = {
    tasks: [],
}

const TEST = 'TEST';
const GETTASKS = 'GETTASKS';
const GETTASK = 'GETTASK';
const POSTTASK = 'POSTTASK';
const PATCHTASK = 'PATCHTASK';
const DELETETASK = 'DELETETASK';
const PUTTASK = 'PUTTASK';
const HI = 'HI'

// export function test() {
//     return {
//         type: TEST,
//         payload: console.log('testing complete')
//     }
// }

export function getTasks() {
    let gettaskss = axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => {
        return res.data
    })
    return {
        type: GETTASKS,
        payload: gettaskss
    }
}
export function getSingleTask(id) {
    let gettask = axios.get(`https://practiceapi.devmountain.com/api/tasks`).then(res => {
        return res.data
    })
    return {
        type: GETTASK,
        payload: gettask,
        id: id
    }
}
export function postTask(input) {
    var data;
    let posttasks = axios.post('https://practiceapi.devmountain.com/api/tasks', { title: input }).then(res => {
        return data = res.data
    })
    return {
        type: POSTTASK,
        payload: data
    }
}
export function patchTask() {
    let patchtask = axios.patch('https://practiceapi.devmountain.com/api/tasks/:id').then(res => {
        return res.data
    })
    return {
        type: PATCHTASK,
        payload: patchtask
    }
}
export function deletTask(id) {
    let data = axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res => {
        return res.data
    })
    return {
        type: DELETETASK,
        payload: data
    }
}
export function putTask(id) {
    let puttask = axios.put(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res => {
        return res.data
    })
    return {
        type: PUTTASK,
        payload: puttask
    }
}

export function getState() {
    return {
        type: 'HI'
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GETTASKS + '_FULFILLED':
            var task = action.payload
            return Object.assign({}, state, { tasks: task });
        case GETTASK + '_FULFILLED':
            let data;
            let task = action.payload
            for (var x = 0; x < task.length; x += 1) {
                if (task[x].id === action.id) {
                    data = task[x]
                }
            }
            console.log(task)
            return data
        case DELETETASK + '_FULFILLED':
            console.log(action.payload)
            return Object.assign({}, state, { tasks: action.payload });
        case POSTTASK + '_FULFILLED':
            let tasksss;
            if (state.tasks) {
                tasksss = state.tasks.slice();
            } else {
                tasksss = state.slice();
            }
            let newTask = state.tasks.push(action.payload);
            return Object.assign({}, state, { tasks: newTask });
        case PUTTASK + '_FULFILLED':
            return Object.assign({}, state, { tasks: action.payload });
        default:
            return state;
    }
}