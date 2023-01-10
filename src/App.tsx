import React from 'react';
import Layout from './components/Layout/Layout';
import UserInput from './components/UserInput/UserInput';

function App() {
  return (
    <Layout>
      <main className='w-full min-h-screen'>
        <UserInput />
      </main>
    </Layout>
  );
}

export default App;
