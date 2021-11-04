import React, {ChangeEvent} from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";


type PropsDialogsType = {
    store: Store
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
}

const DialogsContainer = (props: PropsDialogsType) => {

    let state = props.store.getState().dialogsPage

    const onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <Dialogs
            updateNewMessageBody={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />
    );
}

export default DialogsContainer;