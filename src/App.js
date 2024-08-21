
// src/App.js
import React from 'react';
import Table from './table';
import './App.css';

const data = [
  {img:'https://scores.iplt20.com/ipl/playerimages/Virat%20Kohli.png?v=1' , name:'Virat Kohli',team:'RCB' ,runs:741 ,mat:15 ,inns:15 ,no:3 ,hs:'113*' ,avg:61.75 ,bf:479 ,sr:154.69 ,hun:1 ,fif:5 ,fours:62 ,sixes:38  },
  {img:'https://scores.iplt20.com/ipl/playerimages/Ruturaj%20Gaikwad.png?v=1' , name:'Ruturaj Gaikwad',team:'CSK' ,runs:583 ,mat:14 ,inns:14 ,no: 3,hs:'108*' ,avg:53.00 ,bf:413 ,sr:141.6 ,hun:1 ,fif:4 ,fours:58 ,sixes: 18 },
  {img:'https://scores.iplt20.com/ipl/playerimages/Riyan%20Parag.png?v=1' , name:'Riyan Parag' ,team:'RR', runs:573 ,mat:16 ,inns:14 ,no:3 ,hs:'84*' ,avg:52.09 ,bf:384 ,sr:149.21 ,hun:0 ,fif:4 ,fours:40 ,sixes:33  },
  
  {img:'https://scores.iplt20.com/ipl/playerimages/Travis%20Head.png?v=1' , name:'Travis Head' ,team:'SRH',runs:567 ,mat:15 ,inns:15 ,no: 1,hs:102 ,avg:40.50 ,bf:296 ,sr:191.55 ,hun:1 ,fif:4 ,fours:64 ,sixes:32  },
  {img:'https://scores.iplt20.com/ipl/playerimages/Sanju%20Samson.png?v=1' , name:'Sanju Samson' ,team:'RR',runs:531 ,mat:16 ,inns:15 ,no:4 ,hs:86 ,avg:48.27 ,bf:346 ,sr:153.46 ,hun: 0,fif:5 ,fours:48 ,sixes:24  },
  {img:'https://scores.iplt20.com/ipl/playerimages/Sai%20Sudharsan.png?v=1' , name:'Sai Sudarshan' ,team:'GT',runs:527 ,mat:12 ,inns:12 ,no:1 ,hs:103 ,avg:47.91 ,bf:373 ,sr:141.28 ,hun:1 ,fif:2 ,fours:48 ,sixes: 16 },
  {img:'https://scores.iplt20.com/ipl/playerimages/K%20L%20Rahul.png?v=1' , name:'KL Rahul' ,team:'LSG',runs:520 ,mat:14 ,inns:14 ,no:0 ,hs:82 ,avg:37.14 ,bf:382 ,sr:136.12 ,hun:0 ,fif:4 ,fours:45 ,sixes:19  },
  {img:'https://scores.iplt20.com/ipl/playerimages/Nicholas%20Pooran.png?v=1' , name:'Nicholas Pooran' ,team:'LSG',runs:499 ,mat:14 ,inns:14 ,no:6 ,hs:75 ,avg:62.38 ,bf:280 ,sr:178.21 ,hun: 0,fif:3 ,fours:35 ,sixes: 36 },
  {img:'https://scores.iplt20.com/ipl/playerimages/Sunil%20Narine.png?v=1' , name:'Sunil Narine' ,team:'KKR',runs:488 ,mat:14 ,inns:14 ,no:0 ,hs:109 ,avg:34.86 ,bf:270 ,sr:180.74 ,hun:1 ,fif:3 ,fours:50 ,sixes: 33 },
  {img:'https://scores.iplt20.com/ipl/playerimages/Abhishek%20Sharma.png?v=1' , name:'Abhishek Sharma' ,team:'SRH',runs:484 ,mat:16 ,inns:16 ,no:1 ,hs:'75*' ,avg:32.27 ,bf:237 ,sr:204.21 ,hun:0 ,fif:3 ,fours:36 ,sixes: 42 },
  // Add more player data as needed
];

function App() {
  return (
    <div className="App">
      <h1>IPL Overall Stats</h1>
      <Table data={data} />
    </div>
  );
}

export default App;
