import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Dashboard from '@/components/Dashboard';
import Transactions from '@/components/Transactions';

const App = () => {
  return (
    <>
      <Header />
      <div className='flex items-center justify-center h-[calc(100vh-70px)] mt-[70px] mx-[50px]'>
        <main className='flex items-center justify-center w-full h-full'>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/transactions' element={<Transactions />} />
          </Routes>
        </main>
      </div>
    </>
  );
};

export default App;
