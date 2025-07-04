const { execSync } = require('child_process');

const commitMessage = process.argv.slice(2).join(' ');
if (!commitMessage) {
  console.error('❌ Mensagem de commit não informada.');
  process.exit(1);
}

try {
  // Adiciona e commita
  execSync('git add .', { stdio: 'inherit' });
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });

  // Tenta dar push normal
  try {
    execSync('git push', { stdio: 'inherit' });
  } catch {
    // Se falhar, pega o nome da branch atual
    const branchName = execSync('git branch --show-current').toString().trim();
    console.log(`⚙️ Primeira vez na branch '${branchName}', criando upstream...`);
    execSync(`git push --set-upstream origin ${branchName}`, { stdio: 'inherit' });
  }

  console.log(`✅ Alterações commitadas e enviadas pra branch remota!`);
} catch (error) {
  console.error('❌ Erro ao executar os comandos:', error.message);
}
