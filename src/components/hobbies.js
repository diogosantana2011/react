import { hobbies } from "../utils/utils.js";

export default function Hobbies() {
    const listItems = hobbies.map(hobby =>
        <center>
            <ul
            key={hobby.id}
            style={{
                color: hobby.practiced ? 'darkgreen' : 'magenta' 
            }}
        >
            {hobby.name}
        </ul>
        </center>
    );

    return <ul>{listItems}</ul>
};