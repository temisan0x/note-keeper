import React, { useState } from 'react';
import { updateListTitle, deleteList } from '../../state/boardData';

const NoteTitle = ({ title, listId, setDragBlocking, dragHandleProps }) => {

    const [editmode, setEditMode] = useState(false);
    const [updatevalue, setUpdateValue] = useState(title);

    const onSave = (_title) => {
        if (_title.trim() === "") {
            //prevent accidentally delete of the title
            setUpdateValue("");
            setTimeout(() => setUpdateValue(title), 0);
        } else {
            updateListTitle(listId, _title);
        }

        setDragBlocking(false);
        setEditMode(false);
    };

    const handleTitleClick = () => {
        setDragBlocking(true);
        setEditMode(true);
    }

    const handleDeleteClick = () => {
        deleteList(listId);
    }

    return (
        <div {...dragHandleProps} className="container">
            <div onClick={handleTitleClick} className="note">
                <input
                    className='titleInput'
                    onSave={onSave}
                    updatevalue={updatevalue}
                    onBlur={onSave} //adds the initial value of "title"
                    editmode={editmode} //title edit mode
                />
                <button onClick={handleDeleteClick}>x</button>
            </div>hr
        </div>
    )
}

export default NoteTitle