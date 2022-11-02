import React, {FC} from 'react';
import * as Frame from './components/'
import cs from './main.module.scss'

const Main: FC = () => {
	return (
		<div className={cs.main}>

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