import React from 'react';
import PropTypes from "prop-types";
import T from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className = {T.container}>
  <thead className = {T.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody>
        {items.map(({ id, type, amount, currency }) => (
            <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
            </tr>
                ) )}            
    </tbody>
</table>);



TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    }),
  ),
};
    


export default TransactionHistory;