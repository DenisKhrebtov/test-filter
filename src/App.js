import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';

const Home = lazy(() => import('./pages/Home'));
const AddPage = lazy(() => import('./pages/AddPage'));

export function App() {
  return (
    <div>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-product" element={<AddPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
}
