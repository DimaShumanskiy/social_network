import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {rootReducerType} from "../../redux/redux-store";
import {DialogsPageType} from "../../redux/store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body:string) => void
    sendMessage:() => void
}
const mapStateToProps = (state: rootReducerType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType  => {
  return{
      sendMessage: () => {
          dispatch(sendMessageCreator())
      },
      updateNewMessageBody:(body: string) => {
          dispatch(updateNewMessageBodyCreator(body))
      }
  }
}
const DialogsContainer = connect (mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer;