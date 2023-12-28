import { user } from '../utils/utils';

export default function Profile() {
    return (
        <center>
            <h1>{user.name}</h1>
                <img
                    className="avatar"
                    src={user.imageUrl}
                    alt={'Photo of ' + user.name}
                    style={{
                        width: user.imageSize,
                        height: user.imageSize
                    }}
                />
        </center>
    )
};