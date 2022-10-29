import React from 'react';
import Logo from "../../../../UI/Logo";
import Contact from "../Contact";
import SideBar from "../SideBar";
import burger from '../../../../assets/Header/Menu.svg'
import exclude from '../../../../assets/Header/Exclude.svg'
import cs from './style.module.scss'

const Mobile = () => {
	const [sideBar , setSideBar] = React.useState(false)
	const [contact , setContact] = React.useState(false)

	return (
		<div className={cs.mobile}>
			<div className={cs.mobile_container}>

				<div className={cs.container_logo}>
					<Logo/>
				</div>

				<div className={cs.container_burger}>

					<div className={cs.container_burger_contact}>
						<img src={exclude} alt=""/>
						<img onClick={() => setSideBar(true)} src={burger} alt=""/>
					</div>

					<div
						style={contact ? {display: 'block'} : {display: 'none'}}
						className={cs.container_contact}
					>
						<Contact setContactModal={setContact}/>
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