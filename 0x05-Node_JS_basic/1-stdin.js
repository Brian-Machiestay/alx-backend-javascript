console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('data', (data) => {
  process.stdout.write(`your name is: ${data}`);
  process.exit();
});
process.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});