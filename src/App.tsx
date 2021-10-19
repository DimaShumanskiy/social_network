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
import {DialogType, MessageType, PostType,  StateType} from "./redux/state";



type AppPropsType = {
    // posts: Array<PostType>
    // dialogs: Array<DialogType>
    // messages: Array<MessageType>
    state: StateType
}

const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path="/profile"
                           render={() => <Profile
                               state={props.state.profilePage}/>}/>
                    <Route path="/dialogs"
                           render={() => <Dialogs
                               state={props.state.dialogsPage}
                               // dialogs={props.state.messagesPage.dialogs}
                               // messages={props.state.messagesPage.messages}
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
