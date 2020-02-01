import {
    ADD_RESOURCE, ADD_SUBJECT
} from '../actions/actionCreators';

const initialState = {
    subjects: [
        {
            id: "abcd",
            tab: "React"
        },
        {
            id: "efgh",
            tab: "Redux"
        }
    ],
    resources: [
        {
            id: "hijk",
            title: "React for Beginners",
            description: "Kent C. Dodds builds React from scratch.",
            link: "https://egghead.io/courses/the-beginner-s-guide-to-react",
            status: "Complete",
            subject: "React"
        },
        {
            id: "lmno",
            title: "React Docs",
            description: "Official documentation for React.",
            link: "https://reactjs.org/docs/getting-started.html",
            status: "In Progress",
            subject: "React"
        },
        {
            id: "qrst",
            title: "Redux Docs",
            description: "Official Redux documentation.",
            link: "https://redux.js.org/",
            status: "Todo",
            subject: "Redux"
        }
    ]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_RESOURCE:
            return {
                ...state,
                resources: [...state.resources, action.payload],
            }
        case ADD_SUBJECT:
            return {
                ...state,
                subjects: [...state.subjects, action.payload],
            }
        default:
            return state
    }
}

export default rootReducer;