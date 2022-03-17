import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import Sidebar from './components/sidebar/Sidebar';
import {useState} from 'react';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Quando essa função for chamada ela vai setar o estado da minha sidebar aberta para verdadeiro.
  const openSidebar = () => {
    setSidebarOpen(true);
  }

  // Quando essa função for chamada ela vai setar o estado da minha sidebar aberta para falso.
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}></Navbar>
      <Main></Main>
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}></Sidebar>
    </div>
  );
}

export default App;

