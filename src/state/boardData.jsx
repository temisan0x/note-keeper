import { Subject } from "rxjs";
import uuid from "uuidv4";

//a subject is an observable that talks to many observers
let boardData = null;
export const dataSubject = new Subject();

dataSubject.subscribe((_boardData) => {
	boardData = _boardData;
});

//moves a random piece on the board
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
