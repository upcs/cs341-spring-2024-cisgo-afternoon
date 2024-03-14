// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import '../static/css/components/NavBar.css';

// const NavBar = () => {
//   const [filterOpen, setFilterOpen] = useState(false);

//   const handleFilterMenu = () => {
//     setFilterOpen(!filterOpen);
//   }

//   const handleToggleNavBar = () => {
//     // Log the current state before toggling
//     console.log("Current filterOpen state before toggle:", filterOpen);

//     setFilterOpen(!filterOpen);

//     // This part won't immediately reflect the new state since setState is asynchronous
//     // But it's useful for understanding the intended new state right after the setState call
//     console.log("Expected filterOpen state after toggle:", !filterOpen);
//   }

//   return (
//     <div>
//       <div className={`navbar ${filterOpen ? "expanded" : "collapsed"}`}>
//         <ul className="nav">
//           <li className="expanded">
//             <Link to="/map">
//               <i className="material-icons">home</i>
//               Home
//             </Link>
//           </li>
//           <li className="expanded">
//             <Link to="/add">
//               <i className="material-icons">location_on</i>
//               Add a Pin
//             </Link>
//           </li>
//           <li className="expanded">
//             <Link to="/search">
//               <i className="material-icons">search</i>
//               Search
//             </Link>
//           </li>
//           <li className="expanded">
//             <Link to="/contact">
//               <i className="material-icons">mail</i>
//               Contact Us
//             </Link>
//           </li>
//           <li className="expanded">
//             <Link to="/about">
//               <i className="material-icons">diversity_3</i>
//               About Us
//             </Link>
//           </li>
//           <li className="expanded">
//             <Link to="/help">
//               <i className="material-icons">help</i>
//               Help
//             </Link>
//           </li>
//           <li className="expanded">
//             <Link onClick={handleFilterMenu}>
//               Filter
//               <i className="material-icons">{filterOpen ? ("expand_less") : ("expand_more")}</i>
//             </Link>
//             {filterOpen ? (
//               <div>
//                 <button>International Work</button>
//                 <button>Volunteer Work</button>
//                 <button>Study Abroad</button>
//               </div>
//             ) : null}
//           </li>
//         </ul>
//       </div>
//       <div className="toggle-button" onClick={handleToggleNavBar}>
//              {filterOpen ? (
//           <i className="material-icons">close</i>
//         ) : (
//           <i className="material-icons">menu</i>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NavBar;



// import React, { useState } from "react";
// import { Link } from 'react-router-dom';
// import '../static/css/components/NavBar.css';

// const NavBar = () => {
//     const [filterOpen, setFilterOpen] = useState(false);

//     const handleFilterMenu = () => {
//         // Additional functionality can be added here if needed
//         setFilterOpen(!filterOpen);
//     };

//     const handleToggleNavBar = () => {
//         console.log("Current filterOpen state before toggle:", filterOpen);
//         setFilterOpen(!filterOpen);
//         console.log("Expected filterOpen state after toggle:", !filterOpen);
//     };

//     return (
//         <div>
//             <div className={`navbar ${filterOpen ? 'expanded' : 'collapsed'}`}>
//                 <ul className="nav">
//                     <li>
//                         <Link to="/map"><i className="material-icons">home</i>Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/add"><i className="material-icons">location_on</i>Add a Pin</Link>
//                     </li>
//                     <li>
//                         <Link to="/search"><i className="material-icons">search</i>Search</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact"><i className="material-icons">mail</i>Contact Us</Link>
//                     </li>
//                     <li>
//                         <Link to="/about"><i className="material-icons">diversity_3</i>About Us</Link>
//                     </li>
//                     <li>
//                         <Link to="/help"><i className="material-icons">help</i>Help</Link>
//                     </li>
//                     <li onClick={handleFilterMenu}>
//                         <button className="filter-toggle">
//                             Filter
//                             <i className="material-icons">{filterOpen ? "expand_less" : "expand_more"}</i>
//                         </button>
//                         {filterOpen && (
//                             <div>
//                                 <button>International Work</button>
//                                 <button>Volunteer Work</button>
//                                 <button>Study Abroad</button>
//                             </div>
//                         )}
//                     </li>
//                 </ul>
//             </div>
//             <div className="toggle-button" onClick={handleToggleNavBar}>
//                 {filterOpen ? (
//                     <i className="material-icons">close</i>
//                 ) : (
//                     <i className="material-icons">menu</i>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default NavBar;




// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from 'react-router-dom';
// import '../static/css/components/NavBar.css';

// const NavBar = () => {
//     const [filterOpen, setFilterOpen] = useState(false);
//     const location = useLocation(); // Hook to access the current location

//     useEffect(() => {
//         console.log("NavBar component re-rendered due to route or state change.");

//         // Automatically close the NavBar when navigating to a new route
//         setFilterOpen(false);
//     }, [location]); // Re-run the effect when location changes

//     const handleFilterMenu = () => {
//         setFilterOpen(!filterOpen);
//     };

//     const handleToggleNavBar = () => {
//         console.log("Current filterOpen state before toggle:", filterOpen);
//         setFilterOpen(!filterOpen);
//         console.log("Expected filterOpen state after toggle:", !filterOpen);
//     };

//     return (
//         <div>
//             <div className={`navbar ${filterOpen ? 'expanded' : 'collapsed'}`}>
//                 <ul className="nav">
//                     <li>
//                         <Link to="/map"><i className="material-icons">home</i>Home</Link>
//                     </li>
//                     <li>
//                         <Link to="/add"><i className="material-icons">location_on</i>Add a Pin</Link>
//                     </li>
//                     <li>
//                         <Link to="/search"><i className="material-icons">search</i>Search</Link>
//                     </li>
//                     <li>
//                         <Link to="/contact"><i className="material-icons">mail</i>Contact Us</Link>
//                     </li>
//                     <li>
//                         <Link to="/about"><i className="material-icons">diversity_3</i>About Us</Link>
//                     </li>
//                     <li>
//                         <Link to="/help"><i className="material-icons">help</i>Help</Link>
//                     </li>
//                     <li onClick={handleFilterMenu}>
//                         <button className="filter-toggle">
//                             Filter
//                             <i className="material-icons">{filterOpen ? "expand_less" : "expand_more"}</i>
//                         </button>
//                         {filterOpen && (
//                             <div>
//                                 <button>International Work</button>
//                                 <button>Volunteer Work</button>
//                                 <button>Study Abroad</button>
//                             </div>
//                         )}
//                     </li>
//                 </ul>
//             </div>
//             <div className="toggle-button" onClick={handleToggleNavBar}>
//                 {filterOpen ? (
//                     <i className="material-icons">close</i>
//                 ) : (
//                     <i className="material-icons">menu</i>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default NavBar;




import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../static/css/components/NavBar.css';

const NavBar = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        // Close NavBar when navigating to a new route
        setFilterOpen(false);
    }, [location]);

    const handleFilterMenu = () => {
        setFilterOpen(!filterOpen);
    };

    const handleToggleNavBar = () => {
        setFilterOpen(!filterOpen);
    };

    return (
        <div>
            <div className={`navbar ${filterOpen ? 'expanded' : 'collapsed'}`}>
                <ul className="nav">
                    <li><Link to="/map"><i className="material-icons">home</i>Home</Link></li>
                    <li><Link to="/add"><i className="material-icons">location_on</i>Add a Pin</Link></li>
                    <li><Link to="/search"><i className="material-icons">search</i>Search</Link></li>
                    <li><Link to="/contact"><i className="material-icons">mail</i>Contact Us</Link></li>
                    <li><Link to="/about"><i className="material-icons">diversity_3</i>About Us</Link></li>
                    <li><Link to="/help"><i className="material-icons">help</i>Help</Link></li>
                    <li onClick={handleFilterMenu}>
                        <button className="filter-toggle">
                            Filter<i className="material-icons">{filterOpen ? "expand_less" : "expand_more"}</i>
                        </button>
                        {filterOpen && (
                            <div>
                                <button>International Work</button>
                                <button>Volunteer Work</button>
                                <button>Study Abroad</button>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
            <div className={`toggle-button ${filterOpen ? 'toggle-small' : ''}`} onClick={handleToggleNavBar}>
                <i className="material-icons">{filterOpen ? 'close' : 'menu'}</i>
            </div>
        </div>
    );
};

export default NavBar;

