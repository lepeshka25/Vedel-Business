import React, {FC} from 'react';
import logo from '../../assets/Header/Logo.svg'
import cs from './style.module.scss'

const Logo : FC = () => {
	return (
		<img className={cs.logo} src={logo} alt=""/>
	);
};

export default Logo;