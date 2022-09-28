import logo from './logo.svg';
import './App.css';
import {Link, Route, Switch} from 'react-router-dom'
import StudentsComp from './Students';
import AddStudentComp from './AddStudent';
import FacultyStudentsComp from './FacultyStudents';

function App() {
  return (
    <div className="App">
     <h1>Welcome to Students Web Site</h1>

     <Link to="/add">Create New Student</Link> &nbsp;
     <Link to="/">Back to list</Link>
      <br/><br/>
     
     <Switch>
       <Route exact path="/">
          <StudentsComp />
       </Route> 
       <Route path="/add">
          <AddStudentComp />
       </Route> 
       <Route path="/faculty/:studentid">
          <FacultyStudentsComp />
       </Route> 
     </Switch>
    </div>
  );
}

export default App;
