import AppRoutes from './routes/AppRoutes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
