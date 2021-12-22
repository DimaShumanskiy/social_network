import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Prodife/Profile";
import {Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/NavBar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Prodife/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { useDispatch} from "react-redux";
import {getAuthUserData} from "./redux/authReducer";

type AppPropsType = {
}

const App = (props:AppPropsType) =>{

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAuthUserData())
    }, [])

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId?"
                           render={() => <ProfileContainer/>}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer/>}/>
                    <Route path="/users"
                           render={() => <UsersContainer/>}/>

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                    <Route path="/login" render={() => <Login/>}/>

                </div>
            </div>
        );
}

export default App;


// class App extends React.Component<AppPropsType> {
//
//     componentDidMount() {
//         this.props.getAuthUserData()
//     }
//     render() {
//         return (
//             <div className="app-wrapper">
//                 <HeaderContainer/>
//                 <NavbarContainer/>
//                 <div className="app-wrapper-content">
//                     <Route path="/profile/:userId?"
//                            render={() => <ProfileContainer/>}/>
//                     <Route path="/dialogs"
//                            render={() => <DialogsContainer/>}/>
//                     <Route path="/users"
//                            render={() => <UsersContainer/>}/>
//
//                     <Route path="/news" render={() => <News/>}/>
//                     <Route path="/music" render={() => <Music/>}/>
//                     <Route path="/settings" render={() => <Settings/>}/>
//                     <Route path="/login" render={() => <Login/>}/>
//
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default compose(
//     withRouter,
//     connect(null, {getAuthUserData})) (App);
//
