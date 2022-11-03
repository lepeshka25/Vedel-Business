import React, {FC} from 'react';
import iconPlus from '../../../../../assets/Main/frameTwo/plus.png'
import iconList from '../../../../../assets/Main/frameTwo/Circle.png'
import image from '../../../../../assets/Main/frameTwo/frameTwo_image.svg'
import background from '../../../../../assets/Main/frameTwo/background frame2.svg'

//icon background

import icon1 from '../../../../../assets/icon/Polygon 6.svg'
import iconCrossOrange from '../../../../../assets/icon/+ 3.svg'
import iconCrossWhiteBlue from '../../../../../assets/icon/+ (1).svg'
import iconCrossBlue from '../../../../../assets/icon/+.svg'

//end icon background

import {cardsList} from "../../../../../utils/dataCards";
import Cards from "./components/Cards";

import cs from './style.module.scss'

const FrameTwo: FC = () => {

	return (
		<div
			style={{background: `url("${background}") center / cover no-repeat`}}
			className={cs.frameTwo}
		>

			<div className={cs.greenCircle}></div>

			<div className={cs.orangeCircle}></div>

			<div className={cs.frameTow_container}>
				<div className={cs.container_one}>

					<div className={cs.left}>
						<img src={image} alt=""/>
					</div>

					<div className={cs.right}>
						<h1 className={cs.title}>
							получайте <br/> стабильный доход
						</h1>
						<p className={cs.subTitle}>
							и повышайте качество жизни
						</p>
						<p className={cs.lorem}>
							Мы предлагаем вам готовую систему запуска , ведения и развития <br/> онлайн-бизнеса с нуля.
						</p>

						<ul className={cs.list}>
							<li>
								<p>В неё входят: </p>
							</li>
							<li
							>
								<img src={iconList} alt=""/> <p>эффективные инструменты интернет-маркетинга,</p>
							</li>
							<li
							>
								<img src={iconList} alt=""/> <p>инновационные эко-продукты для здоровья,</p>
							</li>
							<li
							>
								<img src={iconList} alt=""/> <p>система бизнес-обучения и личностного развития.</p>
							</li>
						</ul>

						<div className={cs.container_info}>
							<div className={cs.left}>
								<h1>500$<img src={iconPlus} alt=""/></h1>
								<p>в месяц</p>
							</div>
							<div className={cs.right}>
								<p>
									Используя наш опыт и знания, вы сможете легко
									стать интернет-предпринимателем с доходностью
									от 500$ в месяц в нише эко-продуктов.
								</p>
							</div>
						</div>

					</div>

				</div>

				<div className={cs.container_two}>
					<h1>Решение для тех, <br/> кто хочет работать на себя</h1>
					<div className={cs.container_cards}>
						{
							cardsList.map(item => (
								<Cards
									key={item.id}
									title={item.title}
									text={item.text}
									image={item.image}
									backgroundURL={item.background}
									backgroundColor={item.backogrundColor}
								/>
							))
						}
					</div>
				</div>

				<div className={cs.container_reg}>
					<button>зарегистрироваться</button>
					<p>
						Регистрируйтесь в системе, чтобы <br/> узнать подробнее о доходах
					</p>
				</div>

			</div>
		</div>
	);
};

export default FrameTwo;