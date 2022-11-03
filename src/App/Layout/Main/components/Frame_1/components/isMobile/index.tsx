import React from 'react';
import background from '../../../../../../../assets/Main/FrameOne/Изображение главный экран 2.png'
import title from '../../../../../../../assets/Main/FrameOne/не выходя из дома 1.svg'
import cs from './style.module.scss'
import {data} from "../../../../../../../utils/dataFrameOne";

const Mobile = () => {
	return (
		<div className={cs.mobile}>
			<div className={cs.container_mobile}>
				<div className={cs.mobile_top}>
					<img className={cs.background} src={background} alt=""/>
					<div className={cs.container_text}>
						<div className={cs.container_title}>
							<p className={cs.title}>
								запустите свой бизнес
							</p>
							<p className={cs.title2}>
								за 1 день
							</p>
							<img className={cs.title3} src={title} alt=""/>
						</div>
						<div className={cs.container_lorem}>
							<p className={cs.lorem}>
								Воспользуйтесь высокодоходной бизнес-моделью и получайте прибыль онлайн. Узнайте все подробности программы после БЕСПЛАТНОЙ регистрации.
							</p>
							<div className={cs.container_btn}>
								<button className={cs.btn_sign}>
									зарегистрироваться
								</button>
								<br/>
								<button className={cs.btn_info}>
									что мы предлагаем
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className={cs.mobile_bottom}>
					{
						data?.map(item => (
							<div key={item.id} className={cs.card}>
								<div className={cs.container_card}>
									<img src={item.icon} alt=""/>
									<p>{item.text}</p>
								</div>
							</div>
						))
					}
				</div>

			</div>
		</div>
	);
};

export default Mobile;