import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {ActionsTypes, DialogsPageType} from "../../redux/store";

type PropsDialogsType = {
    dialogsPage: DialogsPageType
    sendMessage: () => void
    updateNewMessageBody:(body: string) => void
}

const Dialogs = (props: PropsDialogsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);  //d- dialog
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>) // m - message
    const newMessageBody = state.newMessageBody;

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
        // props.dispatch(updateNewMessageBodyCreator(e.currentTarget.value))
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