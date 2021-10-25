import {DialogsPageType} from "./store";


const dialogsReducer = (state: DialogsPageType, action: any) => {
    switch (action.type) {
        case 'UPDATE_NEW_MESSAGE_BODY':
            state.newMessageBody = action.newMessage
            return state
        case 'SEND_MESSAGE':
            const newMessage = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 10, message: newMessage})
            return state
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

// if (action.type === 'UPDATE_NEW_MESSAGE_BODY') {
//     state.newMessageBody = action.newMessage
// } else if (action.type === 'SEND_MESSAGE') {
//     let newMessage = state.newMessageBody
//     state.newMessageBody = ''
//     state.messages.push({id: 10, message: newMessage})
// }
//
// return state
// }