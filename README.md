一款后台框架，采用前后端分离的思想，类似于APP调用API的思想，好处是省掉大量后台代码跳转页面的代码，坏处就是需要加入网关控制

开发步骤：
1、下载开发工具
https://code.visualstudio.com/

2、下载node.js
https://nodejs.org/en/

3、安装node.js的依赖包
首先检查node.js是否加入环境变量；cmd ---> node -v
比如项目D://github-demo，内部有个文件夹client
其次进入项目的目录：比如D：//github-demo/; 右键当前位置选择此处打开命令窗口   
输入命令：npm install，会生成一个node_modules的文件夹，里面都是node的依赖包

最后进入client文件夹，输入命令：npm install，会生成一个node_modules的文件夹，里面都是node的依赖包

4、启动node.js
cd github-demo --> npm run start 

5、预览
浏览器打开: http://localhost:3000

6、相关框架
采用的是饿了么的前台组件开发
