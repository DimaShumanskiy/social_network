import React, {ComponentType} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {getUserProfile, getUserStatus, ProfileType, updateUserStatus} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = {
    status: string
    profile: ProfileType | null
    getUserProfile: (userId: string) => void
    getUserStatus: (userId: string) => void
    updateUserStatus:(status: string) => void
    authorizedUserId: string
    isAuth: boolean
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId)  {
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfile(userId)//получение профиля
        this.props.getUserStatus(userId) // получение статуса user


    }

    render() {
        return (
            <section>
                <Profile
                    {...this.props}
                    profile={this.props.profile}
                    status={this.props.status}
                    updateUserStatus={this.props.updateUserStatus}
                />
            </section>
        )
    }
}


type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: string
    isAuth: boolean
}
const mapStateToProps = (state: rootReducerType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: String(state.auth.data?.id),
    isAuth: state.auth.isAuth

})

// //  WithUrlDataContainerComponent -> connect -> AuthRedirectComponent -> Profile -> ProfileInfo
// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// WithAuthRedirect (connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));
export default compose<ComponentType>(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
//->connect ->withRouter -> WithAuthRedirect->ProfileContainer    - обертки над компонентой