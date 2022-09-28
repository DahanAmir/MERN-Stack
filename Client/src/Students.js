
import axios from 'axios'
import { useEffect, useState } from 'react';
import StudentComp from './Student';

function StudentsComp() {

  const [students, setStudents] = useState([])
  const [studentsPresented, setStudentsPresented] = useState([])
  const [searchPhrase, setSearchPhrase] = useState('')

  useEffect(async () =>
  {
    //Access Node.JS Server
    let resp = await axios.get("http://localhost:8000/api/students");

   
    console.table(resp.data)
    setStudents(resp.data)
    setStudentsPresented(resp.data)
  }, [])

  const search = (e) =>
  {
    let searchPhrase = e.target.value;

    let result = students.filter(x => x.name.includes(searchPhrase) ||  x.faculty.includes(searchPhrase)   )
    setStudentsPresented(result)
  }
  return (
    <div className="App" style={{width : "400px", borderStyle : "solid", borderColor : "red", borderWidth : "3px"}}>
     <h3>Students List</h3>

      Search : <input type="text" onChange={e => search(e) } /><br/><br/>

     {
       studentsPresented.map(item =>
        {
          return <StudentComp key={item._id} studData={item} />
        })
     }
    
    </div>
  );
}

export default StudentsComp;
