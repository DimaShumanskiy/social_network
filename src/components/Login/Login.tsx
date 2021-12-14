import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type FormDataType = {
    login: string,
    password: string,
    rememberMe:boolean
    // handleSubmit:() => void
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div><Field name={'login'} placeholder={'Login'} component={'input'} type="text"/></div>
                <div><Field name={'password'} placeholder={'Password'} component={'input'} type="text"/></div>
                <div><Field name={'rememberMe'} component={'input'} type="checkbox"/>remember me</div>
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