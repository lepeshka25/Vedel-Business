import React, {FC} from 'react';
import iconPlus from '../../../../../assets/Main/frameTwo/plus.png'
import iconList from '../../../../../assets/Main/frameTwo/Circle.png'
import image from '../../../../../assets/Main/frameTwo/frameTwo_image.svg'
import background from '../../../../../assets/Main/frameTwo/background frame2.svg'
import cs from './style.module.scss'

const FrameTwo: FC = () => {
	return (
		<div
			style={{background: `url("${background}") center / cover no-repeat`}}
			className={cs.frameTwo}
		>
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
								style={{listStyle: `georgian inside url('${iconList}')`}}
							>
								эффективные инструменты интернет-маркетинга,
							</li>
							<li
								style={{listStyle: `georgian inside url('${iconList}')`}}
							>
								инновационные эко-продукты для здоровья,
							</li>
							<li
								style={{listStyle: `georgian inside url('${iconList}')`}}
							>
								система бизнес-обучения и личностного развития.
							</li>
						</ul>

						<div className={cs.container_info}>
							<div className={cs.left}>
								<h1>500$<img src={iconPlus} alt=""/></h1>
								<p>в месяц</p>
							</div>
							<div className={cs.right}>
								<p>
									Используя наш опыт и знания, вы сможете легко <br/>
									стать интернет-предпринимателем с доходностью <br/>
									от 500$ в месяц в нише эко-продуктов.
								</p>
							</div>
						</div>

					</div>

				</div>

				<div className={cs.container_two}>

				</div>
			</div>
		</div>
	);
};

export default FrameTwo;