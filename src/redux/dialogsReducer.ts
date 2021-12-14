
let initialState: DialogsPageType = {
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
}

export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody?: string
}
type DialogType = {
    id: number,
    name: string
}
type MessageType = {
    id: number
    message: string
}

type DialogsActionsTypes =
    | ReturnType<typeof sendMessageCreator>

const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsActionsTypes): DialogsPageType => {

    switch (action.type) {
        case 'SEND_MESSAGE':
            let newMessage = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: 10, message: newMessage}]
            }
        default:
            return state
    }
}

export default dialogsReducer;

export const sendMessageCreator = (newMessageBody: string) => ({type: 'SEND_MESSAGE', newMessageBody} as const)
