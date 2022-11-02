import React from 'react';
import cs from './style.module.scss'
import Logo from "../../../../UI/Logo";
import {list} from "../../../../utils/list";
import {Link} from "react-router-dom";
import ButtonAuth from "../ButtonAuth";

const Laptop = () => {
	return (
		<div className={cs.Laptop}>
			<div className={cs.container_laptop}>
				<Logo/>

				<div className={cs.container}>
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

					<div className={cs.container_button}>
						<ButtonAuth cs={cs}/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Laptop;