import { lazy, LazyExoticComponent } from 'react';
type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  name: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
}

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyPage1" */ '../01-lazyload/layout/LazyLayout'
    )
);

const NoLazy = lazy(
  () => import(/* webpackChunkName: "NoLazy" */ '../01-lazyload/pages/NoLazy')
);

export const routes: Route[] = [
  {
    to: '/lazyload',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'Lazy-1',
  },
  {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];
