const sentence = "hello there from lighthouse labs\n";


for (const char of sentence) {
  
  setTimeout(() => {
    //print the char here
    process.stdout.write(char);
  }, 1000); // <= 1 second delay to make it noticeable. Can dial it down later.
}
