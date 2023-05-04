const fs = require("fs");
module.exports = async (client) => {
fs.readdir(`./Commands/`, (erro, pasta) => {
  pasta.forEach(subpasta => {
fs.readdir(`./Commands/${subpasta}/`, (erro, arquivos) => {
  arquivos.forEach(arquivo => {  
  if(!arquivo?.endsWith('.js')) return;
  comando = require(`../Commands/${subpasta}/${arquivo}`);
client.prefixCommands.set(arquivo.replace(/.js/g, ""), comando); 
    if(comando?.aliases?.length){
      comando.aliases.forEach(cmd => client.prefixCommands.set(cmd, comando))
    }
  });
    });
  });
})

fs.readdir(`./Events/`, (erro, pasta) => {
  pasta.forEach(subpasta => {
    fs.readdir(`./Events/${subpasta}/`, (erro, arquivos) => {
      arquivos.forEach(arquivo => {
        if (!arquivo.endsWith('.js')) return; require(`../Events/${subpasta}/${arquivo}`);
      });
    });
  });
});
};