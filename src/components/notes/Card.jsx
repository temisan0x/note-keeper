import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { updateCard, deleteCard } from '../../state/boardData';

const Card = ({ listId, cardId, cardData }) => {

    const [editmode, setEditmode] = useState(false);

    const onSave = (content) => {
        updateCard(listId, cardId, content);
        setEditmode(false);
    };

    const handleContentClick = () => {
        setEditmode(true);
    };

    const handleDeleteClick = () => {
        deleteCard(listId, cardId);
    }

    return (
        <Draggable
            draggableId={cardId}
            index={cardData.position}
            disableInteractiveElementBlocking={!editmode}
        >
            {(draggableProvided) => (
                <div
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    editmode={editmode}
                >
                    <div onClick={handleContentClick}>
                        
                    </div>
                </div>
            )}
        </Draggable>
    )
}

export default Card