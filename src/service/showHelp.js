'use strict';

const printInfo = () => console.log(`
Программа учит Маргариту пользоваться CLI интерфейсом Node.js.

    Гайд:
    server <command>
    
    Команды:
    --version:            выводит номер версии
    --help:               печатает этот текст
    --generate <count>    формирует файл mocks.json
    
`)
module.exports = {
  printInfo
};
