const { execSync } = require('child_process');

const commitMessage = process.argv.slice(2).join(' '); // junta todos os argumentos em uma string
if (!commitMessage) {
  console.error('❌ Mensagem de commit não informada.');
  process.exit(1);
}

try {
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  execSync('git push', { stdio: 'inherit' });
  console.log(`✅ Alterações commitadas e enviadas pro repositório!`);
} catch (error) {
  console.error('❌ Erro ao executar os comandos:', error.message);
}
