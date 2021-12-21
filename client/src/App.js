import { useState, useEffect } from 'react';
import './App.css';
import {
  ListItem,
  List,
  ListItemText,
  ListSubheader,
  Grid
} from '@material-ui/core';

const axios = require('axios');

function App() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setPerson] = useState(undefined);

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
      .then(res=> {
        setPeople(res.data.results);
      })
      .catch(err =>{
        console.log(err)
      })
  }, []);

  const getPersonData = (id) => {
    axios.get(`http://localhost:8008/people/${id+1}`)
      .then(res=> {
        setPerson(res.data);
      })
      .catch(err =>{
        console.log(err)
      })
  }

  const renderPeopleList = () => {
    return (
      <List
        sx={{width: '80%'}}
      >
        {people.map((value, id) => {
          return (
            <ListItem
              button
              key={id.toString()}
              onClick={() => getPersonData(id)}
            >
              <ListItemText id={id} primary={`${value.name}`} />
            </ListItem>
          );
        })}
      </List>
    )
  }

  const renderSelectedPerson = (person) => {
    if(!person) {
      return (
        <p>Click a name to see details.</p>
      )
    }
    return (
      <List
        sx={{width: '80%'}}
      >
        <ListItemText primary={`Name: ${person.name}`} />
        <ListItemText primary={`Height: ${person.height} cm`} />
        <ListItemText primary={`Mass: ${person.mass}`} />
        <ListItemText primary={`Hair Color: ${person.hair_color}`} />
        <ListItemText primary={`Skin Color: ${person.skin_color}`} />
        <ListItemText primary={`Gender: ${person.gender}`} />
        <ListItemText primary={`Birth Year: ${person.birth_year}`} />

        <ListSubheader>Home planet</ListSubheader>
        <ListItemText primary={`Title: n/a`} />
        <ListItemText primary={`Terrain: n/a`} />
        <ListItemText primary={`Population: n/a`} />

        <ListSubheader>Species</ListSubheader>
        <ListItemText primary={`Name: n/a`} />
        <ListItemText primary={`Average Lifespan: n/a`} />
        <ListItemText primary={`Classification: n/a`} />
        <ListItemText primary={`Language: n/a`} />

        <ListSubheader>Films</ListSubheader>
        <ListItemText primary={`Title: n/a`} />
        <ListItemText primary={`Director: n/a`} />
        <ListItemText primary={`Producers: n/a`} />
        <ListItemText primary={`Release Date: n/a`} />
      </List>
    )
  }
  
  return (
    <Grid container spacing={10} className='App'>
      <Grid item xs={5}>
        {renderPeopleList()}
      </Grid>

      <Grid item xs={5}>
        {renderSelectedPerson(selectedPerson)}
      </Grid>
    </Grid>
  );
}

export default App;
