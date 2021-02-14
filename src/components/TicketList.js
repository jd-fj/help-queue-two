import React from "react";
import Ticket from "./Ticket";
import PropTypes from 'prop-types';

export default function TicketList(props){
  return (
    <>
      <hr/>
      {props.ticketList.map((ticket) =>
      <Ticket 
        whenTicketClicked = {props.onTicketSelection}
        names={ticket.names}
        location={ticket.location}
        issue={ticket.issue}
        key={ticket.id}
        id={ticket.id}/>
      )}
    </>
  );
}

TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func
};