import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import RingLoader from 'react-spinners/RingLoader';

import { Logo, AddLink, Wrapper } from './App.styled';

const Home = lazy(() => import('../pages/Home'));
const AddPage = lazy(() => import('../pages/AddPage/AddPage'));

export function App() {
  const location = useLocation();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Logo to="/">The shop</Logo>
          </Typography>
          {location?.pathname === '/' ? (
            <AddLink to={'/add-product'}>Add new product</AddLink>
          ) : (
            <AddLink to={'/'}>Go back</AddLink>
          )}
        </Toolbar>
      </AppBar>
      <Suspense fallback={<RingLoader />}>
        <Wrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-product" element={<AddPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Wrapper>
      </Suspense>
    </Box>
  );
}
