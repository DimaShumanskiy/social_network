import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/authReducer";


type HeaderContainerType = {
    isAuth: boolean,
    login: string| null | undefined ,
    getAuthUserData: () => void
    logout: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header
            {...this.props}
        />
    }

}
type mapStateToPropsType  = {
    isAuth: boolean,
    login: string | null | undefined ,
}
const mapStateToProps = (state: rootReducerType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.data?.login,
})


export default connect(mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);