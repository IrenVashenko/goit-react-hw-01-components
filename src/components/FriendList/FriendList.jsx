import { FriendListItem } from "./FriendListItem"
import css from "./FriendList.module.css"

export const FriendList = ({ friends }) => {
    return (
        <ul className={css.friendList}>
            {friends.map((friend, index) => (
                <FriendListItem
                    key={index}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}

                />
            ))}
        </ul>

    )
}
