const sentence = 'hello there from lighthouse labs';
// const sentenceBreak = sentence + '\n'; Adds new line to the end of the sentence

let time = 0
for(const letter of sentence){
  setTimeout(()=>{
    process.stdout.write(letter)
  }, time)
  time+=50;
}
setTimeout(()=>{
  process.stdout.write('\n')
}, time)