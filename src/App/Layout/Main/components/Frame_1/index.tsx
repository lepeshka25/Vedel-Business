import React from 'react';
import Mobile from "./components/isMobile";
import {useMediaQuery} from "react-responsive";
import Laptop from "./components/isLaptop";
import cs from './style.module.scss'

const FrameOne = () => {
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div className={cs.frameOne}>
			{!isLaptop && <Mobile/>}
			{isLaptop && <Laptop/>}
		</div>
	);
};

export default FrameOne;