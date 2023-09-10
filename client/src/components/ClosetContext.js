// import React, { createContext, useContext, useState, useEffect } from 'react';

// const ClosetContext = createContext();

// export const ClosetProvider = ({ children }) => {
//   const [closets, setClosets] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('http://localhost:8080/api/closets');
        
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setClosets(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <ClosetContext.Provider value={closets}>
//       {children}
//     </ClosetContext.Provider>
//   );
// };

// export const useClosets = () => {
//   return useContext(ClosetContext);
// };
