
// import React, { createContext, useContext, useState, useEffect } from 'react';

// const UsersContext = createContext();

// export const UsersProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`http://localhost:8080/api/users/${id}`, {
//           credentials: 'include', // Include credentials for cross-origin requests
//         });
        
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         setUser(data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }

//     fetchData();
//   }, []);

//   return (
//     <UsersContext.Provider value={user}>
//       {children}
//     </UsersContext.Provider>
//   );
// };

// export const useUser = () => {
//   return useContext(UsersContext);
// };