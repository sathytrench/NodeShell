process.stdout.write('prompt > ');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  const pwdfunc = require('./pwd');

  const lsfunc = require('./ls');

  if (cmd === 'pwd' || cmd === 'PWD') {
    pwdfunc();
  } else if (cmd === 'ls' || cmd === 'LS') {
    lsfunc();
  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});