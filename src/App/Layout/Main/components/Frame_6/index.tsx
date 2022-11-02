import React, {FC} from 'react';
import background from '../../../../../assets/Main/FrameSix/Mask Group.png'
import cs from './style.module.scss'

const FrameSix: FC = () => {
	return (
		<div style={{background: `url("${background}") center / cover no-repeat`}} className={cs.frameSix}>
			<h1>Начните менять свою жизнь уже сегодня</h1>
			<button>
				зарегистрироваться
			</button>
		</div>
	);
};

export default FrameSix;