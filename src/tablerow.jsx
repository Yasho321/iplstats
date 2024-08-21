// src/TableRow.js
import React from 'react';

const TableRow = ({ player,index }) => {
  return (
    <tr class='bgr' >
      <td>{index+1}</td>
      <td ><div class='flex align bold'><div><img alt='player pic' class='image' src={player.img}/></div><div>{player.name}<br/><div class='teamnm'>{player.team}</div></div></div></td>
      <td >{player.runs}</td>
      <td>{player.mat}</td>
      <td>{player.inns}</td>
      <td>{player.no}</td>
      <td>{player.hs}</td>
      <td>{player.avg}</td>
      <td>{player.bf}</td>
      <td>{player.sr}</td>
      <td>{player.hun}</td>
      <td>{player.fif}</td>
      <td>{player.fours}</td>
      <td>{player.sixes}</td>
    </tr>
  );
};

export default TableRow;
