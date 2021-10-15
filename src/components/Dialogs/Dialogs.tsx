import React from "react";
import s from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

//Type Props
// interface // используется как глобальная что бы уменьшить повторение
type GeneralDialogsType = {
    id: number,
    name: string
}
interface DialogItemPropsType extends GeneralDialogsType  {
// использует код из GeneralDialogsType  + можено дописать свой код
}
type MessagePropsType = {
    message: string
}

// Type data
interface dialogsType extends GeneralDialogsType {
}
type messagesType = {
    id: number
    message: string
}
type dialogsPageType = {
    dialogs:Array<dialogsType>
    messages:Array<messagesType>
}

//data
let dialogsPage: dialogsPageType = {
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
        {id: 6, message: "YO"}
    ]
}

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
const Message = (props: MessagePropsType) => {
    return (
        <div className={s.dialog}>{props.message} </div>
    )
}

const Dialogs = () => {

    let dialogsElements = dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);  //d- dialog
    let messageElements = dialogsPage.messages.map(m => <Message message={m.message}/>) // m - message

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