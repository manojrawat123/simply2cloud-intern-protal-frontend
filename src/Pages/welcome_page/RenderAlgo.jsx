import Cookies from 'js-cookie'
import React from 'react'
import WelcomePage from './WelcomePage';
import CompanyWelcomPage from '../CompanyUserPages/CompanyHomePage/CompanyWelcomPage';
import { Navigate } from 'react-router-dom';
import NmHome from './NmHome/NmHome';
import AdLandingPage from './LandingPage/AdLandingPage';

const RenderAlgo = () => {
  return (
   <AdLandingPage />
  )
}

export default RenderAlgo
