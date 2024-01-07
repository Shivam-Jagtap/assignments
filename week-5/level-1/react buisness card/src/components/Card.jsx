export default function Card({children}){

    const myStyle = {
      color: "black",
      border: "1px solid lightgray", // Light border
      borderRadius: "8px", // Optional: Adds rounded corners
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Adds a subtle shadow
      padding: "20px", // Optional: Adds padding inside the card
      margin: "10px", // Adds space around each card
      textAlign: "center", // Centers content horizontally
      display: "inline-block", // Allows cards to be displayed side by side
    };
    return (
      <div style={myStyle}> 
        {children}
      </div>
    )
  }