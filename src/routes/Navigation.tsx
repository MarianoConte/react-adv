import {
  BrowserRouter,
  Routes,
  NavLink,
  Route,
  Navigate,
} from 'react-router-dom';
import logo from '../logo.svg';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <div className='main-layout'>
          <nav>
            <img src={logo} alt='logo' />
            <ul>
              {routes.map(({ to, name }) => (
                <li key={to}>
                  <NavLink to={to} end>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ path, Component }) => (
              <Route key={path} path={path} element={<Component />} />
            ))}
            <Route path='*' element={<Navigate to={routes[0].to} replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
