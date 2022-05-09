import React, { useEffect, useRef, useState } from 'react'

const AdjustableTextArea = ({ placeholder, editMode, onSave, updateInput, onBlur }) => {
    const [inputvalue, setInputvalue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        setInputvalue(updateInput);
    }, [updateInput]);

    const resizeInput = () => {
        inputRef.current.style.height = "auto";
        inputRef.current.style.height = inputRef.current.scrollHeight + "px";
    };

    useEffect(() => {
        resizeInput();
    }, [inputvalue]);

    useEffect(() => {
        if (editMode) {
            inputRef.current.focus();
            inputRef.current.select();
        }
    }, [editMode]);

    const onChange = (e) => {
        setInputvalue(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            onSave(inputvalue);
            inputRef.current.blur()
        }
    }

    const styles = {
        edit: {
            cursor: editMode ? "text" : "pointer"
        }
    };
    return (
        <textarea
        style={styles.edit}
            ref={inputRef}
            value={inputvalue}
            onChange={onChange}
            rows={1}
            onKeyDown={onKeyDown}
            onBlur={() => onBlur(inputvalue)}
            spellCheck="false"
            editMode={editMode}
            placeholder={placeholder}
        >
        </textarea>
    )
}

export default AdjustableTextArea