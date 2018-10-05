import React from 'react';
import { x } from '../json/emailAliases';
import ReactDOM from 'react-dom';
import * as fs from 'fs';

class EmailAliasesPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(x);
        this.state = { address: x, typed: '' };
        // this.state={typed:''}
    }
    createRow1(address) {
        let element;
        if (address.email != "calvin.iyer@gmail.com") {
            element = <div><td>{address.email}</td><td>{address.alias}</td></div>

        }
        else {
            element = <td>{address.alias}</td>
        }
        return (
            <tr key={address.email}>
                {element}
                <td onClick={() => this.readFile()}>Edit</td>
            </tr>
        );
    }
    readFile() {
        let x = fs.readFile("E:\\abc.txt");
        console.log(x);
    }
    onBlur(event) {
        this.setState({ address: x, typed: event.target.value })
    }
    createRow2(address) {

        return (
            <tr key={address.email}>
                <td>{address.email}</td>
                {address.email == "calvin.iyer@gmail.com" ? (
                    < td > {address.alias}</td>
                ) :
                    <td onClick={() => this.handleClick(address.email)}>Edit</td>
                }
            </tr>
        );
    }

    createRow(address) {

        return (
            <tr key={address.email}>
                <td> {address.email}</td>
                <td><input id="x" type="text" name="title" defaultValue={address.alias} onBlur={this.onBlur.bind(this)} /></td>
                <td onClick={() => this.handleClick(address.email, this.state.typed)}>Edit</td>
            </tr>
        );
    }
    handleClick1(x) {
        // let test=JSON.stringify(x);
        ReactDOM.render(
            <label>{x}</label>, document.getElementById("x")
        );
    }

    handleClick(email, alias) {
        var stateCopy = Object.assign({}, this.state);
        let arr = stateCopy.address;
        stateCopy.address.map(function (y) {
            if (y.email == email) {
                y.alias = alias;
            }
        });
        this.setState(stateCopy);
    }

    render() {
        return (
            <form>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Aliases</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.address.map(this.createRow, this)}
                    </tbody>
                </table>
            </form>
        );
    }
}

export default EmailAliasesPage;