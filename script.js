// complete the given function

function palindrome(str){
	let y= str.split(" ");
		let j=y.length-1;
	for( let i=0;i<(y.length/2);i++){
		if (i < j && y[i] !== y[j]){
			return false;
		}
		j--;
	}
	return true;

}
module.exports = palindrome
