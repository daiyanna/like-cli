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


作用

在安装第三方带有bin字段的npm，那可执行文件会被链接到当前项目的./node_modules/.bin中，在本项目中，就可以很方便地利用npm执行脚本（package.json文件中scripts可以直接执行：'node node_modules/.bin/myapp'）；在安装时，如果是全局安装，npm将会使用符号链接把这些文件链接到prefix/bin，如果是本地安装，会链接到./node_modules/.bin/。

比如，要使用myapp作为命令时可以这么做：{ "bin" : { "myapp" : "./cli.js" } }
这么一来，当你全局安装myapp，npm会从cli.js文件创建一个到/usr/local/bin/myapp的符号链接(这使你可以直接在命令行执行myapp)。

许多包有一个或多个可执行文件希望被安装到系统路径。它是一个命令名和本地文件名的映射。


