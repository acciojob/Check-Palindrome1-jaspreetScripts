// complete the given function

function palindrome(str){
		let j=str.length-1;
	for( let i=0;i<(str.length/2);i++){
		if (i < j && str[i] !== str[str.length - 1 - i]){
			return false;
		}
		j--;
	}
	return true;

}
module.exports = palindrome
