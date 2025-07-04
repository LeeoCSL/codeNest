const { execSync } = require('child_process');

const branchToMerge = process.argv[2];
if (!branchToMerge) {
  console.error('❌ Nome da branch a ser mergeada não informado.');
  process.exit(1);
}

try {
  console.log(`🔄 Trocando pra branch main...`);
  execSync('git checkout main', { stdio: 'inherit' });

  console.log(`⬇️ Atualizando main...`);
  execSync('git pull origin main', { stdio: 'inherit' });

  console.log(`🔀 Fazendo merge da branch '${branchToMerge}'...`);
  execSync(`git merge ${branchToMerge}`, { stdio: 'inherit' });

  console.log(`⬆️ Enviando alterações pra main...`);
  execSync('git push origin main', { stdio: 'inherit' });

  console.log(`✅ Merge finalizado com sucesso!`);
} catch (error) {
  console.error('❌ Erro ao fazer o merge:', error.message);
}
