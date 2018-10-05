import React from 'react';
//import {repoType} from '../json/repoType';

class RepoTypePage extends React.Component {
    constructor() {
        super();
        var t = [];
        let repoType=[];
        console.log(repoType);
        for (let x of repoType) {
            t.push({
                key: x.key,
                value: x.value
            });
        }
        console.log(t);
        // this.state = { repoType: t };
        // console.log(repoType);
    }
    createFileRow(repoType) {
        return (
            <tr key={repoType.key}>
                <td>{repoType.key}</td>
                <td>{repoType.value}</td>
            </tr>
        );
    }
    render() {
        return (
            <div>
                <h1>Configurations:</h1>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Repo Name</th>
                            <th>Repo Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.t.map(this.createFileRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RepoTypePage;