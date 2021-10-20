import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {DialogsPageType} from "../../redux/state";



type PropsDialogsType = {
    dialogsPage: DialogsPageType
}

const Dialogs = (props: PropsDialogsType) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);  //d- dialog
    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>) // m - message
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