module.exports = function getZerosCount(number) {
    var remain=1;
    var i=1, zeros=0;
    while(remain>=1){
        remain=number/(Math.pow(5,i));
        i++;
        zeros=zeros+remain;
    }
    return zeros;
}
