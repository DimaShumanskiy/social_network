import React, {ComponentType} from "react";
import {DialogsPageType, sendMessageCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {Dispatch , compose} from "redux";
import {WithAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    sendMessage:(newMessageBody: string) => void
}
const mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
  return{
      sendMessage: (newMessageBody: string) => {
          dispatch(sendMessageCreator(newMessageBody))
      },
  }
}

// compose->connect->WithAuthRedirect->dialogs



export default compose<ComponentType>(connect (mapStateToProps, mapDispatchToProps), WithAuthRedirect)(Dialogs);

