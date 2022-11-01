import React from 'react';
import icon from '../../../../../../../assets/Main/FrameFour/icon.svg'
import background from '../../../../../../../assets/Main/FrameFour/backgroundMobile.svg';
import cs from './style.module.scss';

const Mobile = () => {
	return (
		<div
			style={{background: `url("${background}") center / cover no-repeat`}}
			className={cs.mobile}
		>

			<div className={cs.container}>
				<img src={icon} alt=""/>

				<div className={cs.card}>
					<p>
						развивайте свое дело и получайте доход в партнерстве с нами
					</p>
					<button>зарегистрироваться</button>
				</div>
			</div>

		</div>
	);
};

export default Mobile;