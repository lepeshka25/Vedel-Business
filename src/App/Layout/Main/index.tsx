import React, {FC} from 'react';
import * as Frame from './components/'
import cs from './main.module.scss'

const Main: FC = () => {
	return (
		<div className={cs.main}>

			<Frame.frame_1/>
			<Frame.frame_2/>
			<Frame.frame_3/>
			<Frame.frame_4/>
			<Frame.frame_5/>
			<Frame.frame_6/>
			<Frame.frame_7/>

		</div>
	);
};

export default Main;