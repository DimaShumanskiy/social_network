import {ActionsTypes, PostType} from "./store";


let initialState = {
    posts: [
        {id: 1, message: "Hi,how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case 'UPDATE-NEW-POST-TEXT' : {
             return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => ({
    type: 'ADD-POST',
    postText: postText
} )as const  // синтексис возварата без return , as const - определение константы
export const changeNewActionCreator = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
} )as const


export default profileReducer;

