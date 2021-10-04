import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Service from './components/Services/Service';
import { Row } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import About from './components/About/About';
import Enroll from './components/Enroll/Enroll';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';


function App() {
  const[courses,setCourses]=useState([]);
  const[allCourses,setAllCourses]=useState([]);
  useEffect(()=>{
    fetch("./data1.json")
    .then(res=>res.json())
    .then(data=>setCourses(data))
  },[])
  useEffect(()=>{
    fetch("./data.json")
    .then(res=>res.json())
    .then(data=>setAllCourses(data))
  },[])
  return (
    <div className="App">
       
      <BrowserRouter>
      <Header></Header>
      <Switch>

          <Route path="/home">
              <Home></Home>
              <h1>Our services</h1>
         <Row xs={1} md={2} className="g-4">
          {
            courses.map(course=><Service 
               key={course.Course}
               course={course}
            ></Service>)
          }
        </Row>
          </Route>
          <Route exact path="/">
              <Home></Home>
              <h1>Our services</h1>
              <Row xs={1} md={2} className="g-4">
          {
            courses.map(course=><Service 
               key={course.Course}
               course={course}
            ></Service>)
          }
        </Row>
          </Route>
          <Route path="/about">
              <About></About>
          </Route>
          
          <Route path="/allServices">
                  <h1>Our All services</h1>
                <Row xs={1} md={2} className="g-4">
                  {
                    allCourses.map(course=><Service 
                      key={course.Course}
                      course={course}
                    ></Service>)
                  }
                </Row>
          </Route>
          <Route path="/enroll">
              <Enroll></Enroll>
          </Route>

          <Route >
              <NotFound></NotFound>
          </Route>
          
      </Switch>
      </BrowserRouter>
      
      
 
      
        
      
     
      <Footer></Footer>
    </div>
  );
}

export default App;
