import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch, useLocation } from 'react-router-dom';

import { setSelectedMenu } from 'src/components/redux/actions';
import type { MenuItemContext } from 'src/types';

import RouteWrapper from './RouteWrapper';

import type { ContentProps } from './Content.types';

const Content: React.FC<ContentProps> = ({ menuItems = [] }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname) {
      const menuItem = menuItems.find(({ path }: MenuItemContext): boolean => path === location.pathname);
      if (!menuItem) {
        dispatch(setSelectedMenu(undefined));
      }
    }
  }, [location?.pathname, menuItems]);

  return (
    <Switch>
      <Suspense fallback={<div />}>
        {menuItems.map((menuItem: MenuItemContext) => (
          <Route
            key={menuItem.pathId}
            exact={menuItem.exact}
            path={menuItem.path}
            render={() => <RouteWrapper menuItem={menuItem} />}
          />
        ))}
      </Suspense>
    </Switch>
  );
};

export default Content;
