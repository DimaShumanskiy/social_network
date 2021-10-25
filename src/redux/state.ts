// interface dialogsType extends GeneralDialogsType {}
// берем типизацию из Dialogs
//type post data "MyPost"


import profileReducer, {addPostActionCreator, changeNewActionCreator} from "./profileReducer";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogsReducer";
import sideBarReducer from "./sideBarReducer";

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
export type SideBarType = {
    friends: Array<FriendsType>
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string

}
export type RootStateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (store: StoreType) => void
    subscribe: (observer: (store: StoreType) => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

// type ChangeNewPostActionType = {  // переписали на синтаксис ReturnType<typeof changeNewActionCreator>
//     type: 'UPDATE-NEW-POST-TEXT'
//     newText: string
// }

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewActionCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof sendMessageCreator>

    let store: StoreType = {
    _state: {
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
                {id: 6, message: "YO"},
            ],
            newMessageBody: ''
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi,how are you?", likesCount: 5},
                {id: 2, message: "It's my first post", likesCount: 11},
            ],
            newPostText: '',
        },
        sideBar: {
            friends: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Andrey"}
            ]
        }

    },
    _callSubscriber() {
        console.log("state changed")
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer // observer - callback
    },
    dispatch(action) {  // action это обьект который имеет {type: ' '}

        this._state.profilePage = profileReducer(this._state.profilePage, action); // вынесли всю логику в reducer
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(store)

    }
}
// actionCreator


export default store;

// window.store = store;
// store -- OOP
