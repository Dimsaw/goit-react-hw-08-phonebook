import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Container from './componets/Container';
import PhonebookView from './views/PhonebookView';

export default function App() {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<PhonebookView />}></Route>
        </Routes>
      </Suspense>
    </>
  );
}
