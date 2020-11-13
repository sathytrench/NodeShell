process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === 'pwd' || cmd === 'PWD') {
    process.stdout.write(process.cwd());
    return;
  }

  process.stdout.write('You typed: ' + cmd);
  process.stdout.write('\nprompt > ');
});
