import React, {FC} from 'react';
import cs from './cards.module.scss';
import {useMediaQuery} from "react-responsive";

type TCards = {
	text: string,
	title: string,
	image: string,
	backgroundURL: string,
	backgroundColor: string
}

const Cards: FC<TCards> = ({text , title , image, backgroundURL,  backgroundColor}) => {
	return (
		<div
			style={{background: `${backgroundColor}`}}
			className={cs.card}
		>
			{backgroundURL && <img className={cs.background_icon} src={backgroundURL} alt=""/>}
			<div
				className={cs.card_container}
				style={backgroundURL
					? {color: 'white'}
					: {color: '#1C2D5A'}}
			>
				<h2>
					{title}
				</h2>
				<img src={image} alt=""/>
				<p>
					{text}
				</p>
			</div>
		</div>
	);
};

export default Cards;