import React, {FC} from 'react';

import iconCross from '../../../../../assets/Main/FrameFive/Vector.png'
import background from '../../../../../assets/Main/FrameFive/Vector 8.svg'
import top_image from '../../../../../assets/Main/FrameFive/image 125.svg'

import Card from "./components/Card";
import {dataFrameFive, dataFrameFiveMobile, dataListCard} from "../../../../../utils/dataFrameFive";
import {useMediaQuery} from "react-responsive";

import cs from './style.module.scss'

const FrameFive: FC = () => {
	const isLaptop = useMediaQuery({query: '(min-width: 768px)'})

	return (
		<div style={{background: `url("${background}") center / cover no-repeat`}} className={cs.frameFive}>

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

			<div className={cs.container_bottom}>

				<div className={cs.left}>
					<h1 className={cs.title}>выход на новый <br/> уровень жизни</h1>
					<p className={cs.subTitle}>
						В партнерстве с нами вы посмотрите на Мир под другим углом — почувствуете себя в зоне комфорта, личностного роста и финансового изобилия
					</p>
					<p className={cs.content}>
						<img src={iconCross} alt=""/> Премиальные <br/> бонусы
					</p>
				</div>

				<div className={cs.right}>
					<h1>Привилегии для партнеров</h1>

					<div className={cs.container_card}>
						{
							dataListCard.map(item => (
								<div key={item.id} className={cs.card}>
									<img src={item.icon} alt=""/>
									<p>
										{item.text}
									</p>
								</div>
							))
						}
					</div>
				</div>

			</div>

		</div>
	);
};

export default FrameFive;