const args = [ 'start' ];
const opts = { stdio: 'inherit', cwd: 'hs-client', shell: true };
const spawn = require('cross-spawn');
spawn('npm', args, opts);