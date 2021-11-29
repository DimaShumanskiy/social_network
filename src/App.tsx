import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Prodife/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/NavBar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Prodife/ProfileContainer";

type AppPropsType = {

}

const App = (props: AppPropsType) => {
    return (
            <div className="app-wrapper">
                <Header/>
                <NavbarContainer/>
                <div className="app-wrapper-content">
                    <Route path="/profile/:userId"
                           render={() => <ProfileContainer />}/>
                    <Route path="/dialogs"
                           render={() => <DialogsContainer />}/>
                     <Route path="/users"
                           render={() => <UsersContainer/>}/>

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/music" render={() => <Music/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>

                </div>
            </div>
    );
}
//

export default App;
