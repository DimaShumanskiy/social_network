import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {rootReducerType} from "../../redux/redux-store";
import s from './../common/FormsControls/InputMyPosts.module.css'

type FormDataType = {
    email: string,
    password: string,
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name={'email'}
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
                    type={"password"}
                    validate={[required]}/>
            </div>
            <div>
                <Field
                    name={'rememberMe'}
                    component={Input}
                    type={"checkbox"}
                />remember me
            </div>
            {props.error && <div className={s.formSummaryError}>{props.error}</div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};
const LoginReduxForm = reduxForm<FormDataType>({form: 'Login'})(LoginForm)

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
    isAuth: boolean
}
const Login = (props: LoginPropsType) => {
    const onSubmit = (fromData: FormDataType) => {
        props.login(fromData.email, fromData.password, fromData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};
type mapStateToPropsType = {
    isAuth: boolean
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);