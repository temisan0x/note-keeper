import localforage from "localforage";
import { boardDataSubject } from "../state/boardData";

boardDataSubject.subscribe(boardData => {
    localforage.setItem("boardData", boardData)
});

const defaultBoardData = {
    "5cac8c9e-f91b-438a-9e18-00cea4667ee3": {
        position: 0,
        list_title: "take a note",
        cards: {
            "52f8d85a-0196-46f0-96f3-5878846851dd": {
                position: 0,
                card_content: "note item 1"
            },
            "271beef3-8082-4ec2-aa9b-955944aea405": {
                position: 2,
                card_content: "note item 2"
            }
        }
    },
}

localforage.getItem("boardData").then(function (boardData) {
    //first time run, populate the board with default data
    if (boardData === null) {
        boardDataSubject.next(defaultBoardData);
        return;
    }
})