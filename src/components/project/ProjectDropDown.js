import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
    '5c', 'mist', 'vulcan'
]
const defaultOption = options[0]

class AboutPage extends React.Component {        
    render() {
        return (
            <div className="jumbotron">
                <h6>Select Project:</h6>
                <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
            </div>
        );
    }
}

export default AboutPage;