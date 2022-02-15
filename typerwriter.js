const sentence = 'hello there from lighthouse labs';
const sentenceBreak = sentence + '\n'; //Adds new line to the end of the sentence

let time = 0
for(const letter of sentenceBreak){
  setTimeout(()=>{
    process.stdout.write(letter)
  }, time)
  time+=50;
}