// import React, { useState } from "react";

// var authContext = React.createContext(null);

// export default function authsComponent({ children }) {
//     var [currentUser, setCurrentUser] = useState(null);

//     axios.get("/")
    
//     function login() {
//         axios.post("/sessions", {
//             email: "naseem@gmail.com",
//             password: "naseem",
//             headers: { "Content-Type": "multipart/form-data" },
//         },
//             { withCredentials: true }
//         ).then(response => {

//             console.log("registation response", response.data.user)
//             if (response.status === "201" || response.statusText === 'Created') {
//                 setCurrentUser(response.data.user);
//                 history.push('/articles');
//             }
//         }).catch(error => {
//             console.log("error", error);
//             setError(true);
//         })
//     }


//     return (
//         <authContext.Provider value={{ currentUser, login }}>
//             {children}
//         </authContext.Provider>
//     );
// }