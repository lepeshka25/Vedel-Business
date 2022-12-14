import React, {FC} from 'react';
import {useMediaQuery} from "react-responsive";
import background from '../../../../../assets/Main/FrameFour/ajy 44 1.png'
import icon from "../../../../../assets/Main/FrameFour/icon.svg";
import cs from './style.module.scss'

const FrameFour: FC = () => {
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div
			style={isLaptop
				? {background: `url("${background}") center / cover no-repeat`}
				: {background: `url("${background}") center / cover no-repeat`}
			}
			className={cs.frameFour}
		>
			<div className={cs.container_frameFour}>
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

		</div>
	);
};

export default FrameFour;