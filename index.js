#!/usr/bin/env node
// 告诉系统用node解析

var commander = require('commander');
var  inquirer = require('inquirer');
var download = require('./bin/download');

// 定义版本号命令行 likecli -v或likecli --version 则会返回输出1.0  description是对整个项目的命令输出描述
commander.version(require('./package').version, '-v --version')
         .description('我的cli');

commander.command('init [name]').action(async function(name){
    var questions = [{
        message: '请输入您的项目描述？',
        type: 'input', //交互类型
        name: 'description', //用户输入的内容返回的字段名
    }]
    if(!name) {
        questions.push({
            message: '请输入您的项目名称？',
            type: 'input', //交互类型
            name: 'name', //用户输入的内容返回的字段名
        })
    }
    var description = ''
    await inquirer.prompt(questions).then(function(answers){
        name = name || answers.name; 
        description = answers.description
    })
    download(name, description);
})

// 调用了这个函数上面定义的命令才会生效
commander.parse(process.argv);









// yarn init => yarn add 2 =>/usr/local/lib/node_modules/sprites-cli
// node_module