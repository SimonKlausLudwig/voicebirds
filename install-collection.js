const exec = require('child-process-promise').exec;
const args = process.argv;
const remote = args[2];

console.log('remote', remote);

exec(`bit list ${remote} -j`, {}).then(function (result) {
  if(!amount)
    var amount = 1;
  const list = JSON.parse(result.stdout);
  const components = list.map(compToNpmId);
  const command = `npm install ${components.join(' ')}`;
  installComponents(command);
});

function installComponents(command) {
  exec(command)
    .then(function (result) {
      var stdout = result.stdout;
      var stderr = result.stderr;
      console.log('stdout: ', stdout);
      console.log('stderr: ', stderr);
    })
    .catch(function (err) {
      console.error('ERROR: ', err);
    });
}

function compToNpmId(component) {
  return bitIdtoNpmId(component.id);
}

function bitIdtoNpmId(bitId) {
  const doted = bitId.replace(/\//g, '.');
  return `@bit/${doted}`;
}
