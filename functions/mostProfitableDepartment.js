export default mostProfitableDepartment = salesData => {
    let departmentDic = {}
    
    for (let i = 0; i < salesData.length; i++) {
        let currentObj = salesData[i];
      let saleDepartment = currentObj.department;
      
      if (departmentDic[saleDepartment] === undefined) {
          departmentDic[saleDepartment] = 0;
      } else {
        departmentDic[saleDepartment] += currentObj.sales;
      }
    }
    
    let maxSale = 0;
    let currentDepart = "";
    
    for (let key in departmentDic) {
      
        if (departmentDic[key] > maxSale) {
        maxSale = departmentDic[key];
        currentDepart = key;  
      }
    }

    return currentDepart;
}