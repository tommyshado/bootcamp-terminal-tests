export default callsMadeSmsSent => {
	let smsAndCallArr = callsMadeSmsSent.split(', ');
	let smsAndCallSum = 0;

	for (let i = 0; i < smsAndCallArr.length; i++) {
		const currentSmsOrCall = smsAndCallArr[i];

		currentSmsOrCall === 'call' ? smsAndCallSum += 2.75 : currentSmsOrCall === 'sms' ? smsAndCallSum += 0.65 : smsAndCallSum += 1.30;
		
	}
	return `R${smsAndCallSum.toFixed(2)}`;
}