/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
     // Write your code here
    var str="";
    for (var i=1; i<=n;i++){
        
        for (var j=1; j<= n-i; j++){
            str+=" ";
        }
        for (var k=1; k<=i; k++){
            str+=" *";
        }
        str+="  \n";
    }
    return str;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/
module.exports = buildPyramid;
