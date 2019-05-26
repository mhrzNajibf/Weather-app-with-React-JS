import React from "react";

class Header extends React.Component {
    render(){
        return(
            <header className="Header">
                <span className="LeftHline"></span>
                <h1 className="Title">Weather Forecast Service</h1>
                <span className="RightHline"></span>
            </header>
        )
    }
}
export default Header;