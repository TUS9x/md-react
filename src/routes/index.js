import Aboutus from "../pages/Aboutus";
import Cart from "../pages/Cart";
import Contact from "../pages/Contactus";
import Feedback from "../pages/Feedback";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Products from "../pages/Products";
import Profile from "../pages/Profile"
import Sale from "../pages/Sale";

//Public Routes
//Dùng cho những Routes không cần đăng nhập vẫn xem được
const publickRoutes = [
    {path: '/', component: Home},
    {path: '/login', component: Login},
    {path: '/profile', component: Profile},
    {path: '/aboutus', component: Aboutus},
    {path: '/feedback', component: Feedback},
    {path: '/contactus', component: Contact},
    {path: '/cart', component: Cart},
    {path: '/products', component: Products},
    {path: '/sale', component: Sale}
];

//PrivateRoutes
//Những Route phải đăng nhập, nếu không sẽ lái sang trang Login
const privateRoutes = [];

export { publickRoutes, privateRoutes };
