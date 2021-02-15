import React from "react";
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default class TicketControl extends React.Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      formVisibleOnPage: false,
      selectedTicket: null,
      editing: false,
      // masterTicketList: [
      //   {
      //     names: 'Thato and Haley',
      //     location: '3A',
      //     issue: 'Firebase won\'t save record. Halp.',
      //     key: 0,
      //     id: "0"
      //   },
      //   {
      //     names: 'Taylor',
      //     location: '6B',
      //     issue: 'My shoe is untied',
      //     key: 1,
      //     id: "1"
      //   },
      //   {
      //     names: 'Brian Eno',
      //     location: '5A',
      //     issue: 'running to tie Taylor\'s shoes',
      //     key: 2,
      //     id: "2"
      //   }
      // ]
    };
  }

  handleClick = () => {
    if (this.state.selectedTicket != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewTicketToList = (newTicket) => {
    const { dispatch } = this.props; //makes code cleaner, not necessary
    const { id, names, location, issue } = newTicket; //destructure values from newTicket to pass to action
    const action = {
      type: 'ADD_TICKET',
      id: id, 
      names: names,
      location: location,
      issues: issue,
    }
    dispatch(action); //send action to update store!
    this.setState({formVisibleOnPage: false})
  }
  
  handleEditingTicketInList = (ticketToEdit) => {
    const { dispatch } = this.props;
    const { id, names, location, issue } = ticketToEdit;
    const action = {
      type: 'ADD_TICKET',
      id: id,
      names: names,
      location: location,
      issue: issue,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

  handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.masterTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  handleDeletingTicket = (id) => {
    const { dispatch } = this.props;
    const action = {
      type: 'DELETE_TICKET',
      id: id
    }
    dispatch(action);
    this.setState({ selectedTicket: null });
  }

  handleEditClick = () => {
    console.log("handleEditClick reached");
    this.setState({editing: true});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 
    if (this.state.editing){
      currentlyVisibleState = <EditTicketForm 
      ticket={this.state.selectedTicket}
      onEditTicket={this.handleEditingTicketInList}/>
      buttonText = "Return to Ticket List";
    } else if (this.state.selectedTicket != null){
      currentlyVisibleState = <TicketDetail 
      ticket={this.state.selectedTicket} 
      onClickingDelete={this.handleDeletingTicket} 
      onClickingEdit={this.handleEditClick}/>
      buttonText = "Return to Ticket List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>;
      buttonText = "Return to Ticket List"; 
    } else {
      currentlyVisibleState = <TicketList ticketList={this.state.masterTicketList} onTicketSelection={this.handleChangingSelectedTicket}/>;
      buttonText = "Add Ticket"; 
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TicketControl.propTypes = {
  masterTicketList: PropTypes.object
}

const mapStateToProps = state => {
  return {
    masterTicketList: state //key-value pair of state to be mapped from Redux to React component. These determin the state slices that should be mapped to the commpenent's props. in our case we want masterTicketList from the store to be mapped to TicketControl's props, thus we need to import and define PropTypes
  }
}

TicketControl = connect(mapStateToProps)(TicketControl); //connect redefines entire TicketControl component as new TicketControl with additional func. e.g. dispatch() mand mapStateToProps() connect() is an HOC!