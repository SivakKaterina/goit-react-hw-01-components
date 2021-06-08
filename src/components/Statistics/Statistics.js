import React from 'react';
import PropTypes from "prop-types";
import S from './Statistics.module.css';


const Statistics = ({title,stats}) => {
    return <div className = {S.container}>
 <h2 className = {S.textTitle}>{title}</h2>
<ul className = {S.listOfIndicators}>
    {stats.map(({id, label, percentage}) => (
        <li key={id} className = {S.ListItem}>
          <span className = {S.label}>{label}</span>
          <span className = {S.percentage}>{percentage}%</span>
        </li>    
        ))}      
      </ul>
    </div>
   };


// Statistics.PropTypes = {
//   title: PropTypes.string.isRequired,
//   stats: PropTypes.arrayOf(
//      PropTypes.shape({
//        id: PropTypes.string.isRequired,
//        label: PropTypes.string.isRequired,
//        percentage: PropTypes.number.isRequired,
//     }),
//   ).isRequired,
// };


Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics