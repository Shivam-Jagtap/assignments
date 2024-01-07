export default 
function SocialMediaButtons(props){
  const button = props.arr2;
  const buttonStyle = {
    backgroundColor: "#008CBA",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: 16,
    margin: "5px",
  };
  
  return(
    <div>
      {button.map((butt , index)=>{
          return <button key={index} style={buttonStyle}>{butt}</button>
      })}
    </div>
  )
}