import { user } from '../utils/utils';

export default function Profile() {
    return (
        <div>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={`Displays the person ${user.name}`}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }
            }
        />
        </div>
    );
};