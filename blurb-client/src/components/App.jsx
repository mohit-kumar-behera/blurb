import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Navbar from './Navbar/Navbar';

// import stylesheets
import './App.css';

const Comp1 = () => {
  return <h1>Component 1</h1>;
};
const Comp2 = () => {
  return <h1>Component 2</h1>;
};
const Comp3 = () => {
  return <h1>Component 3</h1>;
};

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Comp1 />} />
          <Route path="/comp2" exact element={<Comp2 />} />
          <Route path="/comp3" exact element={<Comp3 />} />
        </Routes>
      </>
    </Router>
  );
};

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// export default function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Routes>
//           <Route path="/" exact element={<Home />}></Route>
//           <Route path="/about" element={<About />}></Route>
//           <Route path="/users" element={<Users />}></Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
