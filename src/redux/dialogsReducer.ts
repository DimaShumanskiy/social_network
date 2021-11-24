import {ActionsTypes} from "./store";


let initialState = {
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
}
// export type DialogsActionsTypes = ReturnType<typeof updateNewMessageBodyCreator> | ReturnType<typeof sendMessageCreator>

const dialogsReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            return {
                ...state,
                newMessageBody: action.newMessage
            }
        // stateCopy.newMessageBody = action.newMessage
        case 'SEND_MESSAGE':
            let newMessage = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 10, message: newMessage}]
            }
        default:
            return state
    }

}

export default dialogsReducer;

export const updateNewMessageBodyCreator = (newMessage: string) => ({
    type: 'UPDATE_NEW_MESSAGE_BODY',
    newMessage: newMessage
}) as const
export const sendMessageCreator = () => ({type: 'SEND_MESSAGE'} as const)
