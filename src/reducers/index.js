import {UPDATE_TIMER} from '../constants/action-types';
import {Config} from '../constants/config';

const initState = {
	percentComplete: 25,
	totalRemaining: ''
}

const getDemoEnd = () => {
	let now = new Date();
	let [newMonth, newDate] = now.getDate() >= 15 ? [now.getMonth() + 2, 1] : [now.getMonth() + 1, 15];
	let newYear;
	[newYear, newMonth] = newMonth > 11 ? [now.getFullYear() + 1, newMonth - 12] : [now.getFullYear(), newMonth];
	return new Date(newYear, newMonth, newDate, 12);
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
			const dispUnit = (unit, txt) => {
				return `${unit}${txt}`;
			}
			return `${dispUnit(days,'d')}, ${dispUnit(hours,'h')}, ${dispUnit(minutes,'m')}, ${dispUnit(seconds,'s')}`;
		}

		const endDate = !(Config.demoMode) ? new Date(Config.endDate) : getDemoEnd();
		const startDate = !(Config.demoMode) ? new Date(Config.startDate) : (endDate - 5184000000);
		const todayDate = new Date();
		const totalRange = Math.abs(endDate - startDate);
		const totalElapsed = Math.abs(todayDate -startDate);
		let totalRemaining = totalRange - totalElapsed;
		totalRemaining = totalRemaining > 0 ? timeRemaining(totalRemaining) : '0 seconds' ;
		let percentComplete = Math.round((totalElapsed / totalRange) * 10000) / 100;
		percentComplete = percentComplete < 100 ? percentComplete : 100;
		return Object.assign({},state,{	
			percentComplete: percentComplete,
			totalRemaining: totalRemaining
		});
	}
	return state;
}