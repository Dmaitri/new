// This component handles the App template used on every page.
import React from 'react';
import Header from './common/Header';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css';
const options = [
  '5c', 'mist', 'vulcan'
]
const defaultOption = options[0]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { project: defaultOption }
  }

  handleProjectChange(event) {
    // var stateCopy = Object.assign({}, this.state);
    // stateCopy.project = event.value;
    this.setState({ project:event.value});
  }

  render() {
    return (
      <div className="container-fluid">
        <h1><b>Talentica</b></h1>
        <div className="jumbotron">
          <h6>Select Project:</h6>
          <Dropdown options={options} value={defaultOption} placeholder="Select an option" onChange={(e) => this.handleProjectChange(e)} />
        </div>
        <Header projectName={this.state.project}></Header>
      </div>
    );
  }
}

// App.propTypes = {
//   children: PropTypes.object.isRequired,
// };

export default App;
