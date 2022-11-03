import React, {FC} from 'react';
import * as Frame from './components/'
import {ContextModal} from "../../../Provider/stateModalContact";
import ContactModal from "../../../UI/ContactModal";
import cs from './main.module.scss'

const Main: FC = () => {
	const data = React.useContext(ContextModal)

	React.useEffect(() => {
		document.body.style.overflow = data?.stateModal ? 'hidden' : '';
		// @ts-ignore
		document.querySelector('html').style.overflow = data?.stateModal ? 'hidden' : '';

	}, [data?.stateModal])

	return (
		<div className={cs.main}>

			<div className={cs.modal_container} style={data.stateModal ? {display: 'block'} : {display: 'none'}}>
				<div className={cs.container}>
					<ContactModal setStateModal={data.setStateModal}/>
				</div>
			</div>

			<Frame.FrameOne/>
			<Frame.FrameTwo/>
			<Frame.FrameThree/>
			<Frame.FrameFour/>
			<Frame.FrameFive/>
			<Frame.FrameSix/>

		</div>
	);
};

export default Main;