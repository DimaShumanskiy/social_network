import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {DialogType, MessageType} from "../../redux/state";



type PropsDialogsType = {
    dialogs : Array<DialogType>
    messages: Array<MessageType>
}

const Dialogs = (props: PropsDialogsType) => {

    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);  //d- dialog
    let messageElements = props.messages.map(m => <Message message={m.message}/>) // m - message

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>

    );
}

export default Dialogs;