import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import avtr1 from './assets/image/avatar3.png';
import avtr2 from './assets/image/avatar4.png';
import avtr3 from './assets/image/avatar5.png';
import avtr4 from './assets/image/avatar7.png';

import Courses from './components/courses';
import Teacher from './components/teachers';
import coursesData from './data/coursesData';
import teachersData from './data/teachersData';


function App() {

  const coursesArr = coursesData;
  const teacherArr = teachersData;

  let teachers = [];

  teacherArr.forEach((teacher) => {
    teachers.push(
      <div class="col-md-6">
        <Teacher teacher={teacher}></Teacher>
      </div>
    );
  }
  );


  return (
    <div class="container mt-4">

      <h1 class="text-center mb-5">Programavimo kursai</h1>

      <div class="row m-5 text-white">
        <div class="col-md-4 text-center">
          <Courses product={coursesArr[0]}></Courses>
        </div>
        <div class="col-md-4 text-center">
          <Courses product={coursesArr[1]}></Courses>
        </div>
        <div class="col-md-4 text-center">
          <Courses product={coursesArr[2]}></Courses>
        </div>
      </div >

      <div class="container bg-light px-5">
        <h2 class="p-5 py-4" >Mūsų dėstytojai</h2>
        <hr />
        <div class="row">
          {teachers}

        </div>

      </div>
    </div >
  );
}

export default App;
