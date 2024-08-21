// src/Table.js
import React from 'react';
import TableRow from './tablerow';

const Table = ({ data }) => {
  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>POS</th>
          <th>PLAYERS</th>
          <th>RUNS</th>
          <th>MAT</th>
          <th>INNS</th>
          <th>NO</th>
          <th>HS</th>
          <th>AVG</th>
          <th>BF</th>
          <th>SR</th>
          <th>100</th>
          <th>50</th>
          <th>4s</th>
          <th>6s</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((player, index) => (
          <TableRow key={index} player={player} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
