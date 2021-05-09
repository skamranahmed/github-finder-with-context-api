import React from "react";

function Alert(props) {
  return (
    props.alert !== null && (
      <div className={`alert alert-${props.alert.type}`}>
        <i className="fas fa-info-circle"></i> {props.alert.msg}
      </div>
    )
  );
}

export default Alert;
