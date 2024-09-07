import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { loggedIn } from '@/assets/js/utils'

/**
 * AppNaviagtor is a component that handles the navigation in the application.
 * It checks if the current route is in the list of routes and the user is logged in, 
 * if so, it redirects the user to the homepage. If the user is not logged in and the 
 * current route is not in the list of routes, it redirects the user to the login page.
 */
export default function AppNaviagtor() {

    /**
     * An array with the routes that the user should be redirected to the homepage.
     */
    const [routes] = useState(['/login',]);

    /**
     * The current route of the application.
     */
    const location = useLocation().pathname;

    /**
     * A function to navigate to a different route.
     */
    const navigate = useNavigate();

    /**
     * Checks if the user is logged in.
     */
    const isLogin = loggedIn();

    /**
     * This effect is triggered when the location changes. It checks if the 
     * current route is in the list of routes and the user is logged in, if so, 
     * it redirects the user to the homepage. If the user is not logged in and the 
     * current route is not in the list of routes, it redirects the user to the login page.
     */
    useEffect(() => {

        if (routes.includes(location) && isLogin) {
            // If the current route is in the list of routes and the user is logged in, 
            // redirect the user to the homepage.
            navigate('/');
        } else if (!routes.includes(location) && !isLogin) {
            // If the current route is not in the list of routes and the user is not logged in, 
            // redirect the user to the login page.
            navigate('/login');
        }

    }, [location]);

    /**
     * The component doesn't render anything, so it returns null.
     */
    return null;

}

