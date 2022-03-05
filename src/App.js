/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { Component } from 'react';
import Nav from './components/Nav/Nav.js';
import logo from './logo.svg';

const App = () => {
	return (
		<div className={App}>
			<img src={logo} alt="Logo" class='logo' />
			<Nav />
			<div class='Body'>{console.log('body exists')}</div>
			<div>
				<div class='MainContainer'>
					{/* <Route path='/' page={Root} /> */}
				</div>
			</div>
		</div>
	);
};

export default App;
