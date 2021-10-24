import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Prodife/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {ActionsTypes, RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar sideBar={props.state.sideBar}/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile
                               profilePage={props.state.profilePage}
                               dispatch = {props.dispatch}
                           />}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               dialogsPage={props.state.dialogsPage}/>}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
