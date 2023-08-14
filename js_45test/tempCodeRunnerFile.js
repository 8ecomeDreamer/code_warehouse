
function makeClosures(arr){
    var result = [];
    for(var i = 0; i < arr.length; i++){
        result[i] = function(x){
            return x*x;
        }
    }
    console.log(result)
    return result;
}

makeClosures([1,2,3]);