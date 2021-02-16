import React from 'react';
import {Config} from '../constants/config.js';

function Fonts (){
	return(
		<style>
			@import url({Config.fontCSS});
	  	</style>
	);
}

export default Fonts;