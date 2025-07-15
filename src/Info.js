import React from 'react';

class Info extends React.Component {
    render() {
        const title = "Thuan Tran";
        const showTitle = false;
        return (
            <div>
                <h1>{showTitle ? title : "No title"}</h1>
                <h1>Inventory System</h1>
                <p>Manage your stuff</p>
            </div>
        );
    }
}

export default Info;