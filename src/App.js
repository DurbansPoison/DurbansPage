/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';
import logo from './logo.svg';
import './App.css';
const App = () => {
	return (
		<div className={App}>
		<header>

			<Nav class='nav'/>
			<img src={logo} alt="Logo" class='App-logo' />
			<div class='Body'>{console.log('body exists')}</div>
			</header>
			<div>
				<div class='MainContainer'>
					{/* <Route path='/' page={Root} /> */}
				</div>
			</div>
		</div>
	);
};

export default App;
