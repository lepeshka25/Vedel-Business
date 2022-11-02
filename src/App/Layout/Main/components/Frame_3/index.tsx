import React, {FC} from 'react';
import {useMediaQuery} from "react-responsive";

import circle from '../../../../../assets/Main/frameThree/Circle.png'

import num1 from '../../../../../assets/Main/frameThree/number image/01 1.svg'
import num2 from '../../../../../assets/Main/frameThree/number image/02 1.svg'
import num3 from '../../../../../assets/Main/frameThree/number image/03 1.svg'

import image1 from '../../../../../assets/Main/frameThree/frameThree image1.svg'
import image2 from '../../../../../assets/Main/frameThree/frameThree image2.svg'
import image3 from '../../../../../assets/Main/frameThree/frameThree image3.svg'

import icon1 from '../../../../../assets/Main/frameThree/FrameThree2 icon/icon1.svg'
import icon2 from '../../../../../assets/Main/frameThree/FrameThree2 icon/icon2.svg'
import icon3 from '../../../../../assets/Main/frameThree/FrameThree2 icon/icon3.svg'

import cs from './style.module.scss'

const FrameThree: FC = () => {
	const isLaptop = useMediaQuery({query: '(min-width:768px)'})

	return (
		<div className={cs.frameThree}>

			<div className={cs.frameThree_container}>

				<div className={cs.container_text}>
					<h1 className={cs.title}>Что Вас ждет</h1>
					<p className={cs.subTitle}>после регистрации</p>
				</div>

				<div className={cs.container_list_info}>
					<div className={cs.card_right}>
						<div className={cs.left}>

							{
								!isLaptop
									? (
										<div className={cs.container_title}>
											<img className={cs.num_image} src={num1} alt=""/>
											<div className={cs.container_text}>
												<h1>Обучение</h1>
												<p>всем необходимым знаниям для старта</p>
											</div>
										</div>
									)
									: (
										<img className={cs.num_image} src={num1} alt=""/>
									)
							}

							<div className={cs.container_body}>
								{
									isLaptop && (
										<div className={cs.container_text}>
											<h1>Обучение</h1>
											<p>всем необходимым знаниям для старта</p>
										</div>
									)
								}
								<ul className={cs.list}>
									<li>
										<p>Мы подготовили практический онлайн-курс, где научим вас: </p>
									</li>
									<li>
										<p>
											<img src={circle} alt=""/> финансовой грамотности
										</p>
									</li>
									<li>
										<p>
											<img src={circle} alt=""/> механикам получения прибыли онлайн
										</p>
									</li>
									<li>
										<p>
											<img src={circle} alt=""/> эффективному управлению командой
										</p>
									</li>
									<li>
										<p>
											<img src={circle} alt=""/> стратегиям развития бизнеса
										</p>
									</li>
									<li>
										<p>
											<img src={circle} alt=""/> увеличения прибыли
										</p>
									</li>
									<li>
										<p>
											С этими знаниями и при поддержке куратора, вы сможете выйти на высокий уровень дохода уже через
											месяц
										</p>
									</li>
								</ul>
							</div>

						</div>
						<div className={cs.right}>
							<img src={image1} alt=""/>
						</div>
					</div>

					<div className={cs.card_left}>

						<div className={cs.left}>
							<img src={image2} alt=""/>
						</div>

						<div className={cs.right}>

							{
								!isLaptop
									? (
										<div className={cs.container_title}>
											<img className={cs.num_image} src={num2} alt=""/>
											<div className={cs.container_text}>
												<h1>эко-продукты</h1>
												<p>для комплексного оздоровления организма</p>
											</div>
										</div>
									)
									: (
										<img className={cs.num_image} src={num2} alt=""/>
									)
							}

							<div className={cs.container_body}>
								{
									isLaptop && (
										<div className={cs.container_text}>
											<h1>эко-продукты</h1>
											<p>для комплексного оздоровления организма</p>
										</div>
									)
								}

								<p className={cs.lorem}>
									Уникальные формулы наших продуктов созданы по методу синергизма, получены благодаря нативной вытяжке из высокоэффективного сырья и на 100% состоят из натуральных компонентов <br/>
									<br/>
									Вы сможете комплексно оздоровить свое тело, укрепить иммунитет и улучшить самочувствие с помощью инновационных эко-продуктов по специальным ценам для партнеров
								</p>

								<div className={cs.container_card}>
									<div className={cs.card}>
										<div className={cs.card_container}>
											<img src={icon1} alt=""/>
											<p>
												Собственное <br/> производство
											</p>
										</div>
									</div>
									<div className={cs.card}>
										<div className={cs.card_container}>
											<img src={icon2} alt=""/>
											<p>
												{isLaptop
													? (
														<React.Fragment>
															ECO <br/> состав
														</React.Fragment>
													)
													: (
														<React.Fragment>
															ECO состав
														</React.Fragment>
													)
												}
											</p>
										</div>
									</div>
									<div className={cs.card}>
										<div className={cs.card_container}>
											<img src={icon3} alt=""/>
											<p>
												Высокое <br/> качество
											</p>
										</div>
									</div>
								</div>

							</div>

						</div>

					</div>

					<div className={cs.card_right}>
						<div className={cs.left}>

							{
								!isLaptop
									? (
										<div className={cs.container_title}>
											<img className={cs.num_image} src={num3} alt=""/>
											<div className={cs.container_text}>
												<h1>команда</h1>
												<p>партнеров-единомышленников</p>
											</div>
										</div>
									)
									: (
										<img className={cs.num_image} src={num3} alt=""/>
									)
							}

							<div className={cs.container_body}>
								{
									isLaptop && (
										<div className={cs.container_text}>
											<h1>команда</h1>
											<p>партнеров-единомышленников</p>
										</div>
									)
								}

								<p>
									В компании вы найдете людей со схожими интересами, целями
									и взглядами на жизнь <br/>
									<br/>
									У нас нет конкуренции и соперничества, что делает амтфосферу благоприятной для сотрудничества и общения. Знакомьтесь, обменивайтесь опытом, встречайтесь на бизнес-мероприятиях
									и двигайтесь к большим целям ВМЕСТЕ
								</p>

							</div>

						</div>
						<div className={cs.right}>
							<img src={image3} alt=""/>
						</div>
					</div>
				</div>

			</div>

		</div>
	);
};

export default FrameThree;