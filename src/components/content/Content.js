import React from 'react';
import classNames from 'classnames';
import { Container } from 'reactstrap';
import NavBar from './Navbar';
import { Switch, Route } from 'react-router-dom';
import ProductDetails from'../UserContext/ProductDetails'
import Login from '../Login';
import Home from '../Home';
import About from '../About';
import Registration from '../Registration';
import Support from '../Support';
import './navbar.css';
import Faq from '../Faq';

import Profile from '../Profile';
import ForgotAccount from '../ForgotAccount';
import ConfirmPassword from '../ConfirmPassword';


import Category from '../Category/Category';
import CategoryList from '../Category/CategoryList';

export default props => (
    <Container  fluid className={classNames('content', {'is-open': props.isOpen}, 'container-oepp')}>
      <NavBar toggle={props.toggle}/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About } />
        <Route path="/category" component={Category} />
        <Route path="/categoryList" component={CategoryList} />
        <Route path="/productdetails" component={ProductDetails} />
    
        <Route path="/Page-1" component={Login} />
        <Route path="/Page-2" component={Registration} />
        <Route path="/Support" component={Support} />
        <Route path = "/Faq"  component ={Faq} />
        <Route path = "/Profile"  component ={Profile} />
        <Route path = "/ForgotAccount"  component ={ForgotAccount} />
        <Route path = "/ConfirmPassword"  component ={ConfirmPassword} />
      </Switch>
    </Container>
)
