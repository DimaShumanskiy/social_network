import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";

type FormDataType = {
    login: string,
    password: string,
    rememberMe:boolean
    // handleSubmit:() => void
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field
                        name={'login'}
                        placeholder={'Login'}
                        component={Input}
                        type={"text"}
                        validate={[required]}/>
                </div>
                <div>
                    <Field
                        name={'password'}
                        placeholder={'Password'}
                        component={Input}
                        type={"text"}
                        validate={[required]}/>
                </div>
                <div>
                    <Field
                        name={'rememberMe'}
                        component={Input}
                        type={"checkbox"}
                    />remember me</div>
                <div><button>Login</button></div>
            </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)


const Login = () => {
    const onSubmit = (fromData: FormDataType) => {
        console.log(fromData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;