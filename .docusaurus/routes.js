import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '5bd'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '57a'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '2b0'),
            routes: [
              {
                path: '/contracts/',
                component: ComponentCreator('/contracts/', '4a6'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/PoolManager',
                component: ComponentCreator('/contracts/PoolManager', '6dc'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/PositionDescriptor',
                component: ComponentCreator('/contracts/PositionDescriptor', '2b7'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/PositionManager',
                component: ComponentCreator('/contracts/PositionManager', 'af8'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/Quoter',
                component: ComponentCreator('/contracts/Quoter', 'f56'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/StateView',
                component: ComponentCreator('/contracts/StateView', '133'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/contracts/UniversalRouter',
                component: ComponentCreator('/contracts/UniversalRouter', '33c'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/deploymentAddresses',
                component: ComponentCreator('/deploymentAddresses', '872'),
                exact: true,
                sidebar: "contractSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', '1d4'),
                exact: true,
                sidebar: "contractSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
