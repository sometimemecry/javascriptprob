function myNum(score) {
    if (score === 0) {
        console.log("You got no scores");
    }else if (score >= 1 && score <= 49) {
        console.log("You got F");
    }else if (score >= 50 && score <= 54) {
        console.log("You got D");
    }else if (score >= 55 && score <= 59) {
        console.log("You got D+");
    }else if (score >= 60 && score <= 64) {
        console.log("You got C");
    }else if (score >= 65 && score <= 69) {
        console.log("You got C+");
    }else if (score >= 70 && score <= 74) {
        console.log("You got B");
    }else if (score >= 75 && score <= 79) {
        console.log("You got B+");
    }else if (score >= 80 && score <=100) {
        console.log("You got A! Congratulations");
    }else {
        console.log("Wrong score!");
    }
}

myNum(50);