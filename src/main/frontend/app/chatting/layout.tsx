import React from "react";

const ChattingLayout = ({children} : {children : React.ReactNode})=> {
    return (<div>
        <main>{children}</main>
    </div>)
}


export default ChattingLayout;