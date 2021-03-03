# Node Nosync

防止 `node_modules` 同步到 iCloud 中。

## 原理

iCloud 不会同步以 `.nosync` 结尾的文件以及文件夹。

将 `node_modules` 重命名为 `node_modules.nosync`，然后创建一个软链 `node_modules` 指向 `node_modules.nosync` 即可实现。

## 使用

安装

```bash
npm i -g node-nosync
# or
yarn global add node-nosync
```

然后在 `node_modules` 同级目录下执行 `nosync`，即可。

本工具启发自 [nosync-icloud](https://github.com/HaoChuan9421/nosync-icloud#readme)，但是将其极简化，一个工具只做一件事。

## 建议的使用方法

将其放到你的 `package.json` 中 `postinstall` 脚本内，像下面这样
```json
{
    "script": {
        "postinstall": "nosync"
    }
}
```