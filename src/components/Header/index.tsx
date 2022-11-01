import React, {FC} from 'react';
import {useMediaQuery} from "react-responsive";
import Laptop from "./components/isLaptop";
import Mobile from "./components/isMobile";
import cs from './header.module.scss'

type THeader = {

}

const Header: FC<THeader> = () => {
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div className={cs.header}>
			{!isLaptop && <Mobile/>}
			{isLaptop && <Laptop/>}
		</div>
	);
};

export default Header;