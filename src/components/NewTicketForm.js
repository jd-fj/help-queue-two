import React from "react";
import { v4 } from 'uuid';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

export default function NewTicketForm(props){

  function handleNewTicketFormSubmission(e){
    e.preventDefault();
    props.onNewTicketCreation({names: e.target.names.value,
    location: e.target.location.value,
    issue: e.target.issue.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewTicketFormSubmission}
        buttonText='Halp!'/>
    </React.Fragment>
  );
}

NewTicketForm.propTypes = {
  onNewTicketCreation: PropTypes.func
};