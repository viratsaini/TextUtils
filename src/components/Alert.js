import React from "react";

export default function Alert(props) {
  const uppercase =(word)=>{
    const lower=word.toLowerCase();
    return lower.charAt(0).toUpperCase()+lower.slice(1);
  }
  return (
     <div style={{height:"40px"}}>
    { props.alert && <div className={`alert alert-${props.alert.t} alert-dismissible fade show`} role="alert">
     <strong>{uppercase(props.alert.t)}</strong>:{props.alert.msg}
      
    </div>}
    </div>
  );
}
