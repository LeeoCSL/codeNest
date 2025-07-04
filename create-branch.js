const { execSync } = require('child_process');

const branchName = process.argv[2]; // pega o argumento que você passar
if (!branchName) {
  console.error('❌ Nome da branch não informado.');
  process.exit(1);
}

try {
  execSync(`git checkout -b ${branchName}`, { stdio: 'inherit' });
  console.log(`✅ Branch '${branchName}' criada e já está nela!`);
} catch (error) {
  console.error('❌ Erro ao criar a branch:', error.message);
}
