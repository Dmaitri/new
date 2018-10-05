import React from 'react';
import * as config from '../json/config'
import Header from '../common/Header'

class ConfigEditPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { configArr: [], backState: '', globalArr: [] };
        let Arr = [];
        config.configData.map(ele=> {
            this.state.globalArr.push({key: ele["projectName"],value: ele})
        })
        //this.setState({ globalArr: Arr });
         console.log(this.state.globalArr);

        // let v = [];
        // if (props.projectName == "5c") {
        //     v=config.c5;
        // }
        // else {
        //     v=config.vulcan;
        // }
        // Object.keys(v).forEach(element => {
        //     this.state.configArr.push({ key: element, value: v[element] })
        // })
    }
    // componentWillReceiveProps(props) {
    //     let v = [];
    //     let arr = [];
    //     if (props.projectName == "5c") {
    //         v = config.c5;
    //     }
    //     else {
    //         v = config.vulcan;
    //     }
    //     Object.keys(v).forEach(element => {
    //         arr.push({ key: element, value: v[element] })
    //     })
    //     this.setState({ configArr: arr, projectName: props.projectName }, function () {
    //         console.log("");
    //     })
    // }
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
        stateCopy.configArr.map(function (ele) {
            if (ele.key == key) {
                ele.value = event.target.value;
            }
            console.log(stateCopy.configArr);
        })
        stateCopy.projectName = this.state.projectName;
        stateCopy.backState = '';
        this.state = stateCopy;
        console.log(this.state);
        //this.setState({ address: x, typed: event.target.value })
    }

    handleBackButton() {
        var stateCopy = Object.assign({}, this.state);
        stateCopy.backState = "true";
        stateCopy.projectName = this.state.projectName;
        stateCopy.configArr = this.state.configArr;
        this.setState(stateCopy);

        console.log(this.state);
    }

    render() {
        //let dataToRender = this.state.globalArr[this.props.projectName].value;
        let x=[];
        let dataToRender;
        this.state.globalArr.forEach(ele=>{
            if(ele.key==this.props.projectName)
            {
                dataToRender=ele.value
            }
        })
        Object.keys(dataToRender).forEach(element => {
            x.push({ key: element, value: dataToRender[element] })
        })
        if (this.state.backState != "") {
            return (
                <Header projectName={this.state.projectName}></Header>
            );
        }
        return (
            <form>
                <table>
                    {x.map(this.createRow, this)}
                </table>
                <tr>
                    <input type="button" value="Submit" onClick={() => this.handleSubmit(this)} />
                    <input type="button" value="Back" onClick={() => this.handleBackButton(this)} />
                </tr>
            </form>
        );
    }
}

export default ConfigEditPage;
