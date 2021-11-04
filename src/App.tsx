import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Profile from "./components/Prodife/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import {rootReducerType} from "./redux/redux-store";
import {Dispatch, Store} from "redux";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: rootReducerType
    dispatch: Dispatch
    store: Store
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
                               store={props.store}
                               // profilePage={props.state.profilePage}
                               // dispatch={props.dispatch}
                           />}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer
                               store={props.store}
                           />}/>
                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>

                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
