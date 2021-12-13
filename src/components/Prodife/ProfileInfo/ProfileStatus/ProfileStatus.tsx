import React, {useState} from 'react';

type ProfileStatusPropsType = {
  status: string
}
const ProfileStatus = (props: ProfileStatusPropsType) => {
    const[editMode, setEditMode] = useState<boolean>(true)

    const activateEdit =() => {
        setEditMode(!editMode)
    }
    const deactivateEdit = () => {
        setEditMode(!editMode)
    }
    return (
        <div>
            {editMode
                ? <p onDoubleClick={activateEdit}>{props.status}</p>
                : <input onBlur={deactivateEdit} type="text" value={props.status}/>
            }

        </div>
    );
};

export default ProfileStatus;