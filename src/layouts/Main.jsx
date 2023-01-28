import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import TopHeader from './TopHeader'

const Main = () => {
	return (
		<div>
			<TopHeader />
			<Header />
			<Outlet />
			<Footer />
		</div>
	)
}

export default Main
