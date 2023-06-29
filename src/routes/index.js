import { DefaultLayout } from "../components/Layouts";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile"

//Public Routes
//Dùng cho những Routes không cần đăng nhập vẫn xem được
const publickRoutes = [
    {path: '/', component: Home, layout: DefaultLayout},
    {path: '/login', component: Login, layout: DefaultLayout},
    {path: '/profile', component: Profile, layout: DefaultLayout},
];

//PrivateRoutes
//Những Route phải đăng nhập, nếu không sẽ lái sang trang Login
const privateRoutes = [];

export { publickRoutes, privateRoutes };
