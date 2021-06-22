import React, { Component } from 'react';
import Directory from './DirectoryComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import CampsiteInfo from '../components/CampsiteInfoComponents';
import Contact from './ContactComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';





class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
          
        };
    }

 

    render() {

        const HomePage =() =>{

            return(

                <Home/>
            );
        }
        return (
            <div>
                <BrowserRouter>
                <Header />
                <Switch>
                        <Route path='/home' component={HomePage}/>
                <Route exact path='/directory' render={()=> <Directory campsites={this.state.campsites} />}/  >
                <Route exact path='/contactus' component={Contact} />

                <Redirect to='/home' />
               
                </Switch>
                <Footer />
                </BrowserRouter>
            </div>
        );
    }
}

export default Main;