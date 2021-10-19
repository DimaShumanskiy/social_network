import React from "react";
import s from "./../Dialogs.module.css"
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

const DialogItem = (props: DialogItemPropsType) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;