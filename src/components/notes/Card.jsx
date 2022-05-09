import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { updateCard, deleteCard } from '../../state/boardData';

const Card = ({ listId, cardId, cardData }) => {
    
    const [editmode, setEditmode] = useState(false);

    

    return (
        <div>Card</div>
    )
}

export default Card