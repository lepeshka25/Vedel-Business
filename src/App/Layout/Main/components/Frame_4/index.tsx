import React, {FC} from 'react';
// import {useMediaQuery} from "react-responsive";
import cs from './style.module.scss'
// import Mobile from "./components/isMobile";
// import Laptop from "./components/isLaptop";

const FrameFour: FC = () => {
	// const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div className={cs.frameFour}>

			{/*{!isLaptop && <Mobile/>}*/}
			{/*{isLaptop && <Laptop/>}*/}

		</div>
	);
};

export default FrameFour;