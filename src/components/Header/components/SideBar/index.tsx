import React, {FC} from 'react';
import cross from '../../../../assets/Header/SideBar/cross.svg'
import cs from './sidebar.module.scss';
import {list} from "../../../../utils/list";
import {Link} from "react-router-dom";

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
					<button className={cs.sign_in}>
						<Link className={cs.link}  to={''}>
							Вход
						</Link>
					</button>
					<button className={cs.sign_us}>
						<Link className={cs.link} to={''}>
							Регистрация
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SideBar;