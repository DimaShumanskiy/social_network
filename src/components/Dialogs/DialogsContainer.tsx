import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {Store} from "redux";
import StoreContext from "../../StoreContext";


type PropsDialogsType = {
    // store: Store
    // dialogsPage: DialogsPageType
    // dispatch: (action: ActionsTypes) => void
}

const DialogsContainer = (props: PropsDialogsType) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                const onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator())
                }
                const onNewMessageChange = (body: string) => {
                    store.dispatch(updateNewMessageBodyCreator(body))
                }
                return <Dialogs
                    updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={state}
                />
            }
        }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;