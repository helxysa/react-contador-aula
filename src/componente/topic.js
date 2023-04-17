import { useState } from "react";

function Add(){
  const [votes, setVotes] = useState(0);
  



    const adicionando = () => {
      setVotes(votes + 1);
      console.log("add...", votes);
    }
    
    return(
      <div>PHP {votes}<button onClick={adicionando}>+1</button></div>
    )
  }

  export default Add;