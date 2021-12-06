import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

let initialState: InitialStateType = {
    posts: [
        {id: 1, message: "Hi,how are you?", likesCount: 5},
        {id: 2, message: "It's my first post", likesCount: 11},
    ],
    newPostText: '',
    profile: null
}

type InitialStateType = {
    posts: Array<PostType>,
    newPostText: string,
    profile: ProfileType | null
}
type PostType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfileType = {
    userId: string
    aboutMe: string,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
}
type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string,
}
type PhotosType = {
    small: string,
    large: string,
}

type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewActionCreator>
    | ReturnType<typeof setUserProfile>

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost: PostType = {
                id: 5,
                message: action.postText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            }
        }
        case 'UPDATE-NEW-POST-TEXT' : {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case 'SET-USER-PROFILE' : {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state
    }
}

export const addPostActionCreator = (postText: string) => ({
    type: 'ADD-POST',
    postText: postText
}) as const  // синтексис возварата без return , as const - определение константы
export const changeNewActionCreator = (newText: string) => ({
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText
}) as const
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const

//thunk

export const getUserProfile = (userId: string) =>
    (dispatch: Dispatch<ActionsTypes>) => {
        usersAPI.profileUser(userId)
            .then(response => {
                dispatch(setUserProfile(response.data))
            })
    }


export default profileReducer;

