const months = { 1: "A", 2: "B", 3: "C", 4: "D", 5: "E", 6: "H",
    7: "L", 8: "M", 9: "P", 10: "R", 11: "S", 12: "T" };
    
let person ={name: "Matt",surname: "Edabit",gender: "M",dob: "1/1/1900" }; //"DBTMTT00A01"
let person2 ={ name: "Helen", surname: "Yu", gender: "F", dob: "1/12/1950"}; //"YUXHLN50T41"
let person3 ={name: "Mickey", surname: "Mouse", gender: "M", dob: "16/1/1928"}; //"MSOMKY28A16"
let person4 ={ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961"}; //"CHEBND61T01"
let person5 ={ name: "Marie", surname: "Curie", gender: "F", dob: "7/11/1867"}; //"CRUMRA67S47"
let person6 ={ name: "Al", surname: "Capone", gender: "M", dob: "17/1/1899"}; //"CPNLAX99A17"



function fiscalCode(person) {
    let k;
    let month;
    let i;

    let code=[];
    let consonants=[];
    let vowels=[];

    // SURNAME
    for (i=0; i<person.surname.length; i++){
        if (person.surname[i].toUpperCase() != "A" && person.surname[i].toUpperCase() != "E" && person.surname[i].toUpperCase() != "I" && person.surname[i].toUpperCase() != "O" && person.surname[i].toUpperCase() != "U"){
            consonants.push(person.surname[i].toUpperCase());
        } else {
            vowels.push(person.surname[i].toUpperCase());
        }
    }

    if (consonants.length==3){
        for (i=0; i<3; i++){
            code.push(consonants[i]);
        }
    } else {
            for (i=0; i<consonants.length; i++){
                code.push(consonants[i]);
            }
            j=0;
            while (i<3){
                code.push(vowels[j]);
                i++;
                j++;
                if (j==vowels.length){
                    break;
                }
            }
            
        }
    if (code.length<3){
        for (i=code.length; i<3; i++){
            code.push("X");
            console.log(code);
        }
    }
    consonants=[]; 
    vowels=[];   
    // NAME
    for (i=0; i<person.name.length; i++){
        if (person.name[i].toUpperCase() != "A" && person.name[i].toUpperCase() != "E" && person.name[i].toUpperCase() != "I" && person.name[i].toUpperCase() != "O" && person.name[i].toUpperCase() != "U"){
            consonants.push(person.name[i].toUpperCase());
        } else {
            vowels.push(person.name[i].toUpperCase());
        }
    }
    if (consonants.length==3){
        for (i=0; i<3; i++){
            code.push(consonants[i]);
        }
    } else if (consonants.length>3){
                code.push(consonants[0]);
                code.push(consonants[2]);
                code.push(consonants[3]);
            } else {
                    for (i=0; i<consonants.length; i++){
                        code.push(consonants[i]);
                    }
                    j=0;
                    while (i<3){
                        code.push(vowels[j]);
                        i++;
                        j++;
                        if (j==vowels.length){
                            break;
                        }
                    }
                }
    if (code.length<6){
        for (i=code.length; i<6; i++){
            code.push("X");
        }
    }

    // DATE OF BIRTH
    // GENDER & DATE OF BIRTH: indice 6 to indice 10
    k=6;
    code[k]=person.dob[person.dob.length-2]+person.dob[person.dob.length-1];
    k++;

    if (person.dob[1]=="/" && person.dob[3]=="/"){
        month=person.dob[2];
    }
    if (person.dob[1]=="/" && person.dob[4]=="/"){
        month=person.dob[2]+person.dob[3];
    }
    if (person.dob[2]=="/" && person.dob[4]=="/"){
        month=person.dob[3];
    }
    if (person.dob[2]=="/" && person.dob[5]=="/"){
        month=person.dob[3]+person.dob[4];
    }
    code[k]=months[month];
    k++;    
    
    if (person.gender=="M"){
        if (person.dob[1]=='/'){
            code[k]='0'+person.dob[0];
        } 
        if (person.dob[2]=='/'){
            code[k]=person.dob[0]+person.dob[1];
        }                
    }
    let x;
    if (person.gender=="F"){
       if (person.dob[1]=='/'){
            x=parseInt(person.dob[0])+40;
            code[k]=x;
       }
       if (person.dob[2]=='/'){
            x=parseInt(person.dob[0]+person.dob[1])+40;
            code[k]=x;
        }
    }
    return code.join("");
    
}

console.log(fiscalCode(person));
//Test.assertEquals(fiscalCode({ name: "Brendan", surname: "Eich", gender: "M", dob: "1/12/1961" }), "CHEBND61T01")
