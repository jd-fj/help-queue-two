import React from "react";
import ticketsImage from "./../img/tickets-image.png";

function Header() {
  return (
    <React.Fragment>
    <h1>Help Qanon</h1>
    <img src={ticketsImage} alt="tickets" />
    </React.Fragment>
  );
}

export default Header;