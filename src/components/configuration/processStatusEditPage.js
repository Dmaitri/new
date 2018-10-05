import React from 'react';
import * as  data from '../json/processStatus';


class ProcessStatusEditPage extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.state)
        this.state = { statusArr: []};
        Object.keys(data.processStatus).forEach(element => {
            this.state.statusArr.push({ key: element, value: data.processStatus[element] })
        })
    }

    handleSubmit() {
        var stateCopy = Object.assign({}, this.state);
        this.setState(stateCopy)
    }

    createRow(arr) {
        return (
            <tr key={arr.key}>
                <td> {arr.key}</td>
                <td><input type="text" name="title" defaultValue={arr.value} onBlur={(event) => this.onBlur(arr.key, event)} /></td>
            </tr>
        );
    }
    onBlur(key, event) {
        console.log(event.target.value);
        var stateCopy = Object.assign({}, this.state);
        stateCopy.statusArr.map(function (ele) {
            if (ele.key == key) {
                ele.value = event.target.value;
            }
            console.log(stateCopy.statusArr);
        })
      //  stateCopy.isModified = true;
       // this.state = stateCopy;
       this.setState(stateCopy);
        console.log(this.state);
        //this.setState({ address: x, typed: event.target.value })
    }
    render() {
        return (
            <form>
                <table>
                    {this.state.statusArr.map(this.createRow, this)}
                </table>
                <tr>
                    <input type="button" value="Submit" onClick={() => this.handleSubmit(this)} />
                </tr>
            </form>
        );
    }
}

export default ProcessStatusEditPage;