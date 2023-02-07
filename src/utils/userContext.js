import React from "react";
import { createContext } from "react";
const userContext = createContext({
  user: { name: "Arun Sankar", email: "arunsankar248@gmail.com" },
});

// const userContext = () => {
//   return (
//     <div>userContext</div>
//   )
// }

export default userContext;
