import { createBrowserRouter } from "react-router-dom";  
import Wholesale from "./pages/wholesale/Wholesale";
import Reteil from "./pages/reteil/Reteil";
import Contact from "./pages/contact/Contact";
import Reviews from "./pages/reviews/Reviews";
import Layout from "./Components/Layout/Layout";
import Catalog from "./pages/catalog/Catalog";
import Profile from "./pages/profile/Profile";
import Vakansy from "./pages/vacansy/Vakansy";
import Emmail from "./pages/Emmail/Emmail";
import Cal from "./pages/Cal/Cal";

 export const myRouter = createBrowserRouter([
    {path: "/",
    element: <Layout/>,
    children:[

        {
            path: "/",
            element: <Catalog/>
        },
       {
           path: "wholesale",
           element: <Wholesale/>
       },
       {
           path: "reteil",
           element: <Reteil/>
       },
       {
           path: "contacts",
           element: <Contact/>
       },
       {
           path: "vakansy",
           element: <Vakansy/>
       },
       {
           path: "reviews",
           element: <Reviews/>
       },
       {
           path: "profile",
           element: <Profile/>
       },
       {
           path: "/emmail",
           element: <Emmail/>
       },
       {
           path: "/cal",
           element: <Cal/>
       },
    
    ]
    
 }])