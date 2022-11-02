import React, {FC} from 'react';
import top_image from '../../../../../assets/Main/FrameFive/image 125.svg'
import Card from "./components/Card";
import {dataFrameFive, dataFrameFiveMobile} from "../../../../../utils/dataFrameFive";
import cs from './style.module.scss'
import {useMediaQuery} from "react-responsive";

const FrameFive: FC = () => {
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

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
						!isLaptop && dataFrameFiveMobile.map(item => (
							<div key={item[0].id} className={cs.card_container}>
								<Card icon={item[0].icon} text={item[0].text} />
								<Card icon={item[1].icon} text={item[1].text} />
							</div>
						))
					}
					{
						isLaptop && dataFrameFive.map(item => (
							<Card icon={item.icon} text={item.text} key={item.id} />
						))
					}
				</div>
			</div>

		</div>
	);
};

export default FrameFive;