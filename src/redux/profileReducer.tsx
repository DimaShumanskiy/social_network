import {PostType, ProfilePageType} from "./state";


const profileReducer = (state: ProfilePageType, action: any) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostType = {
                id: 5,
                message: action.postText
                // this._state.profilePage.newPostText
                ,
                likesCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ('')
            return state;
        case 'UPDATE-NEW-POST-TEXT' :
            state.newPostText = action.newText
            return state
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