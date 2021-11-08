import {PostType, ProfilePageType} from "./store";


let initialState = {
    posts: [
        {id: 1, message: "Hi,how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: 5,
                message: action.postText
                // this._state.profilePage.newPostText
                ,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ('')
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT' : {
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.newPostText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}
// если не ретурнить каджый кейс то он будет проваливаться дальше нужно будет ставить брэкпоинты
// switch case замена if else
//default -нужен для закрытия ошибки undefined

export const addPostActionCreator = (postText: string) => ({
    type: 'ADD-POST',
    postText: postText
} as const)  // синтексис возварата без return , as const - определение константы
export const changeNewActionCreator = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
} as const)


export default profileReducer;


// if (action.type === 'ADD-POST') {
//     let newPost: PostType = {
//         id: 5,
//         message: action.postText
//         // this._state.profilePage.newPostText
//         ,
//         likesCount: 0
//     }
//     state.posts.push(newPost)
//     state.newPostText = ('')
// } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
//     state.newPostText = action.newText
// }
//
// return state