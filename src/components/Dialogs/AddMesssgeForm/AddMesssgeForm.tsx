import {maxLengthCreator, required} from "../../../utils/validators/validators";
import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormControls";

export type FormDataType = {
    newPostMessage:string
}
const  maxLength70 = maxLengthCreator(70)

const addPostForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={'newPostMessage'}
                component={Input}
                type="text"
                validate={[required,maxLength70]}
                placeholder={'Post message'}
            />
            <button>Add post</button>
            {/*<button>Remove</button>*/}
        </form>
    );
};
export const AddPostMessageForm = reduxForm<FormDataType>({form: 'ProfileAddNewPostForm'})(addPostForm)
