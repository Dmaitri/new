import React from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'
const options = [
    'one', 'two', 'three'
]
const defaultOption = options[0]

class AboutPage extends React.Component {
constructor(){
    super();
   this.setState(options);
}        

    render() {
        return (
            <div>
                <Dropdown options={options} value={defaultOption} placeholder="Select an option" />
            </div>
        );
    }
}


export default AboutPage;