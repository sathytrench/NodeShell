process.stdout.write('prompt > ');
process.stdin.on('data', (data) => {

  const cmd = data.toString().trim();

  const pwdfunc = require('./pwd');
  const lsfunc = require('./ls');
  const catfunc = require('./cat');
  const curlfunc = require('./curl');

  if (cmd === 'pwd' || cmd === 'PWD') {
    pwdfunc();
  } else if (cmd === 'ls' || cmd === 'LS') {
    lsfunc();
  } else if (cmd.slice(0, 4) === 'cat ') {
    let fileName = cmd.slice(4);
    console.log(fileName);
    catfunc(fileName);
  } else if (cmd.slice(0, 5) === 'curl ') {

  } else {
    process.stdout.write('You typed: ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});







