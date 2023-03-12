let inputGrade = "";

if (inputGrade >= 80) {
    console.log('You got A! Congrat!');
}else if (inputGrade >= 60 && inputGrade <= 79) {
    console.log('You got B! Trymore');
}else if (inputGrade >= 40 && inputGrade <= 59) {
    console.log('You got C! Trymore');
}else if (inputGrade <= 39 && inputGrade >= 1) {
    console.log('You got D! Try harder');
}else if (inputGrade === 0) {
    console.log('You got f! Try harder');
}else if (inputGrade === null || inputGrade === undefined || inputGrade === "") {
    console.log('Wrong input please input a number');
}else {
    console.log('Wrong input');
}
