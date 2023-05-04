const fse = require('fs-extra');

  const sourcebase = `./node_modules/template-djs-gen/slash`;
  const sourcedestino = `./`;
  
  const sourcebase1 = `./node_modules/template-djs-gen/prefix`;
  const sourcedestino1 = `./`;
                                   
   // fse.readdir("", console.log)

  console.log('[CONSOLE] Digite o número da template que deseja criar:')
  console.log('[1] - Para criar uma template Slash (/)')
  console.log('[2] - Para criar uma template Prefix (!)')
  console.log('[CONSOLE] Se você for um novo developer, vá em nosso README.md!')

  
  process.stdin.on('data', data => {
      if(data == 1) {
        try {
          fse.copySync(sourcebase, sourcedestino, { overwrite: true | false })
          console.log('[CONSOLE SUCCESS] - Template gerada com sucesso para Slash(/)')
        } catch (err) {
          console.error(err)
        }
          process.exit();
      } else if(data == 2) {
        fse.copySync(sourcebase1, sourcedestino1, { overwrite: true | false })
        console.log('[CONSOLE SUCCESS] - Template gerada com sucesso para Prefix (!)')
          process.exit();
      } else {
          console.log("[CONSOLE ALERT] - Digite apenas números. Disponíveis: [1] [2]")
      }
    
  });