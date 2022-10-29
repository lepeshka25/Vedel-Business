import React, {FC} from 'react';
import {useMediaQuery} from "react-responsive";
import Laptop from "./components/isLaptop";
import Mobile from "./components/isMobile";
import cs from './header.module.scss'

type THeader = {

}

const Header: FC<THeader> = () => {
	const isMobile = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div className={cs.header}>
			{isMobile ? <Laptop/> : <Mobile/>}
		</div>
	);
};

export default Header;


// <div className={cs.container_logo}>
// 	<Logo/>
// </div>
//
// <div className={cs.container_burger_contact}>
// 	<img src={exclude} alt=""/>
// 	<img onClick={() => setSideBar(true)} src={burger} alt=""/>
// </div>
//
// <div style={sideBar ? {display: 'block'} : {display: 'none'}} className={cs.sideBar_container}>
// 	<SideBar setSideBar={setSideBar}/>
// </div>