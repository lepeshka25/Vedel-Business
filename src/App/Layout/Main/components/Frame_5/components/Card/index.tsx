import React, {FC} from 'react';
import background from '../../../../../../../assets/Main/FrameFive/background Card.svg'
import cs from './style.module.scss'

type TCard = {
	icon: string,
	text: string
}

const Card: FC<TCard> = ({icon, text}) => {
	return (
		<div
			style={
				{background: `url("${background}") center / cover no-repeat`}
			}
			className={cs.card}
		>
			<div className={cs.container_card}>
				<img src={icon} alt=""/>
				<p>
					{text}
				</p>
			</div>
		</div>
	);
};

export default Card;