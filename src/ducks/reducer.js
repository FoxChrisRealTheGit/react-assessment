import axios from 'axios';

const initialState = {
    tasks: []
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
    let gettask = axios.get('https://practiceapi.devmountain.com/api/tasks').then(res => {
        return res.data
    })
    return {
        type: GETTASK,
        payload: gettask, id
    }
}
export function postTask(input) {
    let posttask = axios.post('https://practiceapi.devmountain.com/api/tasks', { title: input }).then(res => {
        return res.data
    })
    return {
        type: POSTTASK,
        payload: posttask
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
export function deleteTask(id) {
    let deletetask = axios.delete(`https://practiceapi.devmountain.com/api/tasks/${id}`).then(res => {
        return res.data
    })
    return {
        type: DELETETASK,
        payload: deletetask
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
            let tasks = state.tasks.slice();
            tasks.push(action.payload)
            return action.payload;
        case DELETETASK + '_FULFILLED':
            return state;
        case POSTTASK + '_FULFILLED':
            console.log(state.tasks)
            let tasksss = state.slice();
            let newTask = tasksss.push(action.payload);
            return { tasks: newTask }
        default:
            return state;
    }
}