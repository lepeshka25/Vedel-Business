import React, {FC} from 'react';
import cs from './contact.module.scss'

type TContact = {
	setContactModal: (state: boolean) => void
}

const Contact : FC<TContact> = ({setContactModal}) => {
	return (
		<div className={cs.contact}>

		</div>
	);
};

export default Contact;