

export default (strRegNum, locat) => {
    let splittedStrReg = strRegNum.split(",");
    let counter = 0;
  
  	for (let i = 0; i < splittedStrReg.length; i++) {
    	const currentReg = splittedStrReg[i].trim();
      
      	if (currentReg.startsWith(locat)) {
        	counter++;
        }
    }
  	return counter;
}