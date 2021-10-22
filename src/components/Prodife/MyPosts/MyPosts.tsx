import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostType} from "../../../redux/state";


type MyPostsType = {
    posts: Array<PostType>
    addPost: (message: string) => void
    newPostText: string
    updateNewPostText:(newText: string) => void
}

const MyPosts = (props: MyPostsType) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    // let newPostElement = React.createRef<HTMLInputElement>();
    // let addPost = () => {
    //     if (newPostElement.current) {
    //         props.addPost(newPostElement.current?.value)  //делаем проверку что бы небыло undefined в типизации
    //     }
    // }   // сделать удаление после ввода

    const addPost = () => {
        props.addPost(props.newPostText)
    }
    const onPostChange = (e:ChangeEvent<HTMLInputElement>) => {
            props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My post </h3>
            <div>
                <div>
                    <input value={props.newPostText} onChange={onPostChange}/>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;