import React from 'react';
import NoteTitle from '../notes/NoteTitle';
import {DragDropContext, Droppable} from "react-beautiful-dnd"
import Card from '../notes/Card';

const Notes = () => {
    return (
        <>
            <NoteTitle />
            <Card/>
        </>
    )
}

export default Notes