import Header from "./Header/index.js";
import Content from "./Content/index.js";

function DefaultLayout({ children }) {
    return ( 
        <div>
            <Header />
            <Content/>
            <div>{children}</div>
        </div>
     );
}

export default DefaultLayout;