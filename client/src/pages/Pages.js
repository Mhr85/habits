import React, { Component } from 'react';
// import './styles..scss'
import HabitsList from './HabitsList/HabitsList';

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      habits: {},
      // owner: this.props.userId,
      isNewHabitFormShown: false,
      isSuccessModalShown: false
    }

    this.showNewHabitForm = this.showNewHabitForm.bind(this);
    this.closeNewHabitForm = this.closeNewHabitForm.bind(this);
    this.closeSuccessModal = this.closeSuccessModal.bind(this);
  }

  componentDidMount() {
    //const { params } = this.props.match;

    // this.ref = syncState(`${params.dashboardId}/habits`, {
    //   context: this,
    //   state: 'habits'
    // });
  }



  showNewHabitForm() {
    this.setState({ isNewHabitFormShown: true });
  }

  closeNewHabitForm() {
    this.setState({ isNewHabitFormShown: false });
  }

  showSuccessModal() {
    this.setState({ isSuccessModalShown: true });
  }

  closeSuccessModal() {
    this.setState({ isSuccessModalShown: false });
  }

  addHabit = habit => {
    console.log('Habitfrom addhabbit', habit)
    const habits = { ...this.state.habits };
    habits[`habit${Date.now()}`] = habit;
    this.setState({ habits });
  }

  updateHabit = (habitKey, updatedHabit) => {
    const habits = { ...this.state.habits };
    habits[habitKey] = updatedHabit;
    this.setState({ habits });
  }

  deleteHabit = habitKey => {
    const habits = { ...this.state.habits };
    habits[habitKey] = '';
    this.setState({ habits });
  }

  toggleDayAsMarked = (habitKey, dayNo) => {
    const habitToUpdate = this.state.habits[habitKey];

    habitToUpdate.days.map(day => {
      if (day.dayNo === dayNo) {
        day.marked = !day.marked;

        day.marked === true
          ? habitToUpdate.progress++
          : habitToUpdate.progress--;

        if (habitToUpdate.progress === habitToUpdate.duration) {
          habitToUpdate.completed = true;
          this.showSuccessModal();
        } else {
          habitToUpdate.completed = false;
        }

        this.updateHabit(habitKey, habitToUpdate);
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <HabitsList
          addHabit={ this.addHabit}
          deleteHabit={this.deleteHabit}
          habits={this.state.habits}
          toggleDayAsMarked={this.toggleDayAsMarked}
          showNewHabitForm={this.showNewHabitForm}
          isNewHabitFormShown={this.state.isNewHabitFormShown}
          closeNewHabitForm={this.closeNewHabitForm}
          updateHabit={this.updateHabit}
          isSuccessModalShown={this.state.isSuccessModalShown}
          closeSuccessModal={this.closeSuccessModal}
        />
        {/*  { this.props.userId === this.props.owner && this.props.logged
          ?
           <HabitsList
            addHabit={() => this.addHabit }
            deleteHabit={ this.deleteHabit }
            habits={ this.state.habits }
            toggleDayAsMarked={ this.toggleDayAsMarked }
            showNewHabitForm={ this.showNewHabitForm }
            isNewHabitFormShown={ this.state.isNewHabitFormShown }
            closeNewHabitForm={ this.closeNewHabitForm }
            updateHabit={ this.updateHabit }
            isSuccessModalShown = { this.state.isSuccessModalShown }
            closeSuccessModal = { this.closeSuccessModal }
          />
          : <div>Log in to see the dashboard</div> */}
        {/* } */}
      </React.Fragment>
    );
  }
}

export default pages;
