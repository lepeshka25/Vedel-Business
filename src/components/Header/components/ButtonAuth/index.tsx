import React, {FC} from 'react';
import {Link} from "react-router-dom";

type TButtonAuth = {
	cs: any
}

const ButtonAuth: FC<TButtonAuth> = ({cs}) => {
	return (
		<React.Fragment>
			<button className={cs.sign_in}>
				<Link className={cs.link}  to={''}>
					Вход
				</Link>
			</button>
			<button className={cs.sign_us}>
				<Link className={cs.link} to={''}>
					Регистрация
				</Link>
			</button>
		</React.Fragment>
	);
};

export default ButtonAuth;