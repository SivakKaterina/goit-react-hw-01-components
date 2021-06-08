import React from 'react';
import PropTypes from "prop-types";
import defaultImage from "./defaultImg.png"
import P from './Profile.module.css'

const Profile = ({name, tag, location, avatar, stats}) => {
    return <div className = {P.container}>
         <div className = {P.avatar}>
           <img className = {P.avatarImg}
      src={avatar}
      alt="Аватар пользователя"
         />
            <p className = {P.name}>{ name}</p>
            <p className = {P.tagLocation}>{ tag}</p>
    <p className = {P.tagLocation}>{location}</p>
  </div>

  <ul className = {P.listOfIndicators} >
    <li className = {P.ListItem}>
      <span className = {P.label}>Followers👩🏼‍🤝‍🧑🏻</span>
      <span className = {P.quantity}>{stats.followers}</span>
    </li>
    <li className = {P.ListItem}>
      <span className = {P.label}>Views😊</span>
      <span className = {P.quantity}>{stats.views}</span>
    </li>
    <li className = {P.ListItem}>
      <span className = {P.label}>Likes❤</span>
      <span className = {P.quantity}>{stats.likes}</span>
    </li>
  </ul>
    </div>
};

Profile.defaultProps = {
  avatar: defaultImage,
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};


export default Profile;
    