// complete the given function

function palindrome(str){
	for( let i=0;i<str.length;i++){
		let j=str.length-1;
		if( i<j && str[i]!==str[j]){
			return false;
		}
	}
	return true;

}
module.exports = palindrome
