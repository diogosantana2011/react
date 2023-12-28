import { useState } from 'react';

export function MyButton() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    };

    return (
        <button className="clickMe" onClick={handleClick}> 
            I'm a button. You've clicked me {count} times 
        </button>
    );
};