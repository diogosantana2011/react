export default function MyButton({count, onClick}) {
    return (
        <button className="clickMe" onClick={onClick}> 
            I'm a button. You've clicked me {count} times 
        </button>
    );
};