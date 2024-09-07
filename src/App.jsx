import { Fragment, Suspense, } from 'react'
import './assets/styles/App.css'
import useHandleRoutes from './routes/routes';
import { Header } from './layouts';
import { AppNaviagtor } from './components';


/**
 * The main App component.
 *
 * This component renders the app navigation, a header, and a main section.
 * The main section is a Suspense component that renders the routes returned
 * by the useHandleRoutes hook. The fallback element is a text that says "Loading"
 * and is displayed while the routes are being loaded.
 *
 * @returns {React.ReactElement} The App component.
 */
function App() {

  const { routes } = useHandleRoutes();

  return (
    <Fragment>

      {/* The app navigation component, which handles the navigation of the app */}
      <AppNaviagtor />

      {/* A Suspense component that renders the routes returned by the
       * useHandleRoutes hook. The fallback element is a text that says "Loading"
       * and is displayed while the routes are being loaded. */}
      <Suspense fallback={<p>Loading...</p>}>

        {/* The header component, which renders the app's header */}
        <Header />

        {/* The main section of the app, which renders the routes returned by the
         * useHandleRoutes hook. */}
        <main className='flex-1'>{routes}</main>

      </Suspense>

    </Fragment>
  )
}


export default App;
