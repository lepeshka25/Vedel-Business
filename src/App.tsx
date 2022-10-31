import React from 'react';
import * as Layout from './App/Layout'
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
	return (
		<React.Fragment>
			<Header/>
      <Routes>
				<Route path={'/'} element={<Layout.Main/>}/>
			</Routes>
			<Footer/>
		</React.Fragment>
	);
};

export default App;