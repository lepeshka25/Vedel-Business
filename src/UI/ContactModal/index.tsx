import React, {FC} from 'react';
import image from '../../assets/ContactModal/image.svg'
import {BsFillPersonFill} from "react-icons/bs";
import {IoIosMail} from "react-icons/io";
import {MdCall} from "react-icons/md";
import cs from './contactModal.module.scss'
import {ContactModalData} from "../../utils/ContactModal";

type TContactModal = {
	setStateModal: (state: boolean) => void
}

const ContactModal: FC<TContactModal> = ({setStateModal}) => {
	return (
		<div className={cs.modal}>
			<div className={cs.modal_container}>
				<div className={cs.left}>
					<h1>Есть вопросы?</h1>
					<p>C вами на связи:</p>
					<div className={cs.container_people_info}>
						<img src={image} alt=""/>
						<div className={cs.contact_list}>
							<p><BsFillPersonFill className={cs.icon}/> Johne Doe</p>
							<p><IoIosMail className={cs.icon}/> johndoe@gmail.com</p>
							<p><MdCall className={cs.icon}/> +7 983 994 82 12</p>
						</div>
					</div>
				</div>

				<div className={cs.right}>
					{
						ContactModalData.map((item , index) => (
							<img key={index} className={cs.icon} src={item} alt=""/>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default ContactModal;