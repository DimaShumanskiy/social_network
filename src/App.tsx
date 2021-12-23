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
import {useDispatch, useSelector} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import {rootReducerType} from "./redux/redux-store";
import Preloader from "./components/common/Preloader/Preloader";

type AppPropsType = {
}

const App = (props:AppPropsType) =>{

    const initialized = useSelector<rootReducerType,boolean>(state => state.app.initialized)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(initializeApp())
    }, [])

    if(!initialized){
        return <Preloader/>
    }
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
