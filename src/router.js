import Navbar from './components/Navbar/Navbar.js';
import HomePage from './components/HomePage/HomePage.js';
import EditUserPage from './components/User/Edit/EditUserPage.js';
import SignUpPage from './components/SignUp/SignUpPage.js';
import ShowUserPage from './components/User/ShowUserPage.js';
import CreateFamilyPage from './components/Family/CreateFamilyPage.js';
import InviteFamilyPage from './components/Family/CreateFamilyPage.js';
import SimpleMap from './components/Features/FindMyFamily.js'

const routes = {
  // component: Navbar,
  childRoutes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/signup',
      component: SignUpPage
    },
    {
      path: '/home',
      component: ShowUserPage
    },
    {
      path: '/edituser',
      component: EditUserPage
    },
    {
      path: '/newfamily',
      component: CreateFamilyPage
    },
    {
      path: '/invitefamily',
      component: InviteFamilyPage
    },
    {
      path: '/findme',
      component: SimpleMap
    }
  ]
};

export default routes;
