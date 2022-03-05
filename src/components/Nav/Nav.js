import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Root from '../.././pages/Root.js';
import Projects from '../.././pages/Projects.js';
import LinkDiv from '../.././pages/LinkDiv.js';
import Interests from '../.././pages/Interests.js';
import About from '../.././pages/About.js';
import Terminal from 'react-hackterm';
const Nav = () => (
	<nav>
		<Router>
			<Routes>
				<Route exact path='/'>
					<Root id='root' />
				</Route>
				<Route exact path='/projects'>
					<Projects id='projects' />
				</Route>
				<Route exact path='/linkDiv'>
					<LinkDiv />
				</Route>
				<Route exact path='interests'>
					<Interests id='interests' />
				</Route>
				<Route exact path='/about'>
					<About id='about' />
				</Route>
			</Routes>

			<Terminal
				config={{
					mode: 'default',
					modeText: 'durbanspoison.io',
					width: 500,
					height: 300,
					edge: true,
					font: 'monospace',
					text: 14,
				}}
				theme='pure'
				bar='macos'
				command={[
					{
						name: 'pwd',
						description: 'Print working directory',
						value: `React.useEffect(
							useLocation(location, Location),
							console.log({ location })`,
						id: { Location },
					},
					{
						name: 'whoami',
						description: `<i>beep beep, not the Feds beep beep</i>`,
						value: 'theFeds',
						id: 'notGov',
					},
					{
						//call into the dom the router and routes and paths?
						name: 'cd /',
						description: 'change directory: /root ',
						value: '/',
						id: 'root',
					}, //would love to just use and [array] of the routes
					{
						name: 'cd /projects',
						description: 'change directory: /projects',
						value: '/projects',
						id: 'projects',
					},
					{
						name: 'cd /links',
						description: 'change directory: /links',
						value: '/links',
						id: 'links',
					},
					{
						name: 'cd /interests',
						description: 'change directory: /interests',
						value: '/interests',
						id: 'interests',
					},
					{
						name: 'cd /about',
						description: 'change directory: /about',
						value: '/about',
						id: 'about',
					},
				]}
			/>
		</Router>
	</nav>
);

export default Nav;
