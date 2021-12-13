import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {getUserProfile, ProfileType} from "../../redux/profileReducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


type PathParamsType = {
    userId: string
}

type ProfileContainerPropsType = {
    profile: ProfileType | null
    getUserProfile: (userId: string) => void
}

type PropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2';
        }
        this.props.getUserProfile(userId)
    }

    render() {
        //this.props.isAuth === false
        return (
            <section>
                <Profile
                    {...this.props}
                    profile={this.props.profile}/>
            </section>
        )
    }
}

// let AuthRedirectComponent = (props) => {
//     if (!this.props.isAuth) return <Redirect to={'/login'}/>
//     return <ProfileContainer  {...props}/>
// }

type MapStatePropsType = {
    profile: ProfileType | null
}
const mapStateToProps = (state: rootReducerType): MapStatePropsType => ({
    profile: state.profilePage.profile,
})

//  WithUrlDataContainerComponent -> connect -> AuthRedirectComponent -> Profile -> ProfileInfo
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default  WithAuthRedirect (connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent));