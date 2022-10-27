import React, {FC} from 'react';
import Logo from "../../UI/Logo";
import burger from '../../assets/Header/Menu.svg'
import exclude from '../../assets/Header/Exclude.svg'
import cs from './header.module.scss'
import SideBar from "./components/SideBar";

type THeader = {

}

const Header: FC<THeader> = () => {
	const [sideBar , setSideBar] = React.useState(false)

	return (
		<div className={cs.header}>
			<div className={cs.container_logo}>
				<Logo/>
			</div>

			<div className={cs.container_burger_contact}>
				<img src={exclude} alt=""/>
				<img onClick={() => setSideBar(true)} src={burger} alt=""/>
			</div>

			<div style={sideBar ? {display: 'block'} : {display: 'none'}} className={cs.sideBar_container}>
				<SideBar setSideBar={setSideBar}/>
			</div>



		</div>
	);
};

export default Header;