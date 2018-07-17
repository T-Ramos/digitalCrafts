function lvl4exercise1() {
    var boolean = true;
    return boolean;
	// Return the boolean value "true"
}
console.log(lvl4exercise1())

function lvl4exercise2() {
    var boolean = false;
    return boolean;
	// Return the boolean value "false"
}
console.log(lvl4exercise2())

function lvl4exercise3(bool) {
    return !bool;
	// Return the opposite of the input boolean value
}
console.log(lvl4exercise3(true))

function lvl4exercise4(bool1, bool2) {
    return bool1 && bool2;
	// Return the logical "and" of the input boolean values

}
console.log(lvl4exercise4(true, false))

function lvl4exercise5(bool1, bool2) {
    return bool1 || bool2;
	// Return the logical "or" of the input boolean values
	
}
console.log(lvl4exercise5(true, false))

function lvl4exercise6(bool1, bool2) {
	// Return the logical "equivalence" of the input boolean values
	return bool1 == bool2;
}
console.log(lvl4exercise6(true, false))