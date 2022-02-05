// import logo from './logo.svg';
import React from 'react';
import './App.css';

function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  <div>
    <img src={employee.profileImg} width="100px" height="100px" alt="This is a profile pic"/>
  </div>
  <div>
    <p><h1>{employee.name}</h1></p>
  </div>
  <div>
    <p><section>Location</section>{employee.location}</p>
  </div>
  <div>
    <p><section>Blood Group</section>{employee.bloodGroup}</p>
  </div>
  <div>
    <p><section>Age</section>{employee.age}</p>
  </div>
</div>
)
}



export default App;
