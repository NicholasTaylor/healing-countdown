import React from 'react';
import {Config} from '../constants/config.js';

function Fonts (){
	return(
		<link 
			rel="stylesheet" 
			href="{Config.fontCSS}"
		/>
	);
}

export default Fonts;