// process.stdout.write('hello from spinner1.js... \rheyyy\n');
let timer = 100;
let flappers = ['|', '/', '-', '\\', '|'];
while (timer < 900) {
  for (let i = 0; i < flappers.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${flappers[i]}   `);
    },timer);
    timer += 100;
  }
};