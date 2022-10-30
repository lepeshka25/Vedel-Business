import React, {FC} from 'react';
import circle from '../../../../../assets/Main/frameThree/Circle.png'
import num1 from '../../../../../assets/Main/frameThree/number image/01 1.svg'
// import num2 from '../../../../../assets/Main/frameThree/number image/02 1.svg'
// import num3 from '../../../../../assets/Main/frameThree/number image/03 1.svg'
import image1 from '../../../../../assets/Main/frameThree/frameThree image1.svg'
// import image2 from '../../../../../assets/Main/frameThree/frameThree image2.svg'
// import image3 from '../../../../../assets/Main/frameThree/frameThree image3.svg'
import cs from './style.module.scss'
import {useMediaQuery} from "react-responsive";

const FrameThree: FC = () => {
	const isLaptop = useMediaQuery({query: '(min-width:768px)'})

	return (
		<div className={cs.frameThree}>
			<div className={cs.container_text}>
				<h1 className={cs.title}>Что Вас ждет</h1>
				<p className={cs.subTitle}>после регистрации</p>
			</div>

			<div className={cs.container_list_info}>
				<div className={cs.card_one}>
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
			</div>
		</div>
	);
};

export default FrameThree;