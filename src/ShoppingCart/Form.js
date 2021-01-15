import React from 'react'
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FirstName: '',
      LastName: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>

          <div class="form-group">
            <label for="formGroupExampleInput">First Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput" placeholder="First Name"
              FirstName={this.state.FirstName}
              onChange={this.handleChange}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Last Name</label>
            <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Last Name"
              LastName={this.state.LastName}
              onChange={this.handleChange} />
          </div>
          <input type="submit" value="Submit" />


        </div>
      </form>
    );
  }
}

export default ControlledInput;


