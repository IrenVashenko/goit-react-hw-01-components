import css from "./FriendList.module.css"
import PropTypes from 'prop-types';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li className={css.item}>
            <span className={isOnline ? css.status_On : css.status_Off}>{isOnline}</span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    )
}

FriendListItem.prototype = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}