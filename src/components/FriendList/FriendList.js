import React from 'react';
import PropTypes from "prop-types";
import F from './FriendList.module.css'

const FriendList = ({friends}) => (
   <ul className = {F.listContainer}>
      {friends.map(({ avatar, name, isOnline, id }) => (
            <li className = {F.itemList} key={id}>
              <span className={isOnline ? F.statusOnline : F.statusOffline}></span>
              <img className={F.avatar} src={avatar} alt={name} width="48" />
              <p className ={F.name}>{name}</p>
          </li>
      )
      )}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  )
}


 export default FriendList







