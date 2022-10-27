import React, {FC} from 'react';
import cs from './contactModal.module.scss'

type TContactModal = {
	setStateModal: (state: boolean) => void
}

const ContactModal: FC<TContactModal> = ({setStateModal}) => {
	return (
		<div className={cs.modal}>
			
		</div>
	);
};

export default ContactModal;