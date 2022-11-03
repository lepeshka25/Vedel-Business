import React from 'react';
import icon from '../../../../../assets/icon/Polygon 6.svg'
import Mobile from "./components/isMobile";
import {useMediaQuery} from "react-responsive";
import Laptop from "./components/isLaptop";
import cs from './style.module.scss'

const FrameOne = () => {
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div className={cs.frameOne}>
			<img
				style={{
					position: 'absolute',
					top: "70px",
					left: '10px'
				}}
				src={icon}
				alt=""
			/>
			{!isLaptop && <Mobile/>}
			{isLaptop && <Laptop/>}
		</div>
	);
};

export default FrameOne;