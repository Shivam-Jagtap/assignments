export default function Interests(props){
    // here props will be an array of interests
    const interest = props.arr ;
    return(
      <div>
       <h1>Interests</h1>
       {interest.map((prop,index)=>{
          return <div key = {index}>
                {prop}
           </div>
       })}
      </div>
    )
  }