// interface dialogsType extends GeneralDialogsType {}
// берем типизацию из Dialogs
//type post data "MyPost"

import {rerenderEntireTree} from "../render";

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}
export type DialogType = {
    id: number,
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type FriendsType = {
    id: number
    name: string
}
type NewPostTextType = {
    newPostText: string
}
export type SideBarType = {
    friends: Array<FriendsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}

let state: StateType = {
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Shasa"},
            {id: 5, name: "Viktor"},
            {id: 6, name: "Valera"}
        ],
        messages: [
            {id: 1, message: "YO"},
            {id: 2, message: "HI"},
            {id: 3, message: "PRIVET"},
            {id: 4, message: "YO"},
            {id: 5, message: "YO"},
            {id: 6, message: "YO"}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: "Hi,how are you?", likesCount: 5},
            {id: 2, message: "It's my first post", likesCount: 11},
        ],
        newPostText: "aa"
    },
    sideBar: {
        friends: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Andrey"}
        ]
    }

}

export const addPost = (postMessage: string ) => {
    let newPost: PostType = {
        id:5 ,
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ('')
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText: string ) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export default state;