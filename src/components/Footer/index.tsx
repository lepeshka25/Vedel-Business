import React, {FC} from 'react';
import logo from '../../assets/Header/Logo.svg'
import iconIns from '../../assets/Footer/instagram 1.svg'
import iconVk from '../../assets/Footer/vk 1.svg'
import iconFacebook from '../../assets/Footer/facebook 1.svg'
import iconTwi from '../../assets/Footer/twitter 1.svg'
import cs from './footer.module.scss'

type TFooter = {
	
}

const Footer: FC<TFooter> = () => {
	return (
		<div className={cs.footer}>
			<div className={cs.container_footer}>
				<div className={cs.container_top_footer}>
					<img className={cs.logo} src={logo} alt=""/>

					<ul className={cs.list}>
						<li>
							<img src={iconIns} alt=""/>
						</li>
						<li>
							<img src={iconVk} alt=""/>
						</li>
						<li>
							<img src={iconFacebook} alt=""/>
						</li>
						<li>
							<img src={iconTwi} alt=""/>
						</li>
					</ul>
				</div>

				<div className={cs.container_bottom_footer}>
					<div className={cs.container_text}>
						<p>©2021 «Company name» | Разработано - Effex-it.com</p>
					</div>
					<div className={cs.container_text_bottom}>
						<p>Пользовательское соглашение</p>
						<p>Политика конфиденциальности</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;