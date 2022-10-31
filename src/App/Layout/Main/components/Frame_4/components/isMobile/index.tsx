import React from 'react';
import icon from '../../../../../../../assets/Main/FrameFour/icon.svg'
import background from '../../../../../../../assets/Main/FrameFour/backgroundMobile.svg';
import cs from './style.module.scss';

const Mobile = () => {
	return (
		<div className={cs.mobile}>
			<img src={background} alt=""/>
			<div style={{background: `url("${icon}") center / cover no-repeat`}} className={cs.container}>
				<img src={icon} alt=""/>
				<p>
					развивайте свое дело и получайте доход в партнерстве с нами
				</p>
				<button>зарегистрироваться</button>
			</div>
		</div>
	);
};

export default Mobile;