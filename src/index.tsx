import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import {ProviderModal} from "./Provider/stateModalContact";

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ProviderModal>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</ProviderModal>
);