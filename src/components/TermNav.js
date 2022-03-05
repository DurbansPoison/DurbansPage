/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {useLocation} from 'react-router'
import Terminal from 'react-hackterm';
import {TermRoutes} from './TermRoutes';
// import Root from '../../pages/Root.js';
// import Projects from '../../pages/Projects.js';
// import Links from '../../pages/Links.js';
// import Interests from '../../pages/Interests.js';
// import About from '../../pages/about/About.js';
// want to use figlet to say developer name in font on hackterm
// import figlet from 'figlet'
// import useFiglet from 'use-figlet-react'
// import { Routes } from 'react-router-dom';
// ^^^^^^^^^^^documentation on use-figlet-hook in react   https://npm.io/package/react-hook-figlet

// define routes and paths here
// let pathProjects = Projects().setPath({
//     thisPath(pathFromRoot('/projects')

// }

// find way to use figlet in hackterm

export function TermNav() {
	return (
		<div>
			<Router>
				<TermRoutes useExact useLocation useRoutes >
				<Terminal
					config={{

						mode: 'root',
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
							description: 'location ',
							value: `React.useEffect(data => () = ({useLocation(this(location(data))) , useRoutes(this(Routes) log(data), useLocation(this(location).log(data(('location', this.Location()),('routes', this.Routes)))`,
							id: 'location'
						},
						{
							name: 'pwd',
							description: 'Print working directory',
							value: '/',
							id: 'location'
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
				</TermRoutes>
			</Router>
		</div>
	);
}

