import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import logo from './logo.svg';
import './App.css';
import { Button } from "react-bootstrap";
// import dashboard from "./dashboard/index.html";
import TaskManager from "./task_manager/task_manager";
import AddTask from "./task_manager/task/add_task";

import UserManager from "./user_management/user_manager";
import AddUser from "./user_management/user/add_user";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


export default function App() {
  return (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="task_manager" element={<TaskManager />} />
              <Route path="add_task" element={<AddTask />} />

              <Route path="user_manager" element={<UserManager />} />
              <Route path="add_user" element={<AddUser />} />
              
              <Route path="blogs" element={<Blogs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <p>
           Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
           className="App-link"
          href="https://reactjs.org"
           target="_blank"
           rel="noopener noreferrer"
         >
           Learn React
        </a>
      
       return <Button variant="primary">Click Me</Button>;
     </div>

     
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
