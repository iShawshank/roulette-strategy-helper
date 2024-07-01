import { Outlet } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-5">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
