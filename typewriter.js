const char = "hello there from lighthouse labs";
for (let i=0;i<char.length;i++) {
  
setTimeout(() => {
 process.stdout.write(char[i]);
  // print the char here
}, 1000+50*i) // <= 1s delay to make it noticeable. Can dial it down later.
  
}
