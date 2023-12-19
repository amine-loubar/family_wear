import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load components
const Home = React.lazy(() => import('./pages/home/Home'));
const Category = React.lazy(() => import('./pages/category/Category'));
const Login = React.lazy(() => import('./pages/login/Login'));
const Product = React.lazy(() => import('./pages/product/Product'));
const SignUp = React.lazy(() => import('./pages/signup/SignUp'));
const Cart = React.lazy(() => import('./pages/cart/Cart'));
const Admin = React.lazy(() => import('./pages/admin/Admin'));
const AddProduct = React.lazy(() => import('./pages/addProduct/AddProduct'));
import Loading from './components/reusable/loading/Loading'

function App() {
  return (
    <div className='container'>
      <Router>
        <Routes>
          <Route path='/' exact element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path='/men' exact element={<Suspense fallback={<Loading />}><Category /></Suspense>} />
          <Route path='/women' exact element={<Suspense fallback={<Loading />}><Category /></Suspense>} />
          <Route path='/kids' exact element={<Suspense fallback={<Loading />}><Category /></Suspense>} />
          <Route path='/login' exact element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
          <Route path='/signup' exact element={<Suspense fallback={<Loading />}><SignUp /></Suspense>} />
          <Route path='/product/:id' exact element={<Suspense fallback={<Loading />}><Product /></Suspense>} />
          <Route path='/cart' exact element={<Suspense fallback={<Loading />}><Cart /></Suspense>} />
          <Route path='/admin' exact element={<Suspense fallback={<Loading />}><Admin /></Suspense>} />
          <Route path='/admin/addproduct' exact element={<Suspense fallback={<Loading />}><AddProduct /></Suspense>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
