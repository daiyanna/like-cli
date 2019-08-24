# likeCli

* npm link
  用于本地调试 结合bin把包关联到全局的命令上去
* main
  require的时候main配置的模块的exports对象会被返回。
* node 环境
  入口文件第一行语句
* require
  commander 用于定义命令
  inquirer 用于和用户交互
* npm官网https://www.npmjs.com/
  npm adduser
  npm publish 发布当前项目目录下面的npm包，重新发布修改package中的version即可更新
  发布的时候注意package中的name，不能于现有的npm冲突了否则报错，dyn-likecli
  yarn global install dyn-likecli
  likecli此为bin中定义的作为命令使用 likecli init
