
const users = {"data" : [{"user" : "mike@gmail.com", "rating" : 20, "disabled" : false},
                        {"user" : "grag@gmail.com", "rating" : 14, "disabled" : false},
                        {"user" : "grag@gmail.com", "rating" : 12, "disabled" : false},
                        {"user" : "grag@gmail.com", "rating" : 34, "disabled" : false},
                        {"user" : "john@gmail.com", "rating" : 25, "disabled" : true},
                        {"user" : "john@gmail.com", "rating" : 45, "disabled" : true},
                        {"user" : "john@gmail.com", "rating" : 5, "disabled" : true}],
                  "condition" : {"exclude" : [{"disabled" : true}], "sort_by" : ["rating"]}};



const filterAndSortData = (inputData) => { 
   // const { data, condition : { exclude, sort_by } } = inputData; 
   const data = inputData.data;
   const exclude = inputData.condition.exclude;
   const sort_by = inputData.condition.sort_by;

   let filteredData = data;

   exclude.forEach(element => {
      const keys = Object.keys(element);
      filteredData = filteredData.filter(user => user[keys[0]] !== element[keys[0]]);
   });

   const sortedData = filteredData.sort((a,b) => a[sort_by] - b[sort_by]);
      
   return sortedData;

}

console.log(filterAndSortData(users));






