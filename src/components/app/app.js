import React, {Fragment} from "react";
import Main from "../main/main";
import Header from "../header/header";
import "../../styles/_fonts.scss";
import "../../styles/common.scss";

const App = () => {
    return (
        <Fragment>
            <Header/>
            <Main/>
        </Fragment>
    )
};

export default App;
