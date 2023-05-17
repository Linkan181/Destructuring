let sampleText="You are building a word count generator that will take a large string of text as input and output the words and the number of times they are present in the string. Your task is to write a function that can count the occurrences of each word in the string and return a Map containing each word's count. For simplicity, you can assume that the string only contains alphabetic characters and spaces.";

function findOccurrences(str){
    let count=new Map();
    let words=str.split(" ");

    


    for(let word of words){
        if(count.has(word)){
            count.set(word,count.get(word)+1);
        }
        else{
            count.set(word,1);
        }
    }

    return count;
}

let mapObject_containingWordCount=findOccurrences(sampleText);
// console.log(mapObject_containingWordCount);
for(let [word,count] of mapObject_containingWordCount){
    console.log(word+":"+count);
}
