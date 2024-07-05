// Use the `useRef` hook to focus on input when pressing the button.

import React from 'react';
export function MyForm() {
    const focusInput = () => {
        // TODO: implement the body
    };

    return (
        <>
            <input type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}