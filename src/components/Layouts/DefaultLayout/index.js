import Header from "./Header/index.js";
import Content from "./Content/index.js";
import Footer from "./Footer/index.js";

function DefaultLayout({ children }) {
    return ( 
        <div>
            <Header />
            <Content/>
            <div>{children}</div>
            <Footer/>
        </div>
     );
}

export default DefaultLayout;