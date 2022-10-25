import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import FAQ from "../Pages/FAQ/FAQ";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {path:'/', element: <Main></Main>, children:[

      {path:'/', element:<Home></Home>},
      {path:'/courses', element:<Courses></Courses>},
      {path:'/faq', element:<FAQ></FAQ>},
      {path:'/blog', element:<Blog></Blog>},
      
    ]}
])