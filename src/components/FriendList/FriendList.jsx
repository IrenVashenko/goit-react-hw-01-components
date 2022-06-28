import { FriendListItem } from "./FriendListItem"
import { Box } from "components/Box/Box"

export const FriendList = ({ friends }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            mb="70px"
        >
            <ul className="friend-list">
                {friends.map((friend, index) => (
                    <FriendListItem
                        key={index}
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}

                    />
                ))}
            </ul>
        </Box >
    )
}

