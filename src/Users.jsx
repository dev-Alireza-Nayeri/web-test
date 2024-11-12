// // import React, { useState } from "react";
// import { useEffect, useState } from "react";
// import Conter from "./Conter";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const [error, setError] = useState(false);
//   const [id, setId] = useState("");
//   useEffect(() => {
//     const controler = new AbortController();
//     const fetchUser = async () => {
//       try {
//         const res = await fetch(
//           `https://jsonplaceholder.typicode.com/photos/${id}`,
//           { signal: controler.signal }
//         );
//         const json = await res.json();
//         setUsers(json);
//         console.log(json);
//       } catch (error) {
//         console.log(error.name);
        
//         setError(true);
//       }
//     };
//     // console.log("kml");
//     fetchUser();
//     return () => {
//         controler.abort()
//         console.log("cleane");
        
   
//     };
//   }, [id]);

//   //  const searchHandler = async() => {
//   //     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   //     const json = await res.json();
//   //     console.log(json);

//   //  }

//   return (
//     <div>
//       {/* {id > 10 && <Conter/>} */}
//       <input
//         type="text"
//         placeholder="enter id"
//         value={id}
//         onChange={(e) => setId(e.target.value)}
//       />
//       {/* <button onClick={searchHandler}>searrch</button> */}
//       {!users.length && !error && <h3>loading</h3>}
//       {/* <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul> */}
//       {error && <h3>some went wrong</h3>}
//     </div>
//   );
// }

// export default Users;
