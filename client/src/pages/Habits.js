import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input, Label, Form, FormGroup } from 'reactstrap';
import Quote from 'inspirational-quotes';
import ReactCalendar from '../components/Calendar';

class Habits extends Component {
  state = {
    currentUserName: '',
    currentUserEmail: ''
  };

  componentDidMount() {
    const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
    this.setState({
      currentUserEmail: idToken.idToken.claims.email,
      currentUserName: idToken.idToken.claims.name
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  render() {
    const { currentUserEmail, currentUserName } = this.state;
    const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

    alert(Quote.getRandomQuote());

    return (
      <>
      <ReactCalendar />
      <div>
        <h1>Welcome {currentUserName}</h1>
        <p>Email: {currentUserEmail}</p>
        <p>Welcome to habit21, let build good habits.</p>
      </div>

      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add Habit</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>Add Habits</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.

          <FormGroup className={this.props.className}>{' '}
            <Label for="unmountOnClose">Habit</Label>
            <Input type="textarea" id="habits-title" placeholder="Wake up everyday at 5 AM" rows={1} />
            <Label for="unmountOnClose">Duration</Label>
            <Input type="textarea" id="habits-duration" placeholder="66" rows={1} />
            <Label for="unmountOnClose">Description</Label>
            <Input type="textarea" id="habits-description" placeholder="Write something (data should remain in modal if unmountOnClose is set to false)" rows={5} />
          </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Create Habit</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
      </>
    );
  }
}

// class ModalExample extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       modal: false
//     };

//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }

//   render() {
//       const closeBtn = <button className="close" onClick={this.toggle}>&times;</button>;

//       return (
//       <div>
//         <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}Add Habit</Button>
//         <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
//           <ModalHeader toggle={this.toggle} close={closeBtn}>Modal title</ModalHeader>
//           <ModalBody>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
//             dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
//             ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
//             fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
//             mollit anim id est laborum.
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
//             <Button color="secondary" onClick={this.toggle}>Cancel</Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export {
//   Habits,
//   ModalExample,
// }
export default Habits;
