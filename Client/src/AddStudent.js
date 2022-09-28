import { useState } from "react";
import StudentsComp from "./Students";
import axios from 'axios'
import {useHistory} from 'react-router-dom'

function AddStudentComp(props) {

  const history = useHistory();

  const [student, setStudent] = useState({name : '', faculty : '', favMovie : '' , grades : []})
  const [grade, setGrade] = useState({profession : '', score : 0})


  const add = async () =>
  {
     await axios.post("http://localhost:8000/api/students",student )
     
     history.push("/")
  }

  return (
    <div className="App">
     <h3>Create new student</h3>

     Name : <input type="text" onChange={e => setStudent({...student, name : e.target.value}) } /><br/>
     Faculty : <input type="text" onChange={e => setStudent({...student, faculty : e.target.value}) } /><br/>
     Favorite Movie : <input type="text" onChange={e => setStudent({...student, favMovie : e.target.value}) } /><br/>
    Add Grades : <br/>
    Profession : <input type="text" onChange={e => setGrade({...grade, profession : e.target.value }) } />    
    Score : <input type="text" onChange={e => setGrade({...grade, score : e.target.value }) } />
    <input type="button" value="Add" onClick={() => setStudent({...student, grades : [...student.grades , grade]    })  } />
   
    <ul>
      {
        student.grades.map((item, index) =>
        {
          return <li key={index}>{item.profession} : {item.score}</li>
        })
      }
    </ul> <br/>

    <input type="button" value="Save" onClick={add} />

    </div>
  );
}

export default AddStudentComp;
