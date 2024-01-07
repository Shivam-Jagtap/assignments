export default function Intro(props){
    return(
      <div>
       <h1>{props.Name}</h1>
       {props.Description}
      </div>
    )
  }