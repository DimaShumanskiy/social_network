import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateUserStatus:(status: string) => void
}
const ProfileStatus = (props: ProfileStatusPropsType) => {
    const[editMode, setEditMode] = useState<boolean>(true)
    const[status, setStatus] = useState<string>(props.status)
    useEffect(() => {
        // if(status !== props.status){
            setStatus(props.status)
        // }
    },[props.status])

    const activateEdit =() => {
        setEditMode(!editMode)
    }
    const deactivateEdit = () => {
        setEditMode(!editMode)
        props.updateUserStatus(status)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div>
            {editMode
                ? <p onDoubleClick={activateEdit}>{props.status ? props.status: 'напиши что нибудь '}</p>
                : <input onBlur={deactivateEdit}
                         autoFocus={true}
                         type="text" value={status}
                         onChange={onChangeHandler}
                />
            }

        </div>
    );
};

export default ProfileStatus;