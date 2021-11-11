import {SideBarType} from "./store";

let initialState = {
    friends: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Andrey"}
    ]
}
const sideBarReducer = (state = initialState, action: any) => {
    return state
}
export default  sideBarReducer;