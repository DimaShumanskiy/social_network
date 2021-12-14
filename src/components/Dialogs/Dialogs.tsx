import React from "react";
import s from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {DialogsPageType} from "../../redux/dialogsReducer";

type PropsDialogsType = {
    dialogsPage: DialogsPageType
    sendMessage: (newMessageBody: string) => void
}

type FormDataType ={
    newMessageBody: string
}

type AddMessageFormPropsType = {
    newMessageBody?: string
}
const AddMessageForm: React.FC<InjectedFormProps<FormDataType, AddMessageFormPropsType>  & AddMessageFormPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'newMessageBody'}
                   component={'input'}
                   type="text"
                   placeholder={'Enter your message'}
                   value={props.newMessageBody}
                   />
            <button
            >Send</button>
        </form>
    )
};

const AddMessageReduxForm = reduxForm<FormDataType , AddMessageFormPropsType >({form: 'dialogAddMessageForm'})(AddMessageForm)

const Dialogs = (props: PropsDialogsType) => {

    let state = props.dialogsPage

    let dialogsElements = state.dialogs.map((d,i) => <DialogItem name={d.name} key={i} id={d.id}/>);  //d- dialog
    let messageElements = state.messages.map((m, i) => <Message message={m.message} key={i}/>) // m - message
    const newMessageBody = state.newMessageBody;

    const onSubmit = (value:FormDataType) => {//redux-form
        console.log(value.newMessageBody)
        props.sendMessage(value.newMessageBody)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <AddMessageReduxForm
                        newMessageBody={newMessageBody}
                        onSubmit={onSubmit}
                    />
                </div>
            </div>
        </div>

    );
}
export default Dialogs;