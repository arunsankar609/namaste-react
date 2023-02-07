import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);
  const handlerOnline = () => {
    console.log("You are now connected to the network.");
    setIsOnline(true);
  };
  const handlerOffline = () => {
    console.log("The network connection has been lost.");
    setIsOnline(false);
  };
  useEffect(() => {
    window.addEventListener("online", handlerOnline);
    window.addEventListener("offline", handlerOffline);
    return ()=>{
      window.removeEventListener("online",handlerOnline)
      window.removeEventListener("offline",handlerOffline)
    }
  }
  , []);

  return isOnline;
};

export default useOnline;
