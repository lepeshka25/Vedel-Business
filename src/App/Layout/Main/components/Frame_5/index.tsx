import React, {FC} from 'react';
import top_image from '../../../../../assets/Main/FrameFive/image 125.svg'
import Card from "./components/Card";
import {dataFrameFive} from "../../../../../utils/dataFrameFive";
import cs from './style.module.scss'

const FrameFive: FC = () => {
	return (
		<div className={cs.frameFive}>
			<div className={cs.container_text}>
				<h1>Что ЕЩЕ вы получите</h1>
				<p>после регистрации</p>
			</div>

			<div className={cs.container_top}>
				<div className={cs.left}>
					<img src={top_image} alt=""/>
				</div>
				<div className={cs.right}>
					{
						dataFrameFive.map(item => (
							<Card icon={item.icon} text={item.text} key={item.id} />
						))
					}
				</div>
			</div>

		</div>
	);
};

export default FrameFive;