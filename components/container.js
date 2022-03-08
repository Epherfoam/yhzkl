import * as React from "react";

const Container = ({children}) => {
    return ( 
        <div class="container mx-auto px-4 md:px-4 lg:px-8 xl:px-28">
            {children}
        </div>
    )
}

export default Container;