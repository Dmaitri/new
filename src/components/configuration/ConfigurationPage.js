import React from 'react';
import * as files1 from '../json/fileData';
import ConfigEditPage from './configEditPage';
import EmailAliasesPage from './emailAliasePage';
import ProcessStatusEditPage from './processStatusEditPage';

class ConfigurationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { files: files1.files, projectName: props.projectName };
    }

    onclickHandle(files) {

        this.setState({ fileName: files })
    }

    componentWillReceiveProps(props)
    {
        this.setState({projectName:props.projectName})
    }

    createFileRow(files) {
        return (
            <tr key={files.id}>
                <td>{files.id}</td>
                <td>{files.fileName}</td>
                <td onClick={() => this.onclickHandle(files.fileName)}>Edit</td>
            </tr>
        );
    }
    render() {

        if (this.state.fileName == "config.json")
            return (
                <ConfigEditPage projectName={this.props.projectName}></ConfigEditPage>
            )

        if (this.state.fileName == "emailAliases.json")
            return (
                <EmailAliasesPage projectName={this.state.projectName}></EmailAliasesPage>
            )

        if (this.state.fileName == "processStatus.json")
            return (
                <ProcessStatusEditPage projectName={this.state.projectName}></ProcessStatusEditPage>
            )

        return (
            <div>
                <h1>Configurations:</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Configuration File Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.files.map(this.createFileRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ConfigurationPage;