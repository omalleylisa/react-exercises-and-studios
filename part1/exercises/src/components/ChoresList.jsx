import React from 'react';
import classes from './ChoresList.module.css';

function ChoresList() {
   const chores = ['Do the dishes', 'Take out the trash', 'Vacuum the house', 'Water the plants'];
 
   return (
      <div>
        <h2 className={classes.choresHeading}>Chores List</h2>
        <ul>
          {chores.map((chore, index) => (
            <li key={index} className={classes.choresText}>{chore}</li>
          ))}
        </ul>
      </div>
    );
 }
 

export default ChoresList;