
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/css-career-guide/blog',
    component: ComponentCreator('/css-career-guide/blog','06f'),
    exact: true
  },
  {
    path: '/css-career-guide/blog/archive',
    component: ComponentCreator('/css-career-guide/blog/archive','4f1'),
    exact: true
  },
  {
    path: '/css-career-guide/blog/first-blog-post',
    component: ComponentCreator('/css-career-guide/blog/first-blog-post','535'),
    exact: true
  },
  {
    path: '/css-career-guide/blog/tags',
    component: ComponentCreator('/css-career-guide/blog/tags','5c4'),
    exact: true
  },
  {
    path: '/css-career-guide/blog/tags/first-post',
    component: ComponentCreator('/css-career-guide/blog/tags/first-post','42b'),
    exact: true
  },
  {
    path: '/css-career-guide/blog/tags/testing',
    component: ComponentCreator('/css-career-guide/blog/tags/testing','5a6'),
    exact: true
  },
  {
    path: '/css-career-guide/markdown-page',
    component: ComponentCreator('/css-career-guide/markdown-page','46b'),
    exact: true
  },
  {
    path: '/css-career-guide/docs',
    component: ComponentCreator('/css-career-guide/docs','cbf'),
    routes: [
      {
        path: '/css-career-guide/docs/Appendix/A-Resource_List',
        component: ComponentCreator('/css-career-guide/docs/Appendix/A-Resource_List','60e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Appendix/B-Career_Paths',
        component: ComponentCreator('/css-career-guide/docs/Appendix/B-Career_Paths','b48'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Appendix/C-Coursework',
        component: ComponentCreator('/css-career-guide/docs/Appendix/C-Coursework','878'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Appendix/D-Other_Tips',
        component: ComponentCreator('/css-career-guide/docs/Appendix/D-Other_Tips','5cb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Appendix/E-Contributors',
        component: ComponentCreator('/css-career-guide/docs/Appendix/E-Contributors','1ff'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/About_Companies',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/About_Companies','c25'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/Networking',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/Networking','b65'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/Overview',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/Overview','27e'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/The_Behavioral_Interview',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/The_Behavioral_Interview','51d'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/The_OA_and_Technical_Interview',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/The_OA_and_Technical_Interview','c96'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/The_Offer',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/The_Offer','4be'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/When_To_Apply',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/When_To_Apply','73b'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/Where_To_Apply',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/Where_To_Apply','5e1'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Career Guide/Writing_Your_Resume',
        component: ComponentCreator('/css-career-guide/docs/Career Guide/Writing_Your_Resume','0e7'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Common_Misconceptions',
        component: ComponentCreator('/css-career-guide/docs/Common_Misconceptions','76c'),
        exact: true,
        'sidebar': "tutorialSidebar"
      },
      {
        path: '/css-career-guide/docs/Introduction',
        component: ComponentCreator('/css-career-guide/docs/Introduction','acb'),
        exact: true,
        'sidebar': "tutorialSidebar"
      }
    ]
  },
  {
    path: '/css-career-guide/',
    component: ComponentCreator('/css-career-guide/','e03'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
