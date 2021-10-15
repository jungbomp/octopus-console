import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setSelectedMenu } from 'src/components/redux/actions';

import { RouteWrapperProps } from './RouteWrapper.types';

const RouteWrapper: React.FC<RouteWrapperProps> = ({ menuItem }) => {
  const dispatch = useDispatch();
  const { component: Component } = menuItem;

  useEffect(() => {
    dispatch(setSelectedMenu(menuItem));
  }, [menuItem]);

  return <Component />;
};

export default RouteWrapper;
