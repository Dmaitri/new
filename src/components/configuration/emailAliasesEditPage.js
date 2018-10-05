import React from 'react';

class EmailAliasesEditPage extends React.Component {
    constructor() {
        super();
        console.log(x);
        this.state = { address: x };
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