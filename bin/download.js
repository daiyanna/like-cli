var fs = require('fs');
var path = require('path');
var chalk = require('chalk');

module.exports = function download(name, description) {
    var rootPath = path.resolve(process.cwd()); //项目根目录
    var fromPath = path.join(rootPath, 'project');
    var toPath = path.join(rootPath, name);;
    var fileArr = [];

    fs.stat(toPath, function(err, stat){
        if(!err) { // 没有错表示目录能获取到 报错则获取不到
            console.log(chalk.red('项目已经存在'))
            process.exit(); 
        } else {
            readDir(fromPath, '');
            // console.log(fileArr)
            writeFile(toPath);
        }
    });

    // 文件读取时异步的 readdirSync这个函数是同步
    function readDir(dirPath, shortPath){
        var files = fs.readdirSync(dirPath);
        files.forEach(function(filename){
            var nowPath = path.join(dirPath, filename); //长路径用于读取文件时候用
            var fileStat = fs.statSync(nowPath);
            var nowShortPath = path.join(shortPath, filename) //短路径用于写文件的时候与目标路径的连接
            if(fileStat.isDirectory()) {
                fileArr.push(['dir', nowPath, nowShortPath])
                readDir(nowPath, nowShortPath);
            }
            if(fileStat.isFile()) {
                fileArr.push(['file', nowPath, nowShortPath])
            }
        })
    }
    

    function writeFile(toPath) {
        fs.mkdirSync(toPath);

        fileArr.forEach(function(item){
            var nowToPath = path.join(toPath, item[2])
            if(item[0] === 'file'){
                fs.readFile(item[1], function(err, data){
                    if(err) {
                        console.log(chalk.redn('读取文件【'+nowToPath+'】报错：' +err));
                    } else {
                        fs.writeFile(nowToPath, data, function(err, data){
                            if(err) {
                                console.log(chalk.red('写文件【'+nowToPath+'】报错：' +err));
                            }
                        });
                    }
                })
            }
            if(item[0] === 'dir'){
                // 因为需要先创建目录才能写入文件否则会报错
                fs.mkdirSync(nowToPath);
            }
        })
        console.log(chalk.green('项目创建成功'))
    }
    

}

// 整个目录可以一起复制的包
// var fse=require('fs-extra');
// fse.copy(path.join(__dirname,'../template'), folder, (err)=> {
//     if(err){
//         console.log(chalk.red(err))
//     }else{
//         console.log(chalk.green('项目创建成功'))
//     }
// }) 
