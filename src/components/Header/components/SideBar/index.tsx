import React, {FC} from 'react';
import cross from '../../../../assets/Header/SideBar/cross.svg'
import {list} from "../../../../utils/list";
import {Link} from "react-router-dom";
import ButtonAuth from "../ButtonAuth";
import cs from './sidebar.module.scss';

type TSideBar = {
	setSideBar: (state: boolean) => void
}

const SideBar: FC<TSideBar> = ({setSideBar}) => {
	return (
		<div className={cs.sideBar}>
			<div className={cs.sideBar_header}>
				<img onClick={() => setSideBar(false)} src={cross} alt=""/>
			</div>
			<div className={cs.sideBar_body}>
				<ul className={cs.list}>
					{
						list.map(item => (
							<li key={item.id}>
								<Link className={cs.link} to={item.path}>
									{item.title}
								</Link>
							</li>
						))
					}
				</ul>
				<div className={cs.btn_container}>
					<ButtonAuth cs={cs}/>
				</div>
			</div>
		</div>
	);
};

export default SideBar;