import React, { Fragment, useState } from 'react';
import { withRouter, Switch, history } from 'umi';
import { Menu,Layout } from 'antd';
import routerConfig from '../../config/router.config';

const { SubMenu } = Menu;
// 创建icon

// 获取子菜单
const getSubMenu = (routesData:any) => {
  routesData.map((item:any) => {
    return <Menu.Item key={item.path}>{item.name}</Menu.Item>;
  });
};
// 获取菜单 此处只遍历了2层，应该使用深度优先或广度优先算法对路由配置结构进行处理
const getMenu = (routesData:any) => {
  console.log(routesData);
  const menuData = [];
  for (let i = 0; i < routesData.length; i += 1) {
    if (Object.prototype.hasOwnProperty.call(routesData[i], 'routes')) {
      menuData.push(
        <SubMenu
          key={routesData[i].path}
          title={routesData[i].name}
          // icon={getIcon(routesData[i].icon)}
        >
          {getSubMenu(routesData[i].routes)}
        </SubMenu>,
      );
    } else {
      menuData.push(
        <Menu.Item key={routesData[i].path}>
          {routesData[i].name}
        </Menu.Item>,
      );
    }
  }
  return menuData;
};
const CreateMenu = () => {
  const [levelOne] = routerConfig;
  console.log(levelOne);
  const { routes } = levelOne;
  return <Fragment>{getMenu(routes)}</Fragment>;
};

export default withRouter(({ children, location }:any) => {
  const [current, setCurrent] = useState('');
  const handleClick = (e:any) => {
    history.push(e.key);
    setCurrent(e.key);
  };

  return (
    <div>
      <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
        {CreateMenu()}
      </Menu>

      <div>
        <Switch location={location}>{children.props.children}</Switch>
      </div>
    </div>
  );
});
