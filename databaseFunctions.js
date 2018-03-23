const allocationAmount = {
    "Pasta_Supplied":"4",
    "Rice_Supplied":"5",
    "Rice_XL_Supplied":"10"
};

var SendOrder = function(var AgencyName, var date){
    if(pastaOrder<=allocationAmount){
        database.ref(AgnecyName + "/" + date + "/" + foodCategory + "/" + foodType ).set(orderQuantity);
    }else {
        const leftover = AllocationAmount - orderQuantity;
        database.ref(AgnecyName + "/" + date + "/" + foodCategory + "/" + foodType ).set(allocationAmount);
    }
    database.ref(AgencyName + "/" + date )

}

// var SetAllocation = function(){
//     database.ref(AgencyName +)
// }