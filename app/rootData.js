import Home from "../pages/home/Home"
import About from "../pages/about/About"
import Client from "../pages/client/Client"
import Service from "../pages/services/Service"
import ContactUs from "../pages/contact-us/ContactUs"
export const routeData = [
    {
        path:'home',
        element: Home,
        redirect:'/home'
    },
    {
        path:'about-us',
        element:About ,
        redirect:'/about-us'
    },
    {
        path:'client',
        element:Client,
        redirect:'/client'
    },
    {
        path:'service',
        element: Service,
        redirect:'/services'
    },
    {
        path:'contact-us',
        element:ContactUs ,
        redirect:'/contact-us'
    },
    
]