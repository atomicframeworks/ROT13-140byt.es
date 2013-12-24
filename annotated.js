function r(
	a,      // Input text
	b       // Will be undefined at first ++undefined results in NaN which is falsy. Subsequently b will be the index of match which will test true so the character will be rotated
){
	return ++b ?                                                    // When used as a string replacement function it will return the new charater due to the fact that b is being set.
		String.fromCharCode(                                        // Create a string from the rotated value
			(a < "[" ? 91 : 123 )                                   // If the character is uppercase (character code value < ]) set the character limit to 91 otherwise set the limit to 123.
				> ( a=a.charCodeAt() + 13 ) ? a : a - 26)           // If rotated character value is greater than the limit (91 or 123)  loop to the beginning by subtracting 26
		: a.replace(/[A-z]/g, r)                                    // Replace all A-Z and a-z characters using this function (r)
}