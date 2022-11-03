import React from 'react';
import Logo from "../../../../UI/Logo";
import SideBar from "../SideBar";
import burger from '../../../../assets/Header/Menu.svg'
import exclude from '../../../../assets/Header/Exclude.svg'
import {ContextModal} from "../../../../Provider/stateModalContact";
import cs from './style.module.scss'

const Mobile = () => {
	const data = React.useContext(ContextModal)
	const [sideBar , setSideBar] = React.useState(false)

	return (
		<div className={cs.mobile}>
			<div className={cs.mobile_container}>

				<div className={cs.container_logo}>
					<Logo/>
				</div>

				<div className={cs.container_burger}>

					<div className={cs.container_burger_contact}>
						<img onClick={() => data?.setStateModal(true)} src={exclude} alt=""/>
						<img onClick={() => setSideBar(true)} src={burger} alt=""/>
					</div>

					<div
						style={sideBar ? {display: 'block'} : {display: 'none'}}
						className={cs.sideBar_container}
					>
						<SideBar setSideBar={setSideBar}/>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Mobile;