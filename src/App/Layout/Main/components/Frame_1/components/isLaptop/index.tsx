import React from 'react';
import text from '../../../../../../../assets/Main/FrameOne/не выходя из дома 2.svg'
import background from '../../../../../../../assets/Main/FrameOne/Изображение главный экран 1.png'
import cs from './style.module.scss'

const Laptop = () => {
	return (
		<div className={cs.laptop}>
			<div
				style={{
					// background: `url("${background}") center / cover no-repeat`,
				}}
				className={cs.laptop_container}
			>
				<img className={cs.background} src={background} alt=""/>

				<div className={cs.container}>
					<div className={cs.container_text}>
						<p className={cs.title}>
							запустите свой бизнес
						</p>
						<div className={cs.container_title2}>
							<p className={cs.title2}>
								за 1 день
							</p>
						</div>
						<img className={cs.title3} src={text} alt=""/>
					</div>
					<p className={cs.lorem}>
						Воспользуйтесь высокодоходной <br/>
						бизнес-моделью и получайте прибыль онлайн. <br/>
						Узнайте все подробности программы после <br/>
						бесплатной регистрации.
					</p>
					<div className={cs.container_btn}>
						<button>зарегистрироваться</button>
						<button>что мы предлагаем</button>
					</div>
				</div>

			</div>
		</div>
	);
};

export default Laptop;