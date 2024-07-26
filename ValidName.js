/*  A term is either an initials or word.
    initials = 1 character
    words = 2+ characters (no dots allowed)
    A valid name is a name written in one of the following ways:

    H. Wells
    H. G. Wells
    Herbert G. Wells
    Herbert George Wells
    The following names are invalid:

    Herbert or Wells (single names not allowed)
    H Wells or H. G Wells (initials must end with dot)
    h. Wells or H. wells or h. g. Wells (incorrect capitalization)
    H. George Wells (middle name expanded, while first still left as initial)
    H. G. W. (last name is not a word)
    Herb. G. Wells (dot only allowed after initial, not word)
    Rules
    Both initials and words must be capitalized.
    Initials must end with a dot.
    A name must be either 2 or 3 terms long.
    If the name is 3 words long, you can expand the first and middle name or expand the first name only. You cannot keep the first name as an initial and expand the middle name only.
    The last name must be a word (not an initial).
    Your task is to write a function that determines whether a name is valid or not. Return true if the name is valid, false otherwise.
*/

function validName(name){
    let namArr = name.split(" ");
    
    for (i of namArr) {
        if (i[0] !== i[0].toUpperCase()) {
            console.log("First letter is not capitalized");
            return false;
        } 
    }

    if (namArr.length < 2 || namArr.length > 3) {
        console.log("Name is too short, must be at least 2 words long, or words + initials")
        return false;
    } else if (namArr.length == 2) {
                if (namArr[namArr.length - 1].length < 2) {
                    console.log("Last name is too short, must be at least 2 words long");
                    return false;
                }
                for (i of namArr) {
                    if (i.length < 2) {
                        console.log("Name is too short, must be at least 2 words  long");
                        return false;
                    } else if (i.length == 2 && i[1] != ".") {
                                console.log("Initials must end with a dot");
                                return false;
                            } else if (i.length > 2 && i[i.length - 1] == ".") {
                                        console.log("words must not end with a dot");
                                        return false;
                                    }
                }

            } else if (namArr.length == 3) {
                if (namArr[namArr.length - 1].length < 2) {
                    console.log("Last name is too short, must be at least 2 words long");
                    return false;
                }
                if (namArr[0].length == 2 && namArr[1].length > 2) {
                    console.log("Middle name expanded, while first still left as initial");
                    return false;
                }
                if (namArr[namArr.length-1].length <= 2 ) {
                    console.log("Last name cannot be an initial");
                    return false;
                }
                for (i of namArr) {
                    if (i.length < 2) {
                        console.log("Name is too short, must be at least 2 words  long");
                        return false;
                    } else if (i.length == 2 && i[1] != ".") {
                                console.log("Initials must end with a dot");
                                return false;
                            } else if (i.length > 2 && i[i.length - 1] == ".") {
                                        console.log("words must not end with a dot");
                                        return false;
                                    }
                }
            }
    return true;
}

console.log(validName("H. Wells")); // Expected: true
console.log(validName("H. G. Wells")); // Expected: true
console.log(validName("Herbert G. Wells")); // Expected: true
console.log(validName("Herbert George Wells")); // Expected: true
console.log(validName("Herbert")); // Expected: false Name must be 2 or 3 words.
console.log(validName("Herbert W. G. Wells")); // Expected: false Name must be 2 or 3 words.
console.log(validName("h. Wells")); // Expected: false Incorrect capitalization.
console.log(validName("herbert G. Wells")); // Expected: false Incorrect capitalization.
console.log(validName("H Wells")); // Expected: false Initials must end with a dot.
console.log(validName("Herb. Wells")); // Expected: false Dot only allowed after initial, not word.
console.log(validName("H. George Wells")); // Expected: false Middle name expanded, while first still left as initial.
console.log(validName("Herbert George W.")); // Expected: false Last name cannot be an initial.

