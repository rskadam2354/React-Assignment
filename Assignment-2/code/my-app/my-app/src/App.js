// import logo from './logo.svg';
import './App.css';

function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
  
  <div className='profile profile-image'>
    <img className='image' src={employee.profileImg} width="100" height="100" alt='profile pic'/>
  </div>
  <div className='profile profile-name'>
    <p className='name'><h1>{employee.name}</h1></p>
  </div>
  <div className='profile location'>
    <p className='name'><span>location</span>{employee.location}</p>
  </div>
  <div className='profile blood-group'>
    <p className='name'><span>Blood Group</span>{employee.bloodGroup}</p>
  </div>
  <div className='profile blood-group'>
    <p className='name'><span>Age</span>{employee.age}</p>
  </div>
</div>
)
}



export default App;
