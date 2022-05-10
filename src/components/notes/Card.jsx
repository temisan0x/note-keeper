import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { updateCard, deleteCard } from '../../state/boardData';
import AdjustableTextArea from './AdjustableTextArea';

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
            className="container"
        >
            {(draggableProvided) => (
                <div
                    ref={draggableProvided.innerRef}
                    {...draggableProvided.draggableProps}
                    {...draggableProvided.dragHandleProps}
                    editmode={editmode}
                >
                    <div onClick={handleContentClick}>
                        <AdjustableTextArea
                            updateValue={cardData.card_content}
                            onBlur={onSave}
                            editmode={editmode}
                            onSave={onSave}
                        ></AdjustableTextArea>
                    </div>
                    <button onClick={handleDeleteClick}>x</button>
                </div>
            )}
        </Draggable>
    )
}

export default Card;
