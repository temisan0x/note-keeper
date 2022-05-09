import { Subject } from "rxjs";
import uuid from "uuidv4";

//a subject is an observable that talks to many observers

let boardData = null;
export const dataSubject = new Subject();

dataSubject.subscribe((_boardData) => {
	boardData = _boardData;
});

//moves a random piece within the board
export const reorderListPosition = (initialPosition, newPosition) => {
	Object.values(boardData).forEach((list) => {
		if (list.position === initialPosition) {
			list.position = newPosition;
			return;
		}
		if (
			list.position < Math.min(initialPosition, newPosition) ||
			list.position > Math.max(initialPosition, newPosition)
		) {
			return;
		}
		if (initialPosition < newPosition) {
			list.position--;
			return;
		}
		list.position++;
	});
	dataSubject.next({ ...boardData });
};

export const reorderCardPosition = (source, destination, cardId) => {
	//moves a random piece between same cards positions
	if (source.droppableId === destination.droppableId) {
		const { cards } = boardData[source.droppableId];

		Object.values(cards).forEach((card => {
			if (card.position === source.index) {
				card.position = destination.index;
				return;
			}
			if (card.position < Math.min(source.index, destination.index) ||
				card.position> Math.max(source.index, destination.index)
			) {
				return;
			} 
			if (source.index < destination.index) {
				card.position--;
				return;
			}
			card.position++;
		}))
	}
	//moving a random piece between different cards positions
	else {
		const sourceCards = boardData[source.droppableId].cards;
		const destinationCards = boardData[destination.droppableId].cards;
		const movingCards = boardData[source.droppableId].cards[cardId];

		Object.values(sourceCards).forEach(card => {
			if (card.position >= source.index) {
				card.position--;
			}
		});

		Object.values(destinationCards).forEach(card => {
			if (card.position >= destination) {
				card.position++;
			}
		});
		
		delete boardData[source.droppableId].cards[cardId];
		movingCards.position = destination.index;
		boardData[destination.droppableId].cards[cardId] = movingCards;
	}

	dataSubject.next({...boardData})
}
