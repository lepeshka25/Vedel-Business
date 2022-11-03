import React from 'react';
import text from '../../../../../../../assets/Main/FrameOne/не выходя из дома 2.svg'
import background from '../../../../../../../assets/Main/FrameOne/Изображение главный экран 1.png'
import {data} from "../../../../../../../utils/dataFrameOne";
import cs from './style.module.scss'
import ContactModal from "../../../../../../../UI/ContactModal";

const Laptop = () => {
	const [stateModal , setStateModal] = React.useState(false)
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

			<div className={cs.laptop_container_bottom}>
				<ContactModal setStateModal={setStateModal}/>
				<div className={cs.container_card}>
					{
						data?.map(item => (
							<div key={item.id} className={cs.card}>
								<div className={cs.container}>
									<img src={item.icon} alt=""/>
									<p>{item.text}</p>
								</div>
							</div>
						))
					}
					{/*{
						data?.map(item => (
							<div key={item.id} className={cs.card}>
								<div className={cs.container_card}>
									<img src={item.icon} alt=""/>
									<p>{item.text}</p>
								</div>
							</div>
						))
					}*/}
				</div>
			</div>
		</div>
	);
};

export default Laptop;