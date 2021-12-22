import React, {useState, useEffect} from "react";
import axios from "axios";

import UserNameList from "../../components/UserNameList";
import UserDetails from "../../components/UserDetails";
import Loading from "../../components/Loading";

import './dashboard.css';

export default function Dashboard() {

  const [people, setPeople] = useState([]);
  const [selectedPerson, setPerson] = useState(undefined);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    axios.get(`https://testredspace.herokuapp.com/people/${id+1}`)
      .then(res=> {
        setPerson(res.data);
        setLoading(false);
      })
      .catch(err =>{
        console.log(err)
      })
  }

  return (
    <div className="userContainer">
      <div className="userNameList">
        <UserNameList data={people} handleClick={getPersonData}/>
      </div>
      <div className="userDetails">
        {loading && <Loading />}
        {!loading && <UserDetails data={selectedPerson} />}
      </div>
    </div>
  )
}
