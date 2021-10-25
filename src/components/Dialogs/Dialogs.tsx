import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {ActionsTypes, DialogsPageType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";


type PropsDialogsType = {
    dialogsPage: DialogsPageType
    dispatch: (action: ActionsTypes) => void
}

const Dialogs = (props: PropsDialogsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);  //d- dialog
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>) // m - message
    const newMessageBody = props.dialogsPage.newMessageBody;

    const onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <input value={newMessageBody}
                               onChange={onNewMessageChange}
                               placeholder='Enter your message'/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Dialogs;