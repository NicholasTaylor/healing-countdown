import {UPDATE_TIMER} from '../constants/action-types';
import {Config} from '../constants/config';

const initState = {
	percentCompleteVW: '25vw',
	percentRemainVW: '25vw',
	percentComplete: 25,
	totalRemaining: ''
}

export default function rootReducer(state = initState, action) {
	if (action.type === UPDATE_TIMER){
		const timeRemaining = function(millisecs){
			let runningCount = 0;
			const days = Math.floor(millisecs/86400000);
			runningCount += (days * 86400000);
			const hours = Math.floor(millisecs/3600000) - Math.floor(runningCount/3600000);
			runningCount += (hours * 3600000);
			const minutes = Math.floor(millisecs/60000) - Math.floor(runningCount/60000);
			runningCount += (minutes * 60000);
			const seconds = Math.floor(millisecs/1000) - Math.floor(runningCount/1000);
			if (days > 0){
				var daysText = days + ' days ';
			} else {
				var daysText = '';
			}
			if (hours > 0){
				var hoursText = hours + ' hours ';
			} else {
				var hoursText = '';
			}
			if (minutes > 0){
				var minutesText = minutes + ' minutes ';
			} else {
				var minutesText = '';
			}
			if (seconds > 0){
				var secondsText = seconds + ' seconds';
			} else {
				var secondsText = '';
			}
			return daysText + hoursText + minutesText + secondsText;
		}

		const startDate = new Date(Config.startDate);
		const endDate = new Date(Config.endDate);
		const todayDate = new Date();
		const totalRange = Math.abs(endDate - startDate);
		const totalElapsed = Math.abs(todayDate -startDate);
		const totalRemainingRaw = totalRange - totalElapsed;
		const totalRemaining = totalRemainingRaw > 0 ? timeRemaining(totalRemainingRaw) : '0 seconds' ;
		const percentCompleteRaw = Math.round((totalElapsed / totalRange) * 10000) / 100;
		const percentComplete = percentCompleteRaw < 100 ? percentCompleteRaw : 100;
		const percentCompleteVW = Math.round((percentComplete / 100) * 50);
		const percentRemainVW = 50 - percentCompleteVW;
		return Object.assign({},state,{	
			percentCompleteVW: percentCompleteVW + 'vw',
			percentRemainVW: percentRemainVW +'vw',
			percentComplete: percentComplete,
			totalRemaining: totalRemaining
		});
	}
	return state;
}