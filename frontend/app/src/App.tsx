import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar/Navbar';

/**
 * @file App.tsx
 * @summary This is the main application component that sets up the overall layout and routing.
 * It includes the Navbar and the main content area where different routes are rendered.
 * @module App
 */

/**
 * App component.
 * This is the root component of the application.
 * It renders the Navbar and the AppRoutes, which handles the routing for different pages.
 *
 * @returns {React.ReactElement} The main application UI.
 */
const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <AppRoutes />
      </main>
    </div>
  );
};

export default App;
