import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import ProjectDropDown from '../project/ProjectDropDown';

import ConfigurationPage from '../configuration/ConfigurationPage';



class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { projectName: props.projectName }
    }

   
    // componentWillReceiveProps(props)
    // {
    //     this.setState({projectName:props.projectName})
    // }
    showConfigrationPage(){
        this.setState({projectName:this.state.project})        
    }

    showExecutionPage(){

    }
    render() {


        return (
            <div>
                
                <ConfigurationPage projectName={this.props.projectName}></ConfigurationPage>

            </div >
        );
    }
};

export default Header;
