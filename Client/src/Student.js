import { useEffect, useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

function StudentComp(props) {

  const history = useHistory()

  const [updateMode, setUpdateMode] = useState(false)
  const [student, setStudent] = useState({name : '', faculty : '', favMovie : '' , grades : []})

  useEffect(() =>
  {
    setStudent(props.studData)
  },[])

  const update =async  () =>
  {
    await axios.put("http://localhost:8000/api/students/" + props.studData._id, student)
    window.location.reload();
  }

  const deleteStudent = async () =>
  {
    await axios.delete("http://localhost:8000/api/students/" + props.studData._id)
    window.location.reload();

  }
  const navigate = () =>
  {
    history.push("/faculty/" +  props.studData._id)
  }

  return (
    <div>
    <div className="App" style={{width : "300px", borderStyle : "solid", borderColor : "blue", borderWidth : "3px"}}>
     <h5>Student Data</h5>

     {
       !updateMode ? <div>
                          Name : {student.name} <br/>
                          Faculty : {student.faculty} <br/>
                    </div> : 
                     <div>
                        Name : <input type="text" onChange={e => setStudent({...student, name : e.target.value}) } value={student.name} /><br/>
                        Faculty : <input type="text" onChange={e => setStudent({...student, faculty : e.target.value}) } value={student.faculty} /><br/>
                        <input type="button" value="save" onClick={update} />
                    </div>
                   
     }

    

     <input type="button" value="Update" onClick={() => setUpdateMode(!updateMode) } />
     <input type="button" value="Delete" onClick={deleteStudent } /> <br/>
     <input type="button" value="Other Faculty Students" onClick={navigate} /> <br/>

      <br/>

     Favorite Movie : <img src={student.favMovie} /> <br/>
     Grades : <br/>
     {
       student.grades &&
              <table border="1">
              {
              student.grades.map((item,index) =>
                {
                  return <tr key={index}>
                    <td>{item.profession}</td>
                    <td>{item.score}</td>
                  </tr>
                })
              }
            </table>
     }
     
     <br/>
    </div>
    <br/>  <br/>
    </div>
  );
}

export default StudentComp;
